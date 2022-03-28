import React from "react";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props{
    tasks:Task[];
    //time: number;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    remainingTime: number;
   
}


const TaskList: React.FC<Props> = ({ tasks, setTasks, remainingTime }:Props) => {

    return <div className="tasks">
        {tasks.map((task) => (
            
            <SingleTask
                task={task} 
                key={task.id}
                //time={tasks.time}
                tasks={tasks}
                setTasks={setTasks}
                remainingTime={remainingTime}
            />

        ))}

    </div>

};

export default TaskList;