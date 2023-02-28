import { useState } from 'react';
import './App.css';
import GetUserComponent from './components/GetUserComponent/GetUSerComponent';
import WelcomePage from './components/WelcomePage/WelcomePage';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInput, setUserInput] = useState('')

  function changeUser(user){
    setUserInput(user)
  }

  function isLogged(value){
    setIsLoggedIn(value)
    console.log(value)
  }
  if(isLoggedIn===false){
    return(
      <GetUserComponent changeUser={changeUser} isLogged={isLogged}/>
    ) 
  }
  else
  if(isLoggedIn===true){
    return(
      <WelcomePage user={userInput} isLogged={isLogged}/>
    )
  }
}

export default App;
