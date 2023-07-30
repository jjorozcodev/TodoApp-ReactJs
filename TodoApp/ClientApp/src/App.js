import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";


const App = () => {

  const [tasks, setTasks] = useState([])

  const showTasks = async () => {
    const response = await fetch("api/task/list");
    if(response.ok) {
      const data = await response.json();
      console.log(data);
      setTasks(data);
    }
    else {
      console.log("status code: " + response.status)
    }
  }

  useEffect(() => {
    showTasks();
  }, [])



  return (
    <div className="container bg-dark p-4 vh-100">
      <h2 className="text-white">List of Tasks</h2>
      <div className="row">
        <div className="col-sm-12"></div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-12">
          <div className="list-group">
            {
              tasks.map(
                (item) => (
                  <div key={item.id} className="list-group-item list-group-item-action">
                    <h5 className="text-primary">{item.description}</h5>
                    <div className="d-flex justify-content-between">
                      <small className="text-muted">{item.creationDate}</small>
                      <button type="button" className="btn btn-sm btn-outline-danger">
                        Close
                      </button>
                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
