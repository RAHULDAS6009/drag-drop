import { useState } from "react";
import checkLogo from "../assets/check.svg";
import deleteLogo from "../assets/delete.svg";
import editLogo from "../assets/edit.svg";

export const Task = ({ task }) => {
  const [title,setTitle]=useState(task)
  const [edit, setEdit] = useState(false);
  return (
    <div draggable>
      {edit ? (
        <div className=" shadow-2xl bg-blue-200 rounded-xl border my-2 h-10 p-2 font-bold text-slate-600 relative">
          <input
            className="bg-white w-[180px] rounded  absolute ring ring-white focus:outline-none"
            type="text"
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
          <div className="flex justify-between gap-2 absolute top-3 right-0 pr-2">
            <button className="bg-green-400">
              <img className="w-3 h-3 " src={checkLogo} alt="checkLogo" />
            </button>
            <button>
              <img className=" w-3 h-3" src={deleteLogo} alt="deleteLogo" />
            </button>

            <button
              onClick={() => {
                setEdit(false);
              }}
            >
              <img className="  w-3 h-3" src={editLogo} alt="editLogo" />
            </button>
          </div>
        </div>
      ) : (
        <div className=" shadow-2xl bg-blue-200 rounded-xl border my-2 h-10 p-2 font-bold text-slate-600 relative">
          {title}
          <div className="flex justify-between gap-2 absolute top-3 right-0 pr-2">
            <button className="bg-green-400">
              <img className="w-3 h-3 " src={checkLogo} alt="checkLogo" />
            </button>
            <button>
              <img className=" w-3 h-3" src={deleteLogo} alt="deleteLogo" />
            </button>

            <button
              onClick={() => {
                setEdit(true);
              }}
            >
              <img className="  w-3 h-3" src={editLogo} alt="editLogo" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
