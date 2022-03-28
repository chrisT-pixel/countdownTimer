import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
//import { Subtasks } from '../subtasks';
//import { Timer } from "../timer";

export function MainView() {

const [tasks, setTasks] = useState(["Sub Task"]);

 function addTask() {

   setTasks([...tasks, "Sub Task"])

 }
    return(
        <Container>

            <div className="App">
             
              <Button variant="primary" onClick={addTask}>Add New Subtask</Button>

                {/*tasks.map((item, i) => ( <Subtasks text={item} /> ))*/}
            </div>

        </Container>
    );
}
