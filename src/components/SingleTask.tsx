import React from 'react';
import ReactDOM from "react-dom";
import { Task } from "../model";
import { FaEdit, FaTrashAlt, FaCheck, FaPlay, FaPause } from 'react-icons/fa';
import TaskList from './TaskList';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { BroadcastChannel } from 'worker_threads';

//const STATUS = {
//    STARTED: 'Started',
//    STOPPED: 'Stopped',
//}

type Props = {
    task: Task;
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>; 
    remainingTime: number;
    isActive: boolean; 
    
}

const SingleTask = ({ task, tasks, setTasks}: Props) => {

    //const [status, setStatus] = React.useState(STATUS.STOPPED)

    const handlePause = (id: number) => {
       
        // implement pause feature here

        //setStatus(STATUS.STOPPED)
        setTasks(tasks.map((task)=>
            task.id === id? {...task, isActive: !task.isActive}:task
            )
        );
    };

    const handleDone = (id: number) => {
        setTasks(tasks.map((task)=>
            task.id === id? {...task, isDone: !task.isDone}:task
            )
        );
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter((task)=>task.id != id));
        
    };

    const handleActive = (id: number) => {

       setTasks(
            tasks => tasks.map(
                task => {
                    return {
                    ...task,
                    isActive: task.id === id
                    };
                }
            )

        );

        
    };


     const renderTime = ({ remainingTime }: Props) => {
        if (remainingTime === 0) {
          return <div className="timer">Time up...</div>;
        }
         
      
        return (
      
                <div className="timer">
                  <div className="text">Remaining</div>
                  <div className="value">{Math.floor(remainingTime / 60)} min</div>
                  <div className="value">{remainingTime - Math.floor(remainingTime / 60) * 60} sec</div>
                </div>
      
      
        );
      };

    const timerDuration = task.time * 60;
    const timerDurationTwoThird = task.time * 40;
    const timerDurationOneThird = task.time * 20;

    
    return(
       
        <form className="todos__single">
       
            
            {task.isDone ? (
                <div>
                    <s className="todos__single--text"><b>Task Name:</b> {task.task} <br /><b>Total time in minutes allocated:</b> {task.time}:00</s>
                   
                </div>
            ) : (

                <div>
                    <span className="todos__single--text"><b>Task Name:</b> {task.task} <br /><b>Total time in minutes allocated:</b> {task.time}:00</span>
                   
                    <br />
                </div>
            )}

        <div className={task.isActive ? 'task-active' : 'task-inactive'}>
      
                    
            <div className="timer-wrapper">
          
                <CountdownCircleTimer
                    duration={timerDuration}
                    isPlaying={task.isActive}
                    colors={["#042940", "#005C53", "#9FC131", "#DBF227"]}
                    colorsTime={[timerDuration, timerDurationTwoThird, timerDurationOneThird, 0]}
                    onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                    >
                        {renderTime}

                </CountdownCircleTimer>
          
            </div>
        
        </div>
      



            {task.isActive ? (
                <div>

                   <span className="todos__single--text_alert">Task timer is running. Launching a new task will auto-pause this task</span>
                   
                </div>
            ) : (

                <div>
                    <span className="todos__single--text_alert">Press play to begin countdown.</span>
                </div>
            )}  
           
            <div>
               
                <span className="icon" onClick={()=>handleDelete(task.id)}>
                    <FaTrashAlt />
                </span>
                <span className="icon" onClick={()=>handleDone(task.id)}>
                    <FaCheck />
                </span>

                {task.isActive ? (

                    <span className="icon" onClick={()=>handlePause(task.id)}>
                        <FaPause />
                    </span>
                 
                 ) : (

                    <span className="icon" onClick={()=>handleActive(task.id)}>
                        <FaPlay />
                    </span>

                 )}
            
            </div>
        </form>
    )
};

export default SingleTask;