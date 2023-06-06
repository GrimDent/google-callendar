import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
function LoginPopup() {

const { setShowLoginPopup } = useContext(GlobalContext);

function isRegister() {
  var checkBox = document.getElementById("isRegister");
  if (checkBox.checked === true){
    document.getElementById("usernameDiv").classList.add("inline");
    document.getElementById("usernameDiv").classList.remove("hidden");
    document.getElementById("passwordDiv").classList.add("inline");
    document.getElementById("passwordDiv").classList.remove("hidden");
    document.getElementById("username").required = true;
    document.getElementById("passwordRepeat").required = true;
  } else {
    document.getElementById("usernameDiv").classList.add("hidden");
    document.getElementById("usernameDiv").classList.remove("inline");
    document.getElementById("passwordDiv").classList.add("hidden");
    document.getElementById("passwordDiv").classList.remove("inline");
    document.getElementById("username").required = false;
    document.getElementById("passwordRepeat").required = false;
  }
}

  return(

    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            <button onClick={() => setShowLoginPopup(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
          </button>
          </div>
        </header>
        <div className="p-3">
          <label htmlFor="username">nie masz konta?  </label>
            <input
              type="checkbox"
              id="isRegister"
              onClick={isRegister}  
            />
            <br />
          <label htmlFor="email">adres E-mail:</label>
          <input
            type="email"
            id="email"
            required
            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <div id="usernameDiv" className="hidden">
            <label htmlFor="username">nazwa użytkowinka:</label>
            <input
              type="text"
              id="username"
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            required
            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <div id="passwordDiv" className="hidden">
            <label htmlFor="passwordRepeat">Hasło:</label>
            <input
              type="password"
              id="passwordRepeat"
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Zaloguj się
          </button>
        </footer>
        </div>
      </form>
    </div>
  )
}

export default LoginPopup