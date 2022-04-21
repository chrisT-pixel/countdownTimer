import React from 'react';
import { FaTrashAlt, FaCheck, FaPlay, FaPause, FaPlus, FaForward } from 'react-icons/fa';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Task } from '../models/Task';

type Props = {
    task: Task;
    tasks: Task[],
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;     
}

const SingleTask = ({ task, tasks, setTasks}: Props) => {


    const handlePause = (id: string) => {
       
        setTasks(tasks.map((task)=>
            task.id === id? {...task, isActive: !task.isActive}:task
            )
        );
    };

    // adds to the current timer by a set amount of time (1 minute)
    const handleExtend = (id: string) => {
       
        setTasks(tasks.map((task)=>
            task.id === id? {...task, time : task.time + 1 }:task
            )
        );
    };

    // subtracts from (fast-forwards) the current timer by a set amount of time (1 minute)
    const handleAdvance = (id: string) => {
       
        setTasks(tasks.map((task)=>
            task.id === id? {...task, time : task.time - 1 }:task
            )
        );
    };

    const handleDone = (id: string) => {
        setTasks(tasks.map((task)=>
            task.id === id? {...task, isDone: !task.isDone}:task
            )
        );
    };

    const handleDelete = (id: string) => {
        setTasks(tasks.filter((task)=>task.id != id));
        
    };

    const handleActive = (id: string) => {

       setTasks(
            tasks => tasks.map(
                task => {
                    return {
                    ...task,
                    isActive: task.id === id,
                    isCurrent: task.id === id
                    };
                }
            )

        );

        
    };


     const renderTime = ({ remainingTime }: {remainingTime: number}) => {
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

        <div className={task.isCurrent ? 'task-isCurrent' : 'task-isNotCurrent'}>
      
                    
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
      



            {task.isCurrent ? (
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
                <span className="icon" onClick={()=>handleExtend(task.id)}>
                    <FaPlus />
                </span>
                <span className="icon" onClick={()=>handleAdvance(task.id)}>
                    <FaForward />
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