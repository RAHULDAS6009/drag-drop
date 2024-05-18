import { useEffect, useState } from "react";

import { Task } from "./components/Task";
let globalId = 0;

function App() {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useState([
    { id: globalId++, title: "gym" },
    { id: globalId++, title: "reading" },
  ]);

  function addTask() {
    setTodoList((prvlist) => [...prvlist, { id: globalId++, title }]); //previous list +new object
    setTitle("");
  }

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  grid place-items-center">
      <div className=" w-[600px] bg-green-500 h-[500px]  p-4 rounded-xl ring">
        <div className="text-white text-[65px] mb-10 font-mono font-bold text-center">
          TasKify
        </div>
        <div className="flex mb-10 relative">
          <input
            className="w-full rounded-2xl  outline-blue-500 p-2.5 "
            placeholder="Enter Task.."
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button
            className="rounded-full bg-indigo-400 focus:bg-blue-400 w-10 h-10  text-white font-medium absolute right-0 mr-1.2 mt-[2px] border ring ring-blue-100"
            onClick={addTask}
          >
            GO
          </button>
        </div>

        <div className="flex ">
          <div className="w-full mr-4">
            <ActiveTask />
            <div>
              {todoList.map((task) => {
                return <Task key={task.id} task={task.title} />;
              })}
            </div>
          </div>

          <div className="w-full ml-4">
            <CompletedTask />
            <Task/>
          </div>
        </div>

      </div>
    </div>
  );
}

function ActiveTask() {
  return <div className="bg-indigo-400 rounded-lg border text-white h-10 p-2 font-bold ">Active Task</div>;
}

function CompletedTask() {
  return (
    <div className="bg-yellow-400 rounded-lg border text-white h-10 p-2 font-bold ">
      Completed Task
    </div>
  );
}

export default App;
