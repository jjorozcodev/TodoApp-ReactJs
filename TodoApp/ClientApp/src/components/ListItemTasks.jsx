import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";
import { ItemTask } from "./ItemTask";

export const ListItemTasks = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="row mt-4">
            <div className="col-sm-12">
                <div className="list-group">
                    {tasks.map((item) => (
                        <ItemTask
                            key={item.id}
                            id={item.id}
                            description={item.description}
                            creationDate={item.creationDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}