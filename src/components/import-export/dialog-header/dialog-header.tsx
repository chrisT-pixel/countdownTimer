import "./dialog-header.scss";
import { FC, Dispatch, SetStateAction, Fragment } from "react";
import { EXPORT_TAB, IMPORT_TAB } from "../tabs";

type Props = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  clearImportedTasks: () => void;
};

/**
 * Dialogs header that provides navigation between import and export.
 */
export const DialogHeader: FC<Props> = ({ activeTab, setActiveTab, clearImportedTasks }) => {
  const getClassName = (tab: string): string => `DialogHeader_tab-nav ${activeTab === tab ? "active" : "text-muted"}`;
  const switchTab = (newTab: string): void =>
   setActiveTab((currentTab: string): string => { 
      if (newTab !== currentTab) {
        clearImportedTasks();
      }
      return newTab;
    });

  return (
    <Fragment>
      <span
        className={getClassName(IMPORT_TAB)}
        onClick={() => switchTab(IMPORT_TAB)}
      >
        {IMPORT_TAB}
      </span>
      <span className="text-muted">/</span>
      <span
        className={getClassName(EXPORT_TAB)}
        onClick={() => switchTab(EXPORT_TAB)}
      >
        {EXPORT_TAB}
      </span>
    </Fragment>
  );
};
