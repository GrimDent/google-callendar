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
        setShowUpdateButton } = useContext(GlobalContext);
const [projects, updateProjects] = useState()
const [tasks, setTasks] = useState()
let ids = []
let colors = []
let startDates = []

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateFunction(){
    try{
    axios.get('https://130.162.217.192/project/get-all', {
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
    }) 
  }
  for(let i=0; i<projects.length; i+=1){
    let title = "XD"
    let description  = "XD"
    let label = projects[i].name
    let day = dayjs(projects[i].startDate).format('YYYY-MM-DD')
    const calendarEvent = {
        title,
        description,
        label: label,
        day: day,
        id: selectedEvent ? selectedEvent.id : Date.now(),
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
      <span className="pl-3 pr-7">XD</span>
    </button>
  );
}
