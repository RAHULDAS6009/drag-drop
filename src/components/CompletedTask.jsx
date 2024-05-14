import { Task } from "./Task"

export const CompletedTask=()=>{
    return <div className="w-full ">
        <div className="bg-yellow-400 rounded-lg border text-white h-10 p-2 font-bold">Completed Task</div>
        <div className="border p-2">
            <Task task={"Task 1"}/>
            <Task task={"Task 2"}/>
            <Task task={"Task 3"}/>
        </div>
    </div>
}