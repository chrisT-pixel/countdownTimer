import React from "react";
import { Task } from "../models/Task";
import SingleTask from "./SingleTask";

interface Props{
    tasks:Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}


const TaskList: React.FC<Props> = ({ tasks, setTasks }:Props) => {

    return <div className="tasks">

                {tasks.map((task) => (
                    
                    <SingleTask
                        task={task}
                        key={task.id}
                        tasks={tasks}
                        setTasks={setTasks}
                    />

                ))}

             </div>

};

export default TaskList;