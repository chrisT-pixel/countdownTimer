import React, { useRef } from "react";

interface Props{
  task: string;
  time: number;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  handleAdd:(e: React.FormEvent) => void;
}

const InputField = ({ task, time, setTime, setTask, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return(
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur();
      }}
      >
       
      <input 
        ref={inputRef}
        type="input" 
        value={task}
        onChange={
          (e)=>setTask(e.target.value)
        }
        placeholder="Enter a task" 
        className="input__box" />

        <input 
        ref={inputRef}
        type="number" 
        min="1"
        value={time}
        onChange={
          (e)=>setTime(e.target.valueAsNumber)
        }
        placeholder="Enter time in minutes" 
      className="input__box" />
      <button className="input_submit" type="submit">
        Create new task
      </button>
    </form>
  );
};

export default InputField;