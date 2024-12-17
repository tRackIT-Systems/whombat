import { useMemo } from "react";

import { TagIcon } from "@/components/icons";
import AddTagButton from "@/components/tags/AddTagButton";
import TagComponent, { getTagKey } from "@/components/tags/Tag";
import useRecording from "@/hooks/api/useRecording";

import type { Recording, Tag } from "@/types";

export default function RecordingTagBar({
  recording: data,
  label = "Tags",
  onAddTag,
  onTagClick,
  onRemoveTag,
  disabled = false,
}: {
  recording: Recording;
  label?: string;
  onTagClick?: (tag: Tag) => void;
  onAddTag?: (data: Recording) => void;
  onRemoveTag?: (data: Recording) => void;
  disabled?: boolean;
}) {
  const {
    data: { tags } = {},
    addTag: { mutate: addTag },
    removeTag: { mutate: removeTag },
  } = useRecording({
    uuid: data.uuid,
    recording: data,
    onAddTag,
    onRemoveTag,
  });

  const { handleAddTag, handleRemoveTag } = useMemo(() => {
    if (disabled) {
      return {};
    }
    return {
      handleAddTag: addTag,
      handleRemoveTag: removeTag,
    };
  }, [addTag, disabled, removeTag]);

  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="inline-flex">
        <TagIcon className="inline-block mr-1 w-5 h-5 text-stone-400 dark:text-stone-600" />
        <span className="text-sm text-stone-500 font-medium">{label}</span>
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {tags?.map((tag: Tag) => (
          <TagComponent
            key={getTagKey(tag)}
            tag={tag}
            onClick={() => onTagClick?.(tag)}
            onClose={() => handleRemoveTag?.(tag)}
            count={null}
          />
        ))}
        {tags?.length === 0 && (
          <span className="text-stone-400 dark:text-stone-600 text-sm">
            No tags
          </span>
        )}
        {!disabled && <AddTagButton variant="primary" onAdd={handleAddTag} />}
      </div>
    </div>
  );
}
