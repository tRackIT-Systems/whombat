import { useCallback, useState, useMemo } from "react";

import drawBBox from "@/draw/bbox";
import useWindowMotions from "@/hooks/window/useWindowMotions";
import { scaleBBoxToViewport } from "@/utils/geometry";

import type { Position, SpectrogramWindow } from "@/types";

export const VALID_STYLE = {
  fillAlpha: 0.3,
  fillColor: "yellow",
  borderWidth: 1,
  borderColor: "yellow",
  borderDash: [4, 4],
};

export const INVALID_STYLE = {
  fillAlpha: 0.3,
  fillColor: "red",
  borderWidth: 1,
  borderColor: "red",
  borderDash: [4, 4],
};

const MIN_TIME_ZOOM = 0.001;
const MIN_FREQ_ZOOM = 1;

function validateWindow(window: SpectrogramWindow) {
  const { time, freq } = window;
  if (time.min < 0 || freq.min < 0) return false;
  return (
    time.max - time.min > MIN_TIME_ZOOM && freq.max - freq.min > MIN_FREQ_ZOOM
  );
}

function enforceAspectRatio(
  window: SpectrogramWindow,
  targetRatio: number,
  initial: Position,
  shift: Position
): SpectrogramWindow {
  const timeSpan = Math.abs(shift.time);
  const freqSpan = Math.abs(shift.freq);
  const currentRatio = timeSpan / freqSpan;

  if (currentRatio > targetRatio) {
    const newTimeSpan = freqSpan * targetRatio;
    const timeDirection = shift.time >= 0 ? 1 : -1;
    
    return {
      time: {
        min: Math.min(initial.time, initial.time + newTimeSpan * timeDirection),
        max: Math.max(initial.time, initial.time + newTimeSpan * timeDirection),
      },
      freq: {
        min: Math.min(initial.freq, initial.freq - shift.freq),
        max: Math.max(initial.freq, initial.freq - shift.freq),
      }
    };
  } else {
    const newFreqSpan = timeSpan / targetRatio;
    const freqDirection = shift.freq >= 0 ? 1 : -1;
    
    return {
      time: {
        min: Math.min(initial.time, initial.time + shift.time),
        max: Math.max(initial.time, initial.time + shift.time),
      },
      freq: {
        min: Math.min(initial.freq, initial.freq - newFreqSpan * freqDirection),
        max: Math.max(initial.freq, initial.freq - newFreqSpan * freqDirection),
      }
    };
  }
}

export default function useSpectrogramZoom({
  viewport,
  dimensions,
  onZoom,
  fixedAspectRatio,
  enabled = true,
}: {
  viewport: SpectrogramWindow;
  dimensions: { width: number; height: number };
  onZoom?: (window: SpectrogramWindow) => void;
  fixedAspectRatio: boolean;
  enabled?: boolean;
}) {
  const [isValid, setIsValid] = useState(false);
  const [currentWindow, setCurrentWindow] = useState<SpectrogramWindow | null>(
    null,
  );

  // Calculate the target aspect ratio from the current viewport
  const targetRatio = useMemo(() => {
    if (!fixedAspectRatio) return null;
    const timeSpan = viewport.time.max - viewport.time.min;
    const freqSpan = viewport.freq.max - viewport.freq.min;
    return timeSpan / freqSpan;
  }, [viewport, fixedAspectRatio]);

  const handleMoveStart = useCallback(() => {
    setCurrentWindow(null);
  }, []);

  const handleMove = useCallback(
    ({ initial, shift }: { initial: Position; shift: Position }) => {
      let window = {
        time: {
          min: Math.min(initial.time, initial.time + shift.time),
          max: Math.max(initial.time, initial.time + shift.time),
        },
        freq: {
          min: Math.min(initial.freq, initial.freq - shift.freq),
          max: Math.max(initial.freq, initial.freq - shift.freq),
        },
      };

      if (fixedAspectRatio && targetRatio !== null) {
        window = enforceAspectRatio(window, targetRatio, initial, shift);
      }

      setCurrentWindow(window);
      setIsValid(validateWindow(window));
    },
    [fixedAspectRatio, targetRatio],
  );

  const handleMoveEnd = useCallback(() => {
    if (currentWindow == null) return;
    if (isValid) {
      onZoom?.(currentWindow);
    }
    setCurrentWindow(null);
  }, [currentWindow, isValid, onZoom]);

  const { props, isDragging } = useWindowMotions({
    enabled,
    viewport,
    dimensions,
    onMoveStart: handleMoveStart,
    onMove: handleMove,
    onMoveEnd: handleMoveEnd,
  });

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      if (!enabled) return;

      if (currentWindow == null) return;
      ctx.canvas.style.cursor = "nwse-resize";

      const dimensions = ctx.canvas.getBoundingClientRect();
      const bbox = scaleBBoxToViewport(
        dimensions,
        [
          currentWindow.time.min,
          currentWindow.freq.min,
          currentWindow.time.max,
          currentWindow.freq.max,
        ],
        viewport,
      );

      const style = isValid ? VALID_STYLE : INVALID_STYLE;
      drawBBox(ctx, bbox, style);
    },
    [enabled, currentWindow, viewport, isValid],
  );

  return {
    zoomProps: props,
    isDragging,
    isValid,
    draw,
  };
}
