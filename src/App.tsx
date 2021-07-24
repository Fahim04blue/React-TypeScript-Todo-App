import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>React TypeScript Todo App</h1>
        </div>
        <div className="main">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
