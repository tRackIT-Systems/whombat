import { type DatasetFilter } from "@/api/datasets";
import api from "@/app/api";
import usePagedQuery from "@/hooks/usePagedQuery";
import useFilter from "@/hooks/useFilter";

export default function useDatasets({
  filter: initialFilter = {},
  pageSize = 10,
}: {
  filter?: DatasetFilter;
  pageSize?: number;
} = {}) {
  const filter = useFilter<DatasetFilter>({ initialState: initialFilter });

  const { query, pagination, items, total } = usePagedQuery({
    name: "datasets",
    func: api.datasets.getMany,
    pageSize: pageSize,
    filter: filter.filter,
  });

  return {
    query,
    filter,
    pagination,
    items,
    total,
  };
}