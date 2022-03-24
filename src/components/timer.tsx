import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import { CountdownCircleTimer } from "react-countdown-circle-timer";

type Props = {
  remainingTime: number
}


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

export function Timer() {


  return (

          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying={true}
              duration={60}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[10, 6, 3, 0]}
              onComplete={() => ({ shouldRepeat: true, delay: 1 })}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>


  );
}
