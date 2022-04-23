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
import { EMAIL_FILE_CONTENT_TYPE, EMAIL_FILE_ENCODING, EMAIL_SUBJECT, EMAIL_TEXT, EXPORT_DOWNLOAD, EXPORT_FILE_NAME, EXPORT_SEND } from "./export-constants";
import axios from "axios";
import { properties } from "../../properties/properties";

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
  const [exportMethod, setExportMethod] = useState<string>(EXPORT_DOWNLOAD);
  const [exportEmail, setExportEmail] = useState<string>("");

  const clearImportedTasks = (): void => setImportedTasks([]);
  const setDefaultExportMethod = (): void => setExportMethod(EXPORT_DOWNLOAD);
  const cleanState = (): void => {
    clearImportedTasks();
    setDefaultExportMethod();
    setExportEmail("");
  };

  const closeDialog = (): void => {
    cleanState();
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

  const exportEmailEmpty: boolean = exportEmail.length === 0;

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

    if (exportMethod === EXPORT_DOWNLOAD) {
      downloadCSV([Papa.unparse(exportTasks)], EXPORT_FILE_NAME);
    } else if (exportMethod === EXPORT_SEND) {
      if (exportEmail.length === 0) {
        return;
      }

      const senEmailEndPoint:string = properties.server.url + properties.server.endpoint.sendemail;

      axios.post(senEmailEndPoint, {
        subject: EMAIL_SUBJECT,
        text: EMAIL_TEXT,
        recipient: exportEmail.trim(),
        attachment: {
          filename: EXPORT_FILE_NAME,
          content: Papa.unparse(exportTasks),
          contentType: EMAIL_FILE_CONTENT_TYPE,
          encoding: EMAIL_FILE_ENCODING
        }
      }).catch(err => console.error(err));
      
    } else {
      console.error("Unsupported eport option");
    }
    
    closeDialog();
  };

  return (
    <Modal centered show={showDialog} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>
          <DialogHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            cleanState={cleanState}
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
          setExportMethod={setExportMethod}
          exportMethod={exportMethod}
          exportEmail={exportEmail}
          setExportEmail={setExportEmail}
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
          exportMethod={exportMethod}
          exportEmailEmpty={exportEmailEmpty}
        />
      </Modal.Footer>
    </Modal>
  );
};