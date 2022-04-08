import React from 'react';
import { useState } from 'react';
import './App.css';
import InputField from "./components/inputField";
import TaskList from "./components/TaskList";
import { Task } from "./model";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';




const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  
  
  const handleAdd= (e: React.FormEvent) => {
    e.preventDefault();

    if(task){
      setTasks([...tasks, {id: Date.now(), task:task, time:time, isDone:false, isActive:false }]);
      setTask("");
      setTime(0);

    }

  };

  console.log(tasks);

  return (
    <div className="App">

      <Container>

        <span className="heading">Subtask Timer</span>
        <InputField task={task} setTask={setTask} time={time} setTime={setTime} handleAdd={handleAdd}/>
        <TaskList tasks={tasks} setTasks={setTasks} />
       
      </Container>
      
    </div>
  );
};

export default App;
