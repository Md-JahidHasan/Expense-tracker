import React from 'react';
import Form from '../Form';
import Graph from '../Graph';

const ExpTracker = () => {
    return (
        <div>
            
            <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
                <h1 className='bg-slate-800 py-8 mb-10 text-white text-4xl rounded'>Expense Tracker</h1>
                {/* Grid Colunms */}
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Graph */}
                    <Graph></Graph>
                    {/* Transaction */}
                    <Form></Form>


                </div>
            </div>
        </div>
    );
};

export default ExpTracker;