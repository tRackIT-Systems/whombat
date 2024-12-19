import { useState } from "react";
import { HelpIcon } from "@/components/icons";
import { DialogOverlay } from "@/components/Dialog";
import KeyboardKey from "@/components/KeyboardKey";
import Button from "@/components/Button";
import { useKeyPressEvent } from "react-use";

import useKeyFilter from "@/hooks/utils/useKeyFilter";
import { HELP_SHORTCUT } from "@/utils/keyboard";

type Shortcut = {
  label: string;
  shortcut: string;
  description: string;
};

export default function ShortcutHelper({
  shortcuts,
}: {
  shortcuts?: Shortcut[];
} = {}) {
  const [show, setShow] = useState(false);
  useKeyPressEvent(useKeyFilter({ key: HELP_SHORTCUT }), () => setShow((v) => !v));

  return (
    <>
      <Button mode="text" variant="info" type="button" onClick={() => setShow(true)}>
        <HelpIcon className="inline-block w-4 h-4 align-middle" />
      </Button>
      <DialogOverlay
        title="Keyboard Shortcuts"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        {() => (
          <table className="border-collapse border border-stone-500 table-auto">
            <thead>
              <tr>
                <th className="p-1 border border-stone-500 text-center">Key</th>
                <th className="p-1 border border-stone-500 text-center">
                  Action
                </th>
                <th className="p-1 border border-stone-500 text-center">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-stone-500 text-center">
                  <KeyboardKey code={HELP_SHORTCUT} />
                </td>
                <td className="p-2 border border-stone-500 text-center font-bold">
                  Help
                </td>
                <td className="p-2 border border-stone-500 text-left">
                  Show this help.
                </td>
              </tr>
              {shortcuts?.map((shortcut) => (
                <tr key={shortcut.shortcut}>
                  <td className="p-2 border border-stone-500 text-center">
                    <KeyboardKey code={shortcut.shortcut.trim() || " "} />
                  </td>
                  <td className="p-2 border border-stone-500 text-center font-bold">
                    {shortcut.label}
                  </td>
                  <td className="p-2 border border-stone-500 text-left">
                    {shortcut.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </DialogOverlay>
    </>
  );
}
