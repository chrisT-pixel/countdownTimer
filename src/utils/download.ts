import FileSaver from "file-saver";

export const downloadCSV = (content: string[], fileName: string): void => {
  const blob = new Blob(content, { type: "text/csv;charset=utf-8" });
  FileSaver.saveAs(blob, fileName);
};
