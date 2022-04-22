import React, { useState } from 'react';
import './App.css';
import InputField from "./components/inputField";
import TaskList from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { ImportExport } from './components/import-export/import-export';
import { Task } from './models/Task';
import { generateID } from './utils/id-generator';
import { FaLowVision, FaFileImport } from 'react-icons/fa';


const App: React.FC = () => {

  const [task, setTask] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showDialog, setShowDialog] = useState<boolean>(true);
  const [isLargeText, setLargeText] = useState(false); 
  const [isLargeActive, setLargeActive] = useState(false); 

  const toggleText = () => {
    setLargeText(!isLargeText);
    setLargeActive(!isLargeActive);
  };

  const handleAdd= (e: React.FormEvent) => {
    e.preventDefault();

    if(task){
      setTasks([...tasks, {id: generateID(), task:task, time:time, isDone:false, isActive:false, isCurrent:false  }]);
      setTask("");
      setTime(0);

    }

  };

  const openDialog = (): void => setShowDialog(true);

  return (
    <div className="App">
      <ImportExport showDialog={showDialog} setShowDialog={setShowDialog} tasks={tasks} setTasks={setTasks} />
      <Container>
        <div className="heading">
          <h1 className='pb-0 mb-0'>COMP2035 Subtask Timer System</h1>
          <div className='mt-0 ms-0'>
            <Button onClick={openDialog} variant='link' id="importBut" className='p-0'>Import/Export <FaFileImport /></Button>
          </div>
        </div>
        <div className="toggleTextButton" onClick={toggleText}>{isLargeActive ? 'normal font size': 'font for vision impaired'} <FaLowVision /></div>
        <div className={isLargeText ? 'large-text': 'normal-text'}>
          <InputField task={task} setTask={setTask} time={time} setTime={setTime} handleAdd={handleAdd}/>
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
        
      </Container>
    </div>
  );
};

export default App;
