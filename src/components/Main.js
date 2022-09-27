import { useState, useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Index from '../pages/Index';
import Show from '../pages/Show';
import About from '../pages/About';

function PrivatePageContainer({ children, user }) {
    return user ? children : <Navigate to='/' />
}

function Main({ user }) {
    const [poems, setPoems] = useState(null);

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

    const createPoems = async (poems) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(poems)
            })
        } catch (error) {
            // TODO handle errors
        }
    }

    useEffect(() => {
        if (user) {
            getData();
        } else {
            setPoems(null);
        }
    }, [user]);

    return (
        <main>
            <h1>Hello Main page</h1>
            <Routes>
                <Route path='/' element={
                    <Index
                        user={user}
                        poems={poems}
                        createPoems={createPoems}
                    />
                } />
                <Route path='/poems/:id' element={
                    <PrivatePageContainer user={user}>
                        <Show
                            poems={poems}
                        />
                    </PrivatePageContainer>
                } />
                <Route path='/about' element={
                    <About />
                } />
            </Routes>
        </main>
    );
}

export default Main;