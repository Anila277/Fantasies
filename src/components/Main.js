
import { Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Index from '../pages/Index';
import Show from '../pages/Show';

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
const createPoems = async (poem) => {
  try{
    await fetch (API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
                },
                body: JSON.stringify(poem)
      });
      getData();

    }catch (error) {

    }

  }
  
  
  const deletePoems = async (id) => {
    try {
      await fetch (API_URL + id, {
        
        method: 'DELETE'
      });
      getData();
    } catch (error) {
      console.log(error);
    }
    
  }
  
  const updatePoems = async (updatePoem, id) => {
    try {
      await fetch (API_URL + id, {
        method: 'PUT',
        headers: {
          'Content-type' : 'Application/json'
        },
        body: JSON.stringify(updatePoem)
      })
      getData();
    } catch (error) {
      
    }
  }
  
  useEffect (() =>{
    getData();
  }, []);
  
  
  return (
    <main>
    <h1> Welcome To Fantasies</h1>
  <Routes>
      <Route path='/' element ={
        <Index
        poems={poems}
        createPoems={createPoems}
        />
      } 
      />
      <Route path ='/poems/:id' element={
        <Show 
        poems={poems}
        deletePoems={deletePoems}
        updatePoems={updatePoems}
        />
      } />
  </Routes>
</main>
  );
}



export default Main;