import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import LegislatorSummary from '../pages/LegislatorSummary';
import BillsSummary from '../pages/BillsSummary';

const Router: React.FC = () => {
    return (
        <main className='flex-grow'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/legislators' element={<LegislatorSummary />} />
                <Route path='/bills' element={<BillsSummary />} />
            </Routes>
        </main>
    );
}

export default Router;
