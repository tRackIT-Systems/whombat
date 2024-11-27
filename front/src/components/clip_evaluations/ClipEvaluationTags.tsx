import { useMemo } from "react";

import { H4 } from "@/components/Headings";
import Empty from "@/components/Empty";
import { TagsIcon } from "@/components/icons";
import TagComponent from "@/components/tags/Tag";
import type { Tag, ClipEvaluation, Interval } from "@/types";
import useStore from "@/store";

const DEFAULT_THRESHOLD: Interval = { min: 0.5, max: 1 };

export default function ClipEvaluationTags(props: {
  clipEvaluation: ClipEvaluation;
  onTagClick?: (tag: Tag) => void;
  threshold?: Interval;
}) {
  const getTagColor = useStore((state) => state.getTagColor);
  const { clipEvaluation, onTagClick, threshold = DEFAULT_THRESHOLD } = props;

  const { clip_prediction: clipPrediction, clip_annotation: clipAnnotation } =
    clipEvaluation;

  const predictedTags = useMemo(() => {
    const tags = clipPrediction.tags || [];
    return tags.filter(
      (tag) => tag.score >= threshold.min && tag.score <= threshold.max,
    );
  }, [clipPrediction.tags, threshold]);

  const tags = useMemo(() => {
    return clipAnnotation.tags || [];
  }, [clipAnnotation.tags]);

  return (
    <div className="p-2">
      <H4 className="text-center">
        <TagsIcon className="inline-block w-4 h-4 mr-1" />
        Tags
      </H4>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <h5 className="font-bold text-stone-500">Predicted</h5>
          {predictedTags.map(({ tag }) => (
            <TagComponent
              key={`${tag.key}-${tag.value}`}
              tag={tag}
              onClick={() => onTagClick?.(tag)}
              {...getTagColor(tag)}
              count={null}
            />
          ))}
          {predictedTags.length === 0 && (
            <Empty padding="p-0">No predicted tags.</Empty>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-bold text-stone-500">True</h5>
          {tags.map((tag) => (
            <TagComponent
              key={`${tag.key}-${tag.value}`}
              tag={tag}
              onClick={() => onTagClick?.(tag)}
              {...getTagColor(tag)}
              count={null}
            />
          ))}
          {predictedTags.length === 0 && (
            <Empty padding="p-0">No tags.</Empty>
          )}
        </div>
      </div>
    </div>
  );
}
