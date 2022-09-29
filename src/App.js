import { auth } from './firebase';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import './App.css';
import PoemDisplay from './components/PoemDisplay'
import Form from "./components/Form";
import react from "react";



function App() {
  const [user, setUser] = react.useState(null);

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((userObjOrNull) => {
      setUser(userObjOrNull)
    });

    return () => {
      unsubscribe();
    };

  }, []);

  const apiKey = "lZ7wrmcIPWDEvZLv";
  const userID = "10943";

  const [Poema, setPoema] = useState({});

  const getPoema = async (searchterm) => {

    const response = await fetch(
      `https://www.poemist.com/api/v1/randompoems`
    );

    const data = await response.json();
    
    setPoema(data);
    console.log(data);
    console.log(Poema[0]);
  

  };

  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} />
      <Form poemasearch={getPoema} />
      <PoemDisplay Poema={Poema} />
    </div>
  );
  
  
}


export default App;
