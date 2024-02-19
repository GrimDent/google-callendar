import React, { useContext, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
const { JWT,
        selectedLabel,
        selectedEvent,
        dispatchCalEvent,
        daySelected,
        savedEvents,
        setShowUpdateButton } = useContext(GlobalContext);
const [projects, updateProjects] = useState()
const [tasks, updateTasks] = useState()
let ids = []
let colors = []
let titles = []

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateFunction(){
    try{
    axios.get('https://130.162.217.192/project/get-all-assigned-to-user', {
    headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer '+JWT}
  }).then(res => {
  updateProjects(res.data)})
  for(let i=0; i<projects.length; i+=1){
    ids.push(projects[i].id)
    colors.push(projects[i].color)
  }
  for(let i=0; i<ids.length; i+=1){
    axios.get(`https://130.162.217.192/task/get-all-from-project?projectId=${ids[i]}`, {
    headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer '+JWT}
  }).then(res => {
    updateTasks(res.data[0])
    // titles.push(res.data[0].id)
    // console.log(res.data[0])
}) 
  }
  console.log(savedEvents)
  for(let i=0; i<projects.length; i+=1){
    let title = projects[i].shortName
    let description  = "XD"
    let label = projects[i].name
    let day = dayjs(projects[i].startDate).format('YYYY-MM-DD')
    let end = dayjs(projects[i].endDate).format('YYYY-MM-DD')
    let id = ids[i]
    const calendarEvent = {
        title,
        description,
        label: label,
        day: day,
        end: end,
        id: id,
      };
      if (selectedEvent) {
        dispatchCalEvent({ type: "update", payload: calendarEvent });
      } else {
        dispatchCalEvent({ type: "push", payload: calendarEvent });
  }
  }
  sleep(500)
  setShowUpdateButton(false)
    }catch(e){

    }

}
return (
    <button
      onClick={() => updateFunction()}
      className="border p-2 rounded-full absolute right-40 shadow-md hover:shadow-2xl"
    >
      <span className="material-icons-outlined text-gray-400">refresh</span>
    </button>
  );
}
