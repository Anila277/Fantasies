import { useState, useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Index from '../pages/Index';
import Show from '../pages/Show';
import MainIndex from '../pages/MainIndex';
import About from '../pages/About';

function PrivatePageContainer({ children, user }) {
    return user ? children : <Navigate to='/' />
}

function Main({ user }) {
    const [poems, setPoems] = useState(null);

    const API_URL = 'http://localhost:4000/api/poems/'

    const getData = async () => {

        if (!user) return; // do not run this function unless a user is logged in

        try {

            const token = await user.getIdToken();
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await response.json();
            setPoems(data);
        } catch (error) {
            console.log('check that your backend is running' + error);
            // TODO add logic to alert the user that something went wrong

        }
    }

    const createPoems = async (poems) => {
        if (!user) return;

        try {
            const token = await user.getIdToken();
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(poems)
            });
            getData();
        } catch (error) {
            // TODO handle errors
        }
    }

    const deletePoems = async (id) => {
        if (!user) return;
        try {
            const token = await user.getIdToken();
            await fetch(API_URL + id, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            getData();
        } catch (error) {
            // TODO handle errors
            console.log(error);
        }
    }

    const updatePoems = async (updatedPoem, id) => {
        if (!user) return;
        try {
            const token = await user.getIdToken();
            await fetch(API_URL + id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(updatedPoem)
            });
            getData();
        } catch (error) {
            // TODO handle errors
            console.log(error);
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
                    <MainIndex />
                } />
                <Route path='/index' element={
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
                            user={user}
                            deletePoems={deletePoems}
                            updatePoems={updatePoems}
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