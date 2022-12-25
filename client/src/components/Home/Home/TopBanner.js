import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <div className='bg-[url("https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhbGN1bGF0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60")] bg-cover bg-fixed  '>
            <div className='  md:px-44 md:py-48 py-32 backdrop-blur-sm'>
                <h1 className='text-4xl font-bold md:font-extrabold md:text-7xl text-white'>IT'S ALL ABOUT SIMPLE TRACKING FOR BETTER <span className='text-green-400'>FINANCIAL CONTROL</span></h1>
                <div className='flex flex-col'>
                    <Link to='/login' className="btn btn-success btn-outline  mx-auto my-6 px-8">Please Login</Link>
                    <Link to='/myCalculation' className=" btn btn-success mx-auto hover:text-white px-8 ease-in duration-500 hover:scale-125">Track Your Expense</Link>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;