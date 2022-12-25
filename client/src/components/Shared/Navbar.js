import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-green-400 px-6 md:py-3 sticky top-0 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Expense Tracker</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control hidden md:block">
                    <Link to='/' className='btn btn-outline button-white btn-sm mr-8'>Home</Link>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className=" rounded-full">
                            <img width='40px' src="https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li className='block md:hidden'><Link to='/'>Home</Link></li>
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;