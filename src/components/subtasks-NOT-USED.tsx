import React from 'react';
import { ChangeEvent, useState } from 'react';
import ReactDOM from "react-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import { InputChange } from './inputchange';


type Props = {
  text: string,
  timeInSeconds: number
}

const renderText = ({ text }: Props) => {

  return (

          <div>{text}</div>


  );
};

export function Subtasks() {

  const [timeInSeconds, setTimeInSeconds] = useState('')

  return (


      <Row className="subtask-row">

        <Col>
          <Form.Control placeholder="Sub Task Name" type="text" />
        </Col>

        <Col>
          {/*<InputChange />*/}
        </Col>

        <Col>
          <Button variant="danger">Delete (does nothing)</Button>
        </Col>

      </Row>


  );
}
