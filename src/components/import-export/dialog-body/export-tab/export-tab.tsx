import { FC } from "react";

type Props = {
  numOfTasks: number;
};

export const ExportTab: FC<Props> = ({ numOfTasks }) => {

  return (
    <p className="fs-5">
      {numOfTasks === 0
        ? "No tasks available."
        : `You can export ${numOfTasks} task${numOfTasks > 1 ? "s" : ""}.`}
    </p>
  );
};
