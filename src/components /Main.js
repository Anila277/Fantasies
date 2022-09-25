import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Show from '../pages/Show';
import About from '../pages/About';

function Main(props) {
    return (
        <main>
            <h1>Hello Main page</h1>
            <Routes>
                <Route path='/show' element={

                    <Show />
                } />
            </Routes>
        </main>
    );
}

export default Main;