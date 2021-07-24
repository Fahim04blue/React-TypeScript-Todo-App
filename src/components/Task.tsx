import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContextProvider";

interface IProps {
  task: IContext;
}

const Task = ({ task }: IProps) => {
  const { deleteTask, findTask, editTodo } = useContext(
    TaskContext
  ) as ContextType;

  const handleDelete = (id: number | string) => {
    deleteTask(id);
  };

  const handleEdit = (id: number | string) => {
    findTask(id);
    // console.log(editTodo);
  };

  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          onClick={() => handleDelete(task.id)}
          className="btn-delete task-btn"
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button
          onClick={() => handleEdit(task.id)}
          className="btn-edit task-btn"
        >
          <i className="far fa-edit"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
