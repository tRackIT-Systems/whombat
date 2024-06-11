import type { AnnotationTaskFilter } from "@/api/annotation_tasks";
import type { AnnotationTask } from "@/types";
import useAnnotationTasks from "@/hooks/api/useAnnotationTasks";
import useAnnotationTaskTable from "@/hooks/useAnnotationTaskTable";
import Loading from "@/app/loading";
import Search from "@/components/inputs/Search";
import FilterPopover from "@/components/filters/FilterMenu";
import annotationTaskFilterDefs from "@/components/filters/annotation_tasks";
import FilterBar from "@/components/filters/FilterBar";
import Table from "@/components/tables/Table";
import Pagination from "@/components/lists/Pagination";

export default function AnnotationTaskTable({
  filter,
  fixed,
  getAnnotationTaskLink,
  pathFormatter,
}: {
  filter: AnnotationTaskFilter;
  fixed?: (keyof AnnotationTaskFilter)[];
  getAnnotationTaskLink?: (annotationTask: AnnotationTask) => string;
  pathFormatter?: (path: string) => string;
}) {
  const annotationTasks = useAnnotationTasks({ filter, fixed });

  const table = useAnnotationTaskTable({
    data: annotationTasks.items,
    getAnnotationTaskLink: getAnnotationTaskLink,
    pathFormatter
  });

  if (annotationTasks.isLoading || annotationTasks.data == null) {
    return <Loading />;
  }

    return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row justify-between space-x-4">
        <div className="flex flex-row space-x-3 basis-1/2">
          <div className="grow">
            <Search
              label="Search"
              placeholder="Search recordings..."
              value={annotationTasks.filter.get("search_recordings") ?? ""}
              onChange={(value) =>
                annotationTasks.filter.set("search_recordings", value as string)
              }
            />
          </div>
          <FilterPopover
            filter={annotationTasks.filter}
            filterDef={annotationTaskFilterDefs}
          />
        </div>
      </div>
      <FilterBar
        filter={annotationTasks.filter}
        total={annotationTasks.total}
        filterDef={annotationTaskFilterDefs}
      />
      <div className="w-full">
        <div className="overflow-x-auto overflow-y-auto w-full max-h-screen rounded-md outline outline-1 outline-stone-200 dark:outline-stone-800">
          <Table table={table}/>
        </div>
      </div>
      <Pagination {...annotationTasks.pagination} />
    </div>
  );
}
