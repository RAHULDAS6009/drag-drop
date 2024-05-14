import { useState } from "react";
import { ActiveTask } from "./components/ActiveTask";
import { CompletedTask } from "./components/CompletedTask";

function App() {
  const [inputbox, setInputbox] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="w-full h-screen bg-blue-600 grid place-items-center">
      <div className=" w-[600px] bg-green-500 h-[500px] text-center p-4 rounded-xl">
        <div className="text-white text-[65px] mb-10 font-mono font-bold ">Taskify</div>
        <div className="flex mb-10 relative">
          <input
            className="w-full rounded-2xl  outline-blue-500 p-2.5 "
            placeholder="Enter Task.."
            type="text"
          />
          <button className="rounded-full bg-indigo-400 focus:bg-blue-400 w-10 h-10  text-white font-medium absolute right-0 mr-1.2 mt-[2px] border ring ring-blue-100">
            GO
          </button>
        </div>
        <div className="flex justify-center">
          <ActiveTask />
          <CompletedTask />
        </div>
      </div>
    </div>
  );
}

export default App;
