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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
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
