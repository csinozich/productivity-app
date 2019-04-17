import React from 'react';

const Pomodoro = props => {
  return (
    <div>
      <p>{props.break ? props.restMinutes : props.workMinutes} : {props.seconds < 10 ? `0${props.seconds}` : props.seconds}
      </p>
      <button onClick={props.start ? props.pauseTimer : props.startTimer}>{props.start ? 'Pause' : 'Start'}</button>
    </div>
  )
}

export default Pomodoro;
