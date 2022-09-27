import { auth } from './firebase';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userObjOrNull) => setUser(userObjOrNull))
  }, []);

  return (
    <div className="App">

      <Header user={user} />
      <Main />

    </div>
  );
}

export default App;
