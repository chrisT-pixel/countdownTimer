import React from 'react';
import { Task } from "../model";
import { FaEdit, FaTrashAlt, FaCheck } from 'react-icons/fa';
import TaskList from './TaskList';
//import { Timer } from "./timer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

type Props = {
    task: Task;
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>; 
    //duration: number;
    remainingTime: number;
    
}

const SingleTask = ({ task, tasks, setTasks  }: Props) => {

    const handleDone = (id: number) => {
        setTasks(tasks.map((task)=>
            task.id === id? {...task, isDone: !task.isDone}:task
            )
        );
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter((task)=>task.id != id));
        
    };

    const renderTime = ({ remainingTime }: Props) => {
        if (remainingTime === 0) {
          return <div className="timer">Time up...</div>;
        }
      
        return (
      
                <div className="timer">
                  <div className="text">Remaining</div>
                  <div className="value">{remainingTime}</div>
                  <div className="text">seconds</div>
                </div>
      
      
        );
      };

    
    
    return(
        <form className="todos__single">
            
            {task.isDone ? (
                <div>
                    <s className="todos__single--text"><b>Task Name:</b> {task.task} <b>Time in Seconds:</b> {task.time}</s>
                </div>
            ) : (

                <div>
                    <span className="todos__single--text"><b>Task Name:</b> {task.task} <b>Time in Seconds:</b> {task.time}</span>

                    <div className="timer-wrapper">
                        <CountdownCircleTimer
                        duration={task.time}
                        isPlaying={true}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[10, 6, 3, 0]}
                        onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                        >
                            {renderTime}
                        </CountdownCircleTimer>
                        
                        
                    </div>
                   
                </div>
            )}
           
            <div>
               
                <span className="icon" onClick={()=>handleDelete(task.id)}>
                    <FaTrashAlt />
                </span>
                <span className="icon" onClick={()=>handleDone(task.id)}>
                    <FaCheck />
                </span>
            </div>
        </form>
    )
};

export default SingleTask;