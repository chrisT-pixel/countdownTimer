import "./controll-buttons.scss";
import { FC, Fragment } from "react";
import { Button } from "react-bootstrap";
import { EXPORT_TAB, IMPORT_TAB } from "../tabs";

type Props = {
  activeTab: string;
  noTasks: boolean;
  closeDialog: () => void;
  noImportedTasks: boolean;
  updateTasks: () => void;
  exportTasks: () => void;
};

/**
 * Dialog's controll buttons.
 */
export const ControllButtons: FC<Props> = ({ activeTab, noTasks, closeDialog, noImportedTasks, updateTasks, exportTasks }) => {
  const submitButton: JSX.Element = ((): JSX.Element => {
    let button: JSX.Element;

    if (activeTab === IMPORT_TAB) {
      button = <Button className="ControllButtons_submit-button" disabled={noImportedTasks} onClick={updateTasks}>{IMPORT_TAB}</Button>;
    } else {
      button = <Button className="ControllButtons_submit-button" disabled={noTasks} onClick={exportTasks}>{EXPORT_TAB}</Button>;
    }

    return button;
  })();

  return (
    <Fragment>
      {submitButton}
      <Button onClick={closeDialog} variant="secondary">
        Close
      </Button>
    </Fragment>
  );
};
