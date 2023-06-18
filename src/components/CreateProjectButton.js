import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowProjectModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowProjectModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl inline"
    >
      <span className="material-icons-outlined text-gray-400">
        add
      </span>
    </button>
  );
}
