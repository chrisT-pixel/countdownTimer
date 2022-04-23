import "./dialog-body.scss";
import { FC, Dispatch, SetStateAction } from "react";
import { Task } from "../../../models/Task";
import { EXPORT_TAB, IMPORT_TAB } from "../tabs";
import { ExportTab } from "./export-tab/export-tab";
import { ImportTab } from "./import-tab/import-tab";

type Props = {
  activeTab: string;
  clearImportedTasks: () => void;
  noTasks: boolean;
  setImportedTasks: Dispatch<SetStateAction<Task[]>>;
  numOfTasks: number;
  setExportMethod: Dispatch<SetStateAction<string>>;
  exportMethod: string;
  exportEmail: string;
  setExportEmail: Dispatch<SetStateAction<string>>;
};

export const DialogBody: FC<Props> = ({
  activeTab,
  clearImportedTasks,
  noTasks,
  setImportedTasks,
  numOfTasks,
  setExportMethod,
  exportMethod,
  exportEmail,
  setExportEmail
}) => {
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
        <ExportTab
          numOfTasks={numOfTasks}
          setExportMethod={setExportMethod}
          exportMethod={exportMethod}
          exportEmail={exportEmail}
          setExportEmail={setExportEmail}
        />
      );
    }
    return <div>Not supported.</div>;
  })();

  return <div className="DialogBody_view">{tab}</div>;
};
