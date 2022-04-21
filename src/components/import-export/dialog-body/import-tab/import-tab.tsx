import {FC, Fragment, Dispatch, SetStateAction} from "react";
import { Form } from "react-bootstrap";
import { BaseTaskImport, canBeBaseTask } from "../../../../models/BaseTask";
import { readCSV } from "../../../../utils/csv-reader";
import {ImWarning} from "react-icons/im";
import { Task } from "../../../../models/Task";
import { generateID } from "../../../../utils/id-generator";

const CSV_FILE_EXTENSION = ".csv";

type Props = {
  clearImportedTasks: () => void;
  noTasks: boolean;
  setImportedTasks: Dispatch<SetStateAction<Task[]>>
};

export const ImportTab: FC<Props> = ({ clearImportedTasks, noTasks, setImportedTasks }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const readCSVFile = (e: any): void => {
    if (e.target.files.length === 0) {
      clearImportedTasks();
      return;
    }
    
    const selectedFileName: string = e.target.files[0].name;
    if (!selectedFileName.endsWith(CSV_FILE_EXTENSION)) {
      console.error("Unsupported file format");
      clearImportedTasks();
      return;
    }

    readCSV(e.target.files[0], (csv) => {
      if (csv.data.length === 0) {
        console.error("Empty file.");
      }

      const tasks: Task[] = csv.data.filter(row => canBeBaseTask(row)).map(row => {
        return {
          task: (row as BaseTaskImport).task,
          time: parseInt((row as BaseTaskImport).time),
          id: generateID(),
          isDone: false,
          isActive: false,
          isCurrent: false
        };
      })

      setImportedTasks(tasks);
    });
  }

  return (
    <Fragment>
    <Form.Group controlId="importFile">
        <Form.Label>Import from CSV</Form.Label>
        <Form.Control
          type="file"
          accept={CSV_FILE_EXTENSION}
          onChange={(e) => readCSVFile(e)}
        />
        {noTasks ? null :  (
          <div className="mt-1 fw-light"><ImWarning className="text-warning"/> <span className="text-secondary">This operation will replace all current tasks</span></div>
        )}
      </Form.Group>
      </Fragment>
  );
};