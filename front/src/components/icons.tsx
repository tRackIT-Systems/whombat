import { type ComponentProps, type HTMLProps } from "react";
import Image from "next/image";
import {
  CheckBadgeIcon,
  UserIcon,
  Squares2X2Icon,
  PresentationChartLineIcon,
  ListBulletIcon,
  AdjustmentsVerticalIcon,
  ArchiveBoxIcon,
  ArrowDownOnSquareIcon,
  ArrowLeftOnRectangleIcon,
  ArrowPathRoundedSquareIcon,
  ArrowRightOnRectangleIcon,
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  ArrowUpOnSquareIcon,
  ArrowUturnLeftIcon,
  ArrowsPointingOutIcon,
  Bars2Icon,
  BellAlertIcon,
  BoltIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChartBarSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  Cog8ToothIcon,
  CursorArrowRaysIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  DocumentMagnifyingGlassIcon,
  DocumentPlusIcon,
  EllipsisHorizontalIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  FaceFrownIcon,
  FlagIcon,
  FolderPlusIcon,
  FunnelIcon,
  GlobeAmericasIcon,
  GlobeAsiaAustraliaIcon,
  GlobeEuropeAfricaIcon,
  HandRaisedIcon,
  HomeIcon,
  InboxIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassPlusIcon,
  MapPinIcon,
  PauseIcon,
  PencilIcon,
  PencilSquareIcon,
  PlayIcon,
  PlusIcon,
  RectangleStackIcon,
  ShieldCheckIcon,
  SignalIcon,
  SpeakerWaveIcon,
  Square2StackIcon,
  SquaresPlusIcon,
  SwatchIcon,
  TagIcon,
  TrashIcon,
  WrenchIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function WhombatIcon(props: Omit<ComponentProps<typeof Image>, "src" | "alt">) {
  return <Image alt="Whombat Logo" src="/whombat.svg" {...props} />;
}
function BoundingBoxIcon(props: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="-1.6 -1.6 19.20 19.20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
      stroke="currentColor"
      strokeWidth="0.16"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z"></path>{" "}
      </g>
    </svg>
  );
}
function PointIcon(props: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M50 37.45c-6.89 0-12.55 5.66-12.55 12.549c0 6.89 5.66 12.55 12.55 12.55c6.655 0 12.112-5.294 12.48-11.862a3.5 3.5 0 0 0 .07-.688a3.5 3.5 0 0 0-.07-.691C62.11 42.74 56.653 37.45 50 37.45zm0 7c3.107 0 5.55 2.442 5.55 5.549s-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.549 5.55-5.549z"
        fill="#000000"
      ></path>
    </svg>
  );
}
function PolygonIcon(props: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M32.5 10.95c-6.89 0-12.55 5.66-12.55 12.55c0 4.02 1.935 7.613 4.91 9.916L14.815 54.172a12.354 12.354 0 0 0-2.316-.223C5.61 53.95-.05 59.61-.05 66.5c0 6.89 5.66 12.55 12.55 12.55c5.13 0 9.54-3.151 11.463-7.603l51.277 7.71c1.232 5.629 6.281 9.894 12.26 9.894c6.656 0 12.114-5.297 12.48-11.867a3.5 3.5 0 0 0 .07-.684a3.5 3.5 0 0 0-.071-.7c-.375-6.562-5.829-11.85-12.479-11.85c-.134 0-.264.015-.396.019L80.242 43.05c3.275-2.127 5.509-5.746 5.738-9.867a3.5 3.5 0 0 0 .07-.684a3.5 3.5 0 0 0-.071-.7c-.375-6.562-5.829-11.85-12.479-11.85c-5.062 0-9.452 3.06-11.43 7.415l-17.082-4.517a3.5 3.5 0 0 0-.01-.047c-.374-6.563-5.828-11.852-12.478-11.852zm0 7c3.107 0 5.55 2.443 5.55 5.55c0 3.107-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.55 5.55-5.55zm41 9c3.107 0 5.55 2.443 5.55 5.55c0 3.107-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.55 5.55-5.55zm-30.137 2.708l17.739 4.69C62.007 40.37 67.239 45.05 73.5 45.05l.033-.002l6.92 21.092a12.688 12.688 0 0 0-4.705 6.015l-50.916-7.654a12.611 12.611 0 0 0-3.787-7.13l10.342-21.378c.368.033.737.057 1.113.057c4.652 0 8.71-2.592 10.863-6.393zM12.5 60.95c3.107 0 5.55 2.444 5.55 5.551s-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.55 5.55-5.55zm75 10c3.107 0 5.55 2.444 5.55 5.551s-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.55 5.55-5.55z"
        fill="#000000"
      ></path>
    </svg>
  );
}
function TimeIntervalIcon(props: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(90)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 18L12 6M12 18L9 16M12 18L15 16M12 6L9 8M12 6L15 8M21 3H3M21 21H3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
function TimeStampIcon(props: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Interface / Line_Xl">
          {" "}
          <path
            id="Vector"
            d="M12 21V3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export {
  ArchiveBoxIcon as DatasetIcon,
  ArrowDownOnSquareIcon as DownloadIcon,
  ArrowRightOnRectangleIcon as LogOutIcon,
  ArrowSmallLeftIcon as PreviousIcon,
  ArrowSmallRightIcon as NextIcon,
  ArrowUpOnSquareIcon as UploadIcon,
  ArrowUturnLeftIcon as BackIcon,
  ArrowsPointingOutIcon as TimeExpansionIcon,
  Bars2Icon as ChannelsIcon,
  BellAlertIcon as IssuesIcon,
  CalendarDaysIcon as DateIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon as NotesIcon,
  CheckCircleIcon as CompleteIcon,
  CheckIcon,
  ChevronLeftIcon as FirstIcon,
  ChevronRightIcon as LastIcon,
  ChevronUpDownIcon as ExpandIcon,
  ClipboardDocumentCheckIcon as EvaluationIcon,
  ClockIcon as TimeIcon,
  Cog8ToothIcon as SettingsIcon,
  DocumentDuplicateIcon as RecordingsIcon,
  DocumentMagnifyingGlassIcon as ExplorationIcon,
  EllipsisHorizontalIcon as SampleRateIcon,
  ExclamationTriangleIcon as WarningIcon,
  EyeIcon as NeedsReviewIcon,
  FlagIcon as IssueIcon,
  FolderPlusIcon as AddRecordingIcon,
  FunnelIcon as FilterIcon,
  GlobeAmericasIcon as LongitudeIcon,
  GlobeEuropeAfricaIcon as LatitudeIcon,
  HomeIcon,
  InboxIcon as MessagesIcon,
  MagnifyingGlassIcon as SearchIcon,
  MapPinIcon as LocationIcon,
  PencilIcon as EditIcon,
  PencilSquareIcon as AnnotationProjectIcon,
  PlusIcon as AddIcon,
  RectangleStackIcon as DatasetsIcon,
  RectangleStackIcon as MissingTaskIcon,
  ShieldCheckIcon as VerifiedIcon,
  SignalIcon as SoundEventIcon,
  Square2StackIcon as ClipsIcon,
  SwatchIcon as TagsIcon,
  TagIcon,
  TrashIcon as DeleteIcon,
  WhombatIcon,
  WrenchIcon as MissingIcon,
  XMarkIcon as CloseIcon,
  DocumentPlusIcon as NewRecordingIcon,
  DocumentIcon as RecordingIcon,
  GlobeAsiaAustraliaIcon as MapIcon,
  AdjustmentsVerticalIcon as SpectrogramSettingsIcon,
  SpeakerWaveIcon as AudioIcon,
  ChartBarSquareIcon as SpectrogramIcon,
  ChatBubbleBottomCenterTextIcon as NoteIcon,
  ArrowLeftOnRectangleIcon as GoToIcon,
  LinkIcon,
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon as VolumeIcon,
  BoltIcon as SpeedIcon,
  ArrowPathRoundedSquareIcon as LoopIcon,
  HandRaisedIcon as DragIcon,
  MagnifyingGlassPlusIcon as ZoomIcon,
  FaceFrownIcon as SadIcon,
  ClipboardDocumentListIcon as TasksIcon,
  SquaresPlusIcon as NewAnnotationIcon,
  CursorArrowRaysIcon as SelectIcon,
  BoundingBoxIcon,
  PointIcon,
  PolygonIcon,
  TimeIntervalIcon,
  TimeStampIcon,
  ListBulletIcon as ListIcon,
  PresentationChartLineIcon as PlotIcon,
  Squares2X2Icon as GalleryIcon,
  UserIcon,
};
