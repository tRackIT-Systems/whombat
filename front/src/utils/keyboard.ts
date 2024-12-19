import { useKeyPressEvent } from "react-use";

export type ShortcutConfig = {
    key: string;
    shiftKey?: boolean;
    ctrlKey?: boolean;
    altKey?: boolean;
    metaKey?: boolean;
    action: () => void;
    href?: string;
}

export function useSpecialKeyShortcuts(shortcuts: ShortcutConfig[]) {
    useKeyPressEvent(
        (event) => {
            // Find the matching shortcut
            const shortcut = shortcuts.find(({ key, shiftKey, ctrlKey, altKey, metaKey }) => {
                if (event.key !== key) return false;
                
                // Only check special keys if they are explicitly defined in the config
                if (shiftKey !== undefined && event.shiftKey !== shiftKey) return false;
                if (ctrlKey !== undefined && event.ctrlKey !== ctrlKey) return false;
                if (altKey !== undefined && event.altKey !== altKey) return false;
                if (metaKey !== undefined && event.metaKey !== metaKey) return false;

                return true;
            });

            if (shortcut) {
                event.preventDefault();
                event.stopPropagation();
                shortcut.action();
                return true;
            }

            return false;
        }
    );
}

export const getMetaKeyLabel = () => {
    const isMacOS = typeof window !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    return isMacOS ? '⌘' : 'Ctrl';
};

export const ACCEPT_TASK_SHORTCUT = "a";
export const CREATE_SOUND_EVENT_SHORTCUT = "c";
export const DELETE_SOUND_EVENT_SHORTCUT = "d";
export const ADD_TAG_SHORTCUT = "f";
export const HELP_SHORTCUT = "h";
export const PREVIOUS_SOUND_EVENT_SHORTCUT = "j";
export const NEXT_SOUND_EVENT_SHORTCUT = "k";
export const LOCK_ASPECT_RATIO_SHORTCUT = "l";
export const SOUND_EVENT_CYCLE_FILTER_SHORTCUT = "m";
export const NEXT_TASK_SHORTCUT = "n";
export const PREV_TASK_SHORTCUT = "p";
export const REJECT_TASK_SHORTCUT = "r";
export const SELECT_SOUND_EVENT_SHORTCUT = "s";
export const REPLACE_TAG_SHORTCUT = "t";
export const UNSURE_TASK_SHORTCUT = "u";
export const VERIFY_TASK_SHORTCUT = "v";
export const DELETE_TAG_SHORTCUT = "y";
export const ZOOM_SHORTCUT = "z";
export const ZOOM_IN_SHORTCUT = "+";
export const ZOOM_OUT_SHORTCUT = "-";
export const MOVE_LEFT_SHORTCUT = "ArrowLeft";
export const MOVE_RIGHT_SHORTCUT = "ArrowRight";
export const GO_DATASETS_SHORTCUT = "1";
export const GO_PROJECTS_SHORTCUT = "2";
export const GO_PROFILE_SHORTCUT = "9";
export const LOGOUT_SHORTCUT = "0";
export const ABORT_SHORTCUT = "Escape";
export const ACCEPT_SHORTCUT = "Enter";
export const PLAY_SHORTCUT = " ";