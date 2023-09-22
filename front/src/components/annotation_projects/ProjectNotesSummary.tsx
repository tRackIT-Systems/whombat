import Card from "@/components/Card";
import Empty from "@/components/Empty";
import { H4 } from "@/components/Headings";
import { CheckIcon, IssuesIcon } from "@/components/icons";
import { AnnotationProject } from "@/api/annotation_projects";
import WithLoading from "@/components/WithLoading";
import useTaskNotes from "@/hooks/api/useTaskNotes";
import useAnnotationNotes from "@/hooks/api/useAnnotationNotes";

function NoNotes() {
  return (
    <Empty>
      <CheckIcon className="h-8 w-8 text-emerald-500" />
      Currently, there are no issues in this project.
    </Empty>
  );
}

export default function ProjectNotesSummary({
  project,
}: {
  project: AnnotationProject;
}) {
  const annotationNotes = useAnnotationNotes({
    filter: {
      project__eq: project.id,
    },
  });

  const taskNotes = useTaskNotes({
    filter: {
      project__eq: project.id,
    },
  });

  const isLoading =
    annotationNotes.query.isLoading || taskNotes.query.isLoading;

  return (
    <Card>
      <div className="flex flex-row items-center justify-between">
        <H4>
          <IssuesIcon className="h-5 w-5 inline-block mr-2" />
          Project Issues
        </H4>
      </div>
      <WithLoading show={false} isLoading={isLoading}>
        {annotationNotes.items.length === 0 && taskNotes.items.length === 0 ? (
          <NoNotes />
        ) : (
          <div>Notes</div>
        )}
      </WithLoading>
    </Card>
  );
}