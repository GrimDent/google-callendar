import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import CreateProjectButton from "./CreateProjectButton";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  const { savedEvents } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <span className="text-gray-500 font-bold mt-10 inline">Projekty</span>
      <CreateProjectButton className="inline"/>
      {savedEvents.map(({ savedEvents: name, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() =>
              updateLabel({ savedEvents: name, checked: !checked })
            }
            className={`form-checkbox h-5 w-5 text-black-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{name}</span>
        </label>
      ))}
    </React.Fragment>
  );
}
