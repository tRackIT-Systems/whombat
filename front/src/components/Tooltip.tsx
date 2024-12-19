import { Popover } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import { Fragment } from "react";
import { useHover } from "react-use";

import type { ReactNode } from "react";

export default function Tooltip({
  children,
  tooltip,
  placement = "right",
  autoPlacement = false,
  offset = 8,
  interactive = false,
}: {
  children: ReactNode;
  tooltip: ReactNode;
  autoPlacement?: boolean;
  placement?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-start"
    | "top-end"
    | "right-start"
    | "right-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end";
  offset?: number;
  interactive?: boolean;
}) {
  const content = <span className="max-w-fit">{children}</span>;
  const [hoverable, hovered] = useHover(content);

  return (
    <Popover>
      <Float
        show={hovered}
        placement={placement}
        offset={offset}
        enter="transition duration-100 ease-out"
        enterFrom="scale-95 opacity-0"
        enterTo="scale-100 opacity-100"
        leave="transition duration-50 ease-in"
        leaveFrom="scale-100 opacity-100"
        leaveTo="scale-95 opacity-0"
        portal={true}
        autoPlacement={autoPlacement}
      >
        {interactive ? (
          <Popover.Button as={Fragment}>{hoverable}</Popover.Button>
        ) : (
          <div>{hoverable}</div>
        )}
        <Popover.Panel
          static
          className="rounded p-2 shadow-lg bg-stone-50 dark:bg-stone-700 text-stone-600 dark:text-stone-400 text-sm pointer-events-none"
        >
          {tooltip}
        </Popover.Panel>
      </Float>
    </Popover>
  );
}