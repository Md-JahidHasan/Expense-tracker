import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-[url('https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNhbGN1bGF0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60')] bg-fixed ">
            <div className="md:w-2/5 my-10 w-full">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card   shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-400">Sign Up</button>
                        </div>
                        <h2>Already have an account? Please <Link to='/login' className='text-green-600 font-bold'>Login</Link></h2>
                        <div className='flex justify-center'><hr /><h2>or</h2> <hr /></div>
                        <button className="btn bg-green-400">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;