import FilterBadge from "@/components/filters/FilterBadge";
import {  BooleanFilter, } from "@/components/filters/Filters";
import {  CompleteIcon, EditIcon, NeedsReviewIcon, VerifiedIcon, } from "@/components/icons";

import type { AnnotationTaskFilter } from "@/api/annotation_tasks";
import type { FilterDef } from "@/components/filters/FilterMenu";

// TODO: Create custom filter for integer, date, time, tags and boolean values
const annotationTaskFilterDefs: FilterDef<AnnotationTaskFilter>[] = [
  {
    name: "Verified",
    field: "verified",
    selector: ({ setFilter }) => (
      <BooleanFilter
        onChange={(val) => setFilter("verified", val)}
      />
    ),
    render: ({ value, clear }) => (
      <FilterBadge
          field="Verified"
          value={value ? "Yes" : "No"}
          onRemove={clear} />
    ),
    description: "Select only verified annotation tasks.",
    icon: (
      <VerifiedIcon className="h-5 w-5 inline-block text-stone-500 mr-1 align-middle" />
    ),
  },
  {
    name: "Rejected",
    field: "rejected",
    selector: ({ setFilter }) => (
      <BooleanFilter
        onChange={(val) => setFilter("rejected", val)}
      />
    ),
    render: ({ value, clear }) => (
      <FilterBadge
          field="Rejected"
          value={value ? "Yes" : "No"}
          onRemove={clear} />
    ),
    description: "Select only rejected annotation tasks.",
    icon: (
      <NeedsReviewIcon className="h-5 w-5 inline-block text-stone-500 mr-1 align-middle" />
    ),
  },
  {
    name: "Accepted",
    field: "completed",
    selector: ({ setFilter }) => (
      <BooleanFilter
        onChange={(val) => setFilter("completed", val)}
      />
    ),
    render: ({ value, clear }) => (
      <FilterBadge
          field="Accepted"
          value={value ? "Yes" : "No"}
          onRemove={clear} />
    ),
    description: "Select only accepted annotation tasks.",
    icon: (
      <NeedsReviewIcon className="h-5 w-5 inline-block text-stone-500 mr-1 align-middle" />
    ),
  },
  {
    name: "Unsure",
    field: "unsure",
    selector: ({ setFilter }) => (
      <BooleanFilter
        onChange={(val) => setFilter("unsure", val)}
      />
    ),
    render: ({ value, clear }) => (
      <FilterBadge
          field="Unsure"
          value={value ? "Yes" : "No"}
          onRemove={clear} />
    ),
    description: "Select only unsure annotation tasks.",
    icon: (
      <NeedsReviewIcon className="h-5 w-5 inline-block text-stone-500 mr-1 align-middle" />
    ),
  },
  {
    name: "Pending",
    field: "pending",
    selector: ({ setFilter }) => (
      <BooleanFilter
        onChange={(val) => setFilter("pending", val)}
      />
    ),
    render: ({ value, clear }) => (
      <FilterBadge
          field="Pending"
          value={value ? "Yes" : "No"}
          onRemove={clear} />
    ),
    description: "Select only pending annotation tasks.",
    icon: (
      <EditIcon className="h-5 w-5 inline-block text-stone-500 mr-1 align-middle" />
    ),
  },
];

export default annotationTaskFilterDefs;
