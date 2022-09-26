import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Show from '../pages/Show';
import About from '../pages/About';

function Main(props) {
    const [ poems, setPoems ] = useState(null);

    const API_URL = 'http://localhost:4000/api/poems'

    const getData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setPoems(data);
        } catch (error) {
            console.log(error);
            // TODO add logic to alert the user that something went wrong
            
        }
    }

    return (
        <main>
            <h1>Hello Main page</h1>
            <Routes>
                <Route path='/' element={
                    <Index 
                        poems={poems}
                    />
                } />
                <Route path='/poems/:id' element={
                    <Show 
                        poems={poems}
                    />
                } />
                <Route path='/about' element={
                    <About />
                } />
            </Routes>
        </main>
    );
}

export default Main;