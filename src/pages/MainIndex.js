import SearchBar from '../components/SearchBar';
import PoemData from '../components/Data.json';
import ImageSlider from '../components/ImageSlider';
import { useState, useEffect } from 'react';
import { SliderData } from '../components/SliderData';
import PoemDisplay from '../components/PoemDisplay'
import Form from "../components/Form";


function MainIndex() {


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
    console.log(Poema[0].title);
    console.log(Poema[0].poet.name);
    console.log(Poema[0].content);  
  
  
  };



    return (
        <>
            <div className='mainMain'>
                <div className='icon'></div>
                <h1 className='title'> Welcome to Fantasies </h1>

                <ImageSlider slides={SliderData} />
            </div>
            <div>
            <Form Poemasearch={getPoema} />
            <PoemDisplay Poema={Poema} />
                {/* <SearchBar placeholder="Search A Poem" data={PoemData} /> */}
            </div>
        </>
    )
}


export default MainIndex;