import { FC, Fragment, Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";
import { EXPORT_DOWNLOAD, EXPORT_SEND } from "../../export-constants";

type Props = {
  numOfTasks: number;
  setExportMethod: Dispatch<SetStateAction<string>>;
  exportMethod: string;
  exportEmail: string;
  setExportEmail: Dispatch<SetStateAction<string>>;
};

export const ExportTab: FC<Props> = ({ numOfTasks, setExportMethod, exportMethod, exportEmail, setExportEmail }) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onExportMethodChange = (e:any) => setExportMethod(e.target.value);

  const selectExportMethodForm: JSX.Element = (
    <Form.Select value={exportMethod} onChange={onExportMethodChange}>
      <option value={EXPORT_DOWNLOAD}>Download</option>
      <option value={EXPORT_SEND}>Send via E-mail</option>
    </Form.Select>
  );

  const emailForm: JSX.Element | null = exportMethod === EXPORT_SEND ? (
    <Form.Group className="mt-2">
          <Form.Label>Email to send CSV file</Form.Label>
          <Form.Control type="email" placeholder="E-mail" value={exportEmail} onChange={e => setExportEmail(e.target.value)} />
        </Form.Group>
  ) : null;

  return (
    <Fragment>
      <p className="fs-5">
        {numOfTasks === 0
          ? "No tasks available."
          : `You can export ${numOfTasks} task${numOfTasks > 1 ? "s" : ""}.`}
      </p>
      {numOfTasks > 0 ? selectExportMethodForm : null}
      {numOfTasks > 0 ? emailForm : null}
    </Fragment>
  );
};
