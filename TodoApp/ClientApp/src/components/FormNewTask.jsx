import React, { useState, useContext } from "react";
import { TaskContext } from "../TaskContext";

export const FormNewTask = () => {
    const [taskDescription, setTaskDescription] = useState('');
    const { handleAddTask }  = useContext(TaskContext);

    const handleAddClick = () => {
        handleAddTask(taskDescription);
        setTaskDescription('');
    };

    return (
        <div className="row">
        <div className="col-sm-12">
          <form onSubmit={handleAddClick}>
            <div className="input-group">
              <input type="text" className="form-control"
                placeholder="What are we going to do today?"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <button type="submit" className="btn btn-success">Save!</button>
            </div>
          </form>
        </div>
        </div>
    );
};
