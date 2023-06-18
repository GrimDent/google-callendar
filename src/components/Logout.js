import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {

const { setJWT,
    setEmail,
    savedEvents,
    dispatchCalEvent,
    setShowLoginButton,
    setShowLogoutButton } = useContext(GlobalContext);

function logout(){
    setJWT(null);
    setEmail(null);
    for(let i=0; i<savedEvents.length; i+=1){
        dispatchCalEvent({
            type: "delete",
            payload: savedEvents[i],
          });
    }
    setShowLoginButton(true)
    setShowLogoutButton(false)
    
}

  return (
    <button
      onClick={() => logout()}
      className="border p-2 rounded-full absolute right-2 shadow-md hover:shadow-2xl"
    >
      <span className="pl-3 pr-7">Wyloguj się</span>
    </button>
  );
}
