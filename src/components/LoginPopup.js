import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { useSignIn } from 'react-auth-kit';
import axios from 'axios';
function LoginPopup() {

const { setShowLoginPopup } = useContext(GlobalContext);
const signIn = useSignIn();
const [formLoginData, setFormLoginData] = React.useState({email: '', password: ''});
const [formRegisterData, setFormRegisterData] = React.useState({email: '', password: '', fullName: ''})
const { setJWT,
        setEmail,
        setShowLoginButton,
        setShowLogoutButton,
        setRefreshToken  } = useContext(GlobalContext);
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

const updateEmailForm = (e) =>{
  setFormLoginData({...formLoginData, email: e.target.value})
  setFormRegisterData({...formRegisterData, email: e.target.value})
  setEmail(e.target.value)
}

const updatePassForm = (e) =>{
  setFormLoginData({...formLoginData, password: e.target.value})
  setFormRegisterData({...formRegisterData, password: e.target.value})
}

const onSubmit = (e) => {
  e.preventDefault()
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  var checkBox = document.getElementById("isRegister")
  if(checkBox.checked === true){
    setFormRegisterData(formLoginData);
    axios.put('https://130.162.217.192/user/register', formRegisterData)
      .then(res => console.log(res))
    alert("konto zostało założone poprawnie, możesz się teraz na nie zalogować")
  }
  else{
      axios.post('https://130.162.217.192/auth/login', formLoginData)
      .then(res => {
        setJWT(res.data.token)
        setRefreshToken(res.data.refreshToken)
        setShowLoginPopup(false)
        setShowLoginButton(false)
        setShowLogoutButton(true)
        
      })
  }
}



  return(

    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form 
      onSubmit={onSubmit}
      className="bg-white rounded-lg shadow-2xl w-1/4">
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
            onChange={(e)=>updateEmailForm(e)}
            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <div id="usernameDiv" className="hidden">
            <label htmlFor="username">nazwa użytkowinka:</label>
            <input
              type="text"
              id="username"
              onChange={(e)=>setFormRegisterData({...formRegisterData, fullName: e.target.value})}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
          </div>
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e)=>updatePassForm(e)}
            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <div id="passwordDiv" className="hidden">
            <label htmlFor="passwordRepeat">Powtórz hasło:</label>
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