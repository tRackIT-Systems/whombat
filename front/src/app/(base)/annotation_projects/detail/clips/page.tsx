"use client";
import { notFound } from "next/navigation";
import { useContext } from "react";

import AnnotationProjectTaskClips from "@/components/annotation_projects/AnnotationProjectTaskClips";
import AnnotationProject from "../context";

import type { AnnotationTask } from "@/types";

import "./page.css";

function getAnnotationTaskLink(annotationTask: AnnotationTask): string {
  return `detail/annotation/?annotation_task_uuid=${annotationTask.uuid}`;
}

export default function Page() {
  const annotationProject = useContext(AnnotationProject);

  if (annotationProject == null) {
    return notFound();
  }

  return (
    <div className="w-full">
      <AnnotationProjectTaskClips
        annotationProject={annotationProject}
        getAnnotationTaskLink={getAnnotationTaskLink}
      />
    </div>
  );
}
