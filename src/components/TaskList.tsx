import React from "react";
import { Task } from "../model";
import SingleTask from "./SingleTask";

interface Props{
    tasks:Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    remainingTime: number;
    //setTime: React.Dispatch<React.SetStateAction<number>>;
   
}


const TaskList: React.FC<Props> = ({ tasks, setTasks, remainingTime }:Props) => {

    return <div className="tasks">

                {tasks.map((task) => (
                    
                    <SingleTask
                        task={task}
                        key={task.id}
                        tasks={tasks}
                        //setTime={setTime}
                        setTasks={setTasks}
                        remainingTime={remainingTime} 
                        isActive={false}            
                    />

                ))}

             </div>

};

export default TaskList;