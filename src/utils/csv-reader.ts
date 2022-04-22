import Papa, {LocalFile, ParseResult} from "papaparse";

export const readCSV = (file: LocalFile, consumer: (csv: ParseResult<unknown>) => void) => {
  Papa.parse(file, {
    header: true,
    complete: consumer
  });
};
