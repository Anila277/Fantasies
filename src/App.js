import { auth } from './firebase';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import './App.css';
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


  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} />
    </div>
  );
  
  
}

export default App;
