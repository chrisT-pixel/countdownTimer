import { FC, Dispatch, SetStateAction } from "react";
import { Task } from "../../../models/Task";
import { EXPORT_TAB, IMPORT_TAB } from "../tabs";
import { ImportTab } from "./import-tab/import-tab";

type Props = {
  activeTab: string;
  clearImportedTasks: () => void;
  noTasks: boolean;
  setImportedTasks: Dispatch<SetStateAction<Task[]>>
};

export const DialogBody: FC<Props> = ({ activeTab, clearImportedTasks, noTasks, setImportedTasks }) => {
  const tab: JSX.Element = (() => {
    if (activeTab === IMPORT_TAB) {
      return (
        <ImportTab
          clearImportedTasks={clearImportedTasks}
          noTasks={noTasks}
          setImportedTasks={setImportedTasks}
        />
      );
    }
    if (activeTab === EXPORT_TAB) {
      return (
        <div>EXPORT - TODO</div>
      );
    }
    return (
      <div>
        Not supported.
      </div>
    );
  })();

  return (
    <div>
      {tab}
    </div>
  );
};
