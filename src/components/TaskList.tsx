import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../context/TaskContextProvider";

const TaskList = () => {
  const { tasks } = useContext(TaskContext) as ContextType;

  return (
    <div>
      <div>
        {tasks?.length ? (
          <ul>
            {tasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        ) : (
          <div className="no-tasks">No Tasks</div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
