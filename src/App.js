import { auth } from './firebase';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';

import './App.css';


function App() {
  const [user, setUser] = useState(null);

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
      {/* <ImageSlider slides={SliderData} />; */}
      <Header user={user} />
      <Main user={user} />
      <Profile user={user} />

    </div>
  );
}

export default App;