 import {FC, Dispatch, SetStateAction, useState} from "react"
import { Modal } from "react-bootstrap";
import { Task } from "../../models/Task";
import { IMPORT_TAB } from "./tabs";
import { DialogHeader } from "./dialog-header/dialog-header";
import { ControllButtons } from "./controll-buttons/controll-buttons";
import { DialogBody } from "./dialog-body/dialog-body";
import { BaseTask } from "../../models/BaseTask";
import { downloadCSV } from "../../utils/download";
import Papa from "papaparse";

const EXPORT_FILE_NAME = "my_tasks";

type Props = {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

/**
 * Represents a modal dialog which is used for import and export.
 */
export const ImportExport: FC<Props> = ({ showDialog, setShowDialog, tasks, setTasks }) => {

  const [activeTab, setActiveTab] = useState<string>(IMPORT_TAB);
  const [importedTasks, setImportedTasks] = useState<Task[]>([]);

  const clearImportedTasks = (): void => setImportedTasks([]);

  const closeDialog = (): void => {
    clearImportedTasks();
    setShowDialog(false);
  };

  const updateTasks = (): void => {
    if (importedTasks.length === 0) {
      return;
    }

    setTasks(importedTasks);
    closeDialog();
  }

  const noTasks: boolean = tasks.length === 0;

  const noImportedTasks: boolean = importedTasks.length === 0;

  const numOfTasks: number = tasks.length;

  const exportTasks = (): void => {
    if (noTasks) {
      return;
    }

    const exportTasks: BaseTask[] = tasks.map(task => {
      return {
        task: task.task,
        time: task.time
      }
    });

    downloadCSV([Papa.unparse(exportTasks)], EXPORT_FILE_NAME);
    closeDialog();
  };

  return (
    <Modal centered show={showDialog} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>
          <DialogHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            clearImportedTasks={clearImportedTasks}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DialogBody
          activeTab={activeTab}
          clearImportedTasks={clearImportedTasks}
          noTasks={noTasks}
          setImportedTasks={setImportedTasks}
          numOfTasks={numOfTasks}
        />
      </Modal.Body>
      <Modal.Footer>
        <ControllButtons
          activeTab={activeTab}
          noTasks={noTasks}
          closeDialog={closeDialog}
          noImportedTasks={noImportedTasks}
          updateTasks={updateTasks}
          exportTasks={exportTasks}
        />
      </Modal.Footer>
    </Modal>
  );
};