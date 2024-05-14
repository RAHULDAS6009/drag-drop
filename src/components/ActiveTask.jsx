import { Task } from "./Task"

export const ActiveTask=()=>{
    return <div className="w-full">
        <div className="bg-indigo-400 hover:bg-indigo-300 rounded-lg border text-white h-10 p-2 font-bold">Active Task</div>
        <div className="border p-2">
             <Task task={"Task 1"}/>
            <Task task={"Task 2"}/>
            <Task task={"Task 3"}/>
        </div>
    </div>
}