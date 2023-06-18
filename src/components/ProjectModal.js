import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import axios from 'axios';

export default function ProjectModal() {
  const {
    setShowProjectModal,
    dispatchProjects,
    selectedProject
  } = useContext(GlobalContext);

  const [name, setName] = useState(
    selectedProject ? selectedProject.name : ""
  );
  const [shortName, setShortName] = useState(
    selectedProject ? selectedProject.shortName : ""
  );
  const [color, setColor] = useState(
    selectedProject
      ? selectedProject.color : ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    let active = true
    const projectPayload = {
      name,
      shortName,
      color,
      active
    };
    if (selectedProject) {
      dispatchProjects({ type: "update", payload: projectPayload });
    } else {
      dispatchProjects({ type: "push", payload: projectPayload });
    //   axios.put('https://130.162.217.192/project/create', projectPayload)
    //   .then(res => console.log(res))
    // const response = fetch("https://example.com/profile", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(projectPayload),
    // });
    }
    setShowProjectModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedProject && (
              <span
                onClick={() => {
                  dispatchProjects({
                    type: "delete",
                    payload: selectedProject,
                  });
                  setShowProjectModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => setShowProjectModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="name"
              placeholder="Nazwa projektu"
              value={name}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="shortName"
              placeholder="skrótowa nazwa"
              value={shortName}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setShortName(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <input
              type="color"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
