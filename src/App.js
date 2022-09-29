import { auth } from './firebase';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

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

  const [poema, setPoema] = react.useState(null);

  const getPoema = async (searchterm) => {

    const response = await fetch(
      `https://www.abbreviations.com/services/v2/poetry.php?uid=10943&tokenid=lZ7wrmcIPWDEvZLv&term=${searchterm}&format=json`
    );

    const data = await response.json();
    

    setPoema(data);
    console.log(data);
    return JSON.stringify(poema);

  };
  function RenderResult() {
const [poema, getPoema] = useState("*** now loading***");

  useEffect(() => {
  getPoema("The Raven").then(
    result => setPoema(result));
}, []);}

  return (
    <div className="App">
      {/* <ImageSlider slides={SliderData} />; */}
      <Header user={user} />
      <Main user={user} />
      <Form poemasearch={getPoema} />
      <PoemDisplay Poema={poema} />
    </div>
  );
  
}


export default App;
