import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import HackList from './components/HackList/HackList';
import TopDevelopers from './components/TopDevelopers/TopDevelopers';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>

                    <Route path="/hacklist" element={<HackList />} />

                    <Route path='/top-developers' element={<TopDevelopers />} />
                </Routes>
            </BrowserRouter>
            
        </>
    );
}

export default App;

