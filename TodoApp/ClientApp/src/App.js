import React from "react";
import { TaskProvider } from "./TaskContext";
import { ListItemTasks } from "./components/ListItemTasks";
import { FormNewTask } from "./components/FormNewTask";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {  
  return (
    <TaskProvider>
      <div className="container bg-dark p-4 vh-100">
        <h2 className="text-white">List of Tasks</h2>
        <FormNewTask/>
        <ListItemTasks/>
      </div>
    </TaskProvider>
  )
}

export default App;
