import React from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "../../utils";
import type { DevtreeLink } from "../../types";
type SwitchProps = {
  enabled: boolean;
  fn: (socialNetwork: string) => void;
  item: DevtreeLink;
};
const SwitchUI = ({ enabled, fn, item }: SwitchProps) => {
  return (
    <Switch
      checked={enabled}
      onChange={() => fn(item.name)}
      className={classNames(
        enabled ? "bg-blue-500" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      )}>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
        )}
      />
    </Switch>
  );
};

export default SwitchUI;
