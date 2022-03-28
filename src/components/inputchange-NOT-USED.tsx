import React from 'react';
import { ChangeEvent, useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



export const InputChange = () => {
  const [state, setState] = useState({ value: '' });

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setState({ value: event?.currentTarget?.value });
  }
  return (
    <div>
      <input className="form-control" onChange={handleChange} placeholder="enter time in seconds" type="number" />
      <p>{state?.value}</p>
    </div>
  );
}
