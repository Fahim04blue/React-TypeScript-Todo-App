import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContextProvider";

const TaskForm = () => {
  const { addTask, clearTask, editTask, editTodo } = useContext(
    TaskContext
  ) as ContextType;
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
    } else {
      setTitle("");
    }
  }, [editTodo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent, title: IContext | any) => {
    e.preventDefault();
    if (!editTodo) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editTodo.id);
    }
  };

  const handleClear = () => {
    clearTask();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, title)} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
      />
      <div className="buttons">
        <button className="btn add-task-btn" type="submit">
          {editTodo ? "Edit Task" : "Add Task"}
        </button>
        <button onClick={handleClear} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
