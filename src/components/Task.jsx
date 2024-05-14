import checkLogo from "../assets/check.svg";
import deleteLogo from "../assets/delete.svg";
import editLogo from "../assets/edit.svg";

export const Task = ({ task }) => {
  return (
    <div className="bg-blue-200 rounded-xl border my-2 h-10 p-2 font-bold text-slate-600 relative">
      {task}
      <div className="flex justify-between gap-2 absolute top-3 right-0 pr-2">
        <button className="bg-green-400">
          <img
            className="w-3 h-3 "
            src={checkLogo}
            alt="checkLogo"
          />
        </button>
        <button>
          <img
            className=" w-3 h-3"
            src={deleteLogo}
            alt="deleteLogo"
          />
        </button>
        <button>
          <img
            className="  w-3 h-3"
            src={editLogo}
            alt="editLogo"
          />
        </button>
      </div>
    </div>
  );
};
