import { useState } from 'react'

function App() {
  const [inputbox, setInputbox] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
        <div className="bg-red-700 w-full h-screen">
          <label htmlFor="">Taskify</label>
          <input type="text" />
          <div className="flex">
            <div className="bg-yellow-500">
              <label>Active task</label>
              <div>Task 1</div>
              <div>Task 2</div>
            </div>
            <div className="bg-blue-400 ">
            <label>Completed task</label>
            <div>Task 1</div>
            <div>Task 2</div>

            </div>
          </div>
        </div>
    )
}

export default App
