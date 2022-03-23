import React from 'react';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Subtasks } from '../subtasks';

export function MainView() {

const [timers, setTimers] = useState([15]);

 function addTimer() {

   setTimers([...timers, 15])

 }
    return(
        <Container>

            <div className="App">
              <Button variant="primary" onClick={addTimer}>Add New Subtask</Button>
              <br />
                {timers.map((item, i) => ( <Subtasks remainingTime={item} /> ))}
            </div>

        </Container>
    );
}
