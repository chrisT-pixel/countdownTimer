import "./controll-buttons.scss";
import { FC, Fragment } from "react";
import { Button } from "react-bootstrap";
import { IMPORT_TAB } from "../tabs";
import { EXPORT_SEND } from "../export-constants";

type Props = {
  activeTab: string;
  noTasks: boolean;
  closeDialog: () => void;
  noImportedTasks: boolean;
  updateTasks: () => void;
  exportTasks: () => void;
  exportMethod: string;
  exportEmailEmpty: boolean;
};

/**
 * Dialog's controll buttons.
 */
export const ControllButtons: FC<Props> = ({
  activeTab,
  noTasks,
  closeDialog,
  noImportedTasks,
  updateTasks,
  exportTasks,
  exportMethod,
  exportEmailEmpty
}) => {
  const submitButton: JSX.Element = ((): JSX.Element => {
    let button: JSX.Element;

    const exportButtonDisabled = noTasks || (exportMethod === EXPORT_SEND && exportEmailEmpty);

    if (activeTab === IMPORT_TAB) {
      button = (
        <Button
          className="ControllButtons_submit-button"
          disabled={noImportedTasks}
          onClick={updateTasks}
        >
          {IMPORT_TAB}
        </Button>
      );
    } else {
      button = (
        <Button
          className="ControllButtons_submit-button"
          disabled={exportButtonDisabled}
          onClick={exportTasks}
        >
          {exportMethod}
        </Button>
      );
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
