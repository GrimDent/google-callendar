import React, {useContext} from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import GlobalContext from "../context/GlobalContext";
import OpenCharts from "./OpenCharts"

export default function Sidebar() {

  const { showChartsButton } = useContext(GlobalContext);

  return (
    <>
      {/* {showChartsButton && <OpenCharts/>} */}
    <OpenCharts/>
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
    </>
  );
}
