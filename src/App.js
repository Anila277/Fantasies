import { auth } from './firebase';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import './App.css';
import PoemDisplay from './components/PoemDisplay'
import Form from "./components/Form";
import react from "react"



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

  const [poem, setPoem] = react.useState(null);

  const getPoem = async (searchterm) => {

    const response = await fetch(
      `https://www.abbreviations.com/services/v2/poetry.php?uid=10943&tokenid=lZ7wrmcIPWDEvZLv&term=${searchterm}&format=json`
    );

    const data = await response.json();

    setPoem(data);
  };

  return (
    <div className="App">

      <Header user={user} />
      <Main user={user} />
      <Form Poemsearch={getPoem} />
      <PoemDisplay Poem={poem} />
    </div>
  );
}

export default App;
