import { z } from "zod";
import {
  IntervalSchema,
  AudioParametersSchema,
  type Interval,
} from "@/api/audio";

const DEFAULT_ENDPOINTS = {
  get: "/api/v1/spectrograms/",
};

export const MIN_DB = -140;

export const SpectrogramWindowSchema = z.object({
  time: IntervalSchema,
  freq: IntervalSchema,
});

export type SpectrogramWindow = z.infer<typeof SpectrogramWindowSchema>;

export const STFTParametersSchema = z
  .object({
    window_size: z.number().positive().default(0.025),
    hop_size: z.number().positive().default(0.01),
    window: z.string().default("hann"),
  })
  .refine(
    (data) => {
      return data.window_size > data.hop_size;
    },
    {
      message: "window_size must be greater than hop_size",
      path: ["window_size"],
    },
  );

export type STFTParameters = z.input<typeof STFTParametersSchema>;

export const AmplitudeParametersSchema = z
  .object({
    scale: z.enum(["amplitude", "power", "dB"]).default("dB"),
    clamp: z.boolean().default(false),
    min_dB: z.number().nonpositive().gte(MIN_DB).default(MIN_DB),
    max_dB: z.number().nonpositive().gte(MIN_DB).default(0),
    normalize: z.boolean().default(true),
  })
  .refine(
    (data) => {
      return data.min_dB < data.max_dB;
    },
    {
      message: "min_dB must be less than max_dB",
      path: ["min_dB"],
    },
  );

export type AmplitudeParameters = z.input<typeof AmplitudeParametersSchema>;

export const SpectrogramParametersSchema = AudioParametersSchema.and(
  STFTParametersSchema,
)
  .and(AmplitudeParametersSchema)
  .and(
    z.object({
      channel: z.number().nonnegative().int().default(0),
      pcen: z.boolean().default(false),
      cmap: z.string().default("cividis"),
    }),
  );

export type SpectrogramParameters = z.input<typeof SpectrogramParametersSchema>;

const DEFAULT_CMAP: string = "cividis";

export const DEFAULT_SPECTROGRAM_PARAMETERS: SpectrogramParameters = {
  resample: false,
  scale: "dB",
  pcen: true,
  cmap: DEFAULT_CMAP,
  normalize: true,
};

export function registerSpectrogramApi({
  endpoints = DEFAULT_ENDPOINTS,
  baseUrl = "",
}: {
  endpoints?: typeof DEFAULT_ENDPOINTS;
  baseUrl?: string;
}) {
  function getUrl({
    recording_id,
    segment,
    parameters = DEFAULT_SPECTROGRAM_PARAMETERS,
  }: {
    recording_id: number;
    segment: Interval;
    parameters?: SpectrogramParameters;
  }) {
    // Validate parameters
    const parsed_params = SpectrogramParametersSchema.parse(parameters);
    const parsed_segment = IntervalSchema.parse(segment);

    // Construct query
    const query = {
      recording_id: recording_id,
      start_time: parsed_segment.min,
      end_time: parsed_segment.max,
      ...parsed_params,
    };

    const params = new URLSearchParams(
      Object.fromEntries(
        Object.entries(query).map(([key, value]) => [key, value.toString()]),
      ),
    );

    // Get url
    return `${baseUrl}${endpoints.get}?${params}`;
  }

  return {
    getUrl,
  };
}