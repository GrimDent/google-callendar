import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
const { setShowLoginPopup } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowLoginPopup(true)}
      className="border p-2 rounded-full absolute right-40 shadow-md hover:shadow-2xl"
    >
      <span className="pl-3 pr-7">Zaloguj się</span>
    </button>
  );
}
