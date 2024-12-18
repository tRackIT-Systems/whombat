import { useRef, useMemo, useCallback } from "react";
import { DEFAULT_SPECTROGRAM_PARAMETERS } from "@/api/spectrograms";
import Player from "@/components/audio/Player";
import Card from "@/components/Card";
import SpectrogramBar from "@/components/spectrograms/SpectrogramBar";
import SpectrogramControls from "@/components/spectrograms/SpectrogramControls";
import SpectrogramSettings from "@/components/spectrograms/SpectrogramSettings";
import SpectrogramPredictedTags from "@/components/spectrograms/SpectrogramPredictedTags";
import type {
  ClipEvaluation,
  SpectrogramParameters,
  Position,
  Interval,
} from "@/types";
import useSpectrogram from "@/hooks/spectrogram/useSpectrogram";
import useAudio from "@/hooks/audio/useAudio";
import useCanvas from "@/hooks/draw/useCanvas";
import useSpectrogramTrackAudio from "@/hooks/spectrogram/useSpectrogramTrackAudio";
import { getInitialViewingWindow } from "@/utils/windows";
import useMatchDraw from "@/hooks/evaluation/useMatchDraw";
import useSpectrogramPredictionTags from "@/hooks/spectrogram/useSpectrogramPredictionTags";

const DEFAULT_THRESHOLD: Interval = { min: 0.5, max: 1 };

export default function ClipEvaluationSpectrogram(props: {
  clipEvaluation: ClipEvaluation;
  threshold?: Interval;
  parameters?: SpectrogramParameters;
  showPredictions?: boolean;
  showAnnotations?: boolean;
  onParameterSave?: (parameters: SpectrogramParameters) => void;
}) {
  const {
    clipEvaluation,
    threshold = DEFAULT_THRESHOLD,
    parameters = DEFAULT_SPECTROGRAM_PARAMETERS,
    showPredictions = true,
    showAnnotations = true,
    onParameterSave,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dimensions = canvasRef.current?.getBoundingClientRect() ?? {
    width: 0,
    height: 0,
  };

  const { clip_prediction: clipPrediction } = clipEvaluation;

  const { clip } = clipPrediction;
  const { recording } = clip;

  const bounds = useMemo(
    () => ({
      time: { min: clip.start_time, max: clip.end_time },
      freq: { min: 0, max: recording.samplerate / 2 },
    }),
    [clip.start_time, clip.end_time, recording.samplerate],
  );

  const initial = useMemo(
    () =>
      getInitialViewingWindow({
        startTime: clip.start_time,
        endTime: clip.end_time,
        samplerate: recording.samplerate,
        parameters,
      }),
    [recording.samplerate, clip.start_time, clip.end_time, parameters],
  );

  const audio = useAudio({
    recording,
    endTime: bounds.time.max,
    startTime: bounds.time.min,
    withAutoplay: false,
    onWithAutoplayChange: () => {},
  });

  const { seek } = audio;
  const handleDoubleClick = useCallback(
    ({ position }: { position: Position }) => {
      seek(position.time);
    },
    [seek],
  );

  const spectrogram = useSpectrogram({
    dimensions,
    recording,
    bounds,
    initial,
    parameters,
    onDoubleClick: handleDoubleClick,
    enabled: !audio.isPlaying,
    withSpectrogram: true,
    fixedAspectRatio: false,
    toggleFixedAspectRatio: () => null,
  });

  const { centerOn } = spectrogram;

  const handleTimeChange = useCallback(
    (time: number) => centerOn({ time }),
    [centerOn],
  );

  const { draw: drawTrackAudio, enabled: trackingAudio } =
    useSpectrogramTrackAudio({
      viewport: spectrogram.viewport,
      currentTime: audio.currentTime,
      isPlaying: audio.isPlaying,
      onTimeChange: handleTimeChange,
    });

  const {
    props: spectrogramProps,
    draw: drawSpectrogram,
    isLoading: spectrogramIsLoading,
  } = spectrogram;

  const predictions = useMemo(
    () => clipPrediction.sound_events || [],
    [clipPrediction.sound_events],
  );

  const matches = useMemo(
    () => clipEvaluation.sound_event_evaluations || [],
    [clipEvaluation.sound_event_evaluations],
  );

  const drawMatches = useMatchDraw({
    viewport: spectrogram.viewport,
    matches,
    threshold,
    showPredictions,
    showAnnotations,
  });

  const tags = useSpectrogramPredictionTags({
    predictions,
    viewport: spectrogram.viewport,
    dimensions,
    threshold,
  });

  const draw = useMemo(() => {
    if (spectrogramIsLoading) {
      return (ctx: CanvasRenderingContext2D) => {
        ctx.canvas.style.cursor = "wait";
      };
    }
    if (trackingAudio) {
      return (ctx: CanvasRenderingContext2D) => {
        drawSpectrogram(ctx);
        drawTrackAudio(ctx);
        drawMatches(ctx);
      };
    }
    return (ctx: CanvasRenderingContext2D) => {
      drawSpectrogram(ctx);
      drawMatches(ctx);
    };
  }, [
    drawSpectrogram,
    drawTrackAudio,
    spectrogramIsLoading,
    trackingAudio,
    drawMatches,
  ]);

  useCanvas({ ref: canvasRef, draw });

  return (
    <div>
      <Card>
        <div className="flex flex-row gap-4">
          <SpectrogramControls
            canZoom={spectrogram.canZoom}
            fixedAspectRatio={false}
            onReset={spectrogram.reset}
            onZoom={spectrogram.enableZoom}
            onToggleAspectRatio={() => null}
          />
          <SpectrogramSettings
            samplerate={recording.samplerate}
            settings={spectrogram.parameters}
            onChange={spectrogram.setParameters}
            onReset={spectrogram.resetParameters}
            onSave={() => onParameterSave?.(spectrogram.parameters)}
          />
          <Player {...audio} />
        </div>
        <div className="relative overflow-hidden h-96 rounded-md">
          <SpectrogramPredictedTags tags={tags} threshold={threshold}>
            <canvas
              ref={canvasRef}
              {...spectrogramProps}
              className="absolute w-full h-full"
            />
          </SpectrogramPredictedTags>
        </div>
        <SpectrogramBar
          bounds={spectrogram.bounds}
          viewport={spectrogram.viewport}
          onMove={spectrogram.zoom}
          recording={recording}
          parameters={spectrogram.parameters}
          withSpectrogram={true}
        />
      </Card>
    </div>
  );
}
