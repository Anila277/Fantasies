import { Routes, Route} from 'react-router-dom';
import Index from '../pages/Index';
import {useEffect, useState} from 'react';

function Main (props) {
  
  const [ poems, setPoems] = useState(null);

  const API_URL ='http://localhost:4000/api/people/';

  const getData = async () => {
    try {
      const response = await fetch (API_URL);
      const data = await response.json();
      setPoems(data);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect (() =>{
    getData();
  }, []);


  return (
  <main>
  <Routes>
      <Route path='/' element ={
        <Index
        poems={poems}
        />
      } 
      />
  </Routes>
</main>
  );
};

export default Main;