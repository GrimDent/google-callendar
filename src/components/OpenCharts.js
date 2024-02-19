import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
const { setShowCharts,
        showCharts,
        setShowLogoutButton,
        showLogoutButton } = useContext(GlobalContext);

        function fix(){
            setShowLogoutButton(showCharts)
            setShowCharts(!showCharts)
        }
  return (
    <button
      onClick={() => setShowCharts(fix)}
      className="border p-2 rounded-full absolute right-54 bottom-4 shadow-md hover:shadow-2xl"
    >
      <span className="pl-3 pr-7">Wykresy Gantta</span>
    </button>
  );
}
