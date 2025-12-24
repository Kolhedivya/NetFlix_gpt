
import { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const handletoggle = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div >
            <Header />
            <div className='absolute'>
                <img alt='backgound-img'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg'
                ></img>
            </div>
            <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 rounded-lg opacity-90'>
                <h1 className='text-bold text-3xl text-white py-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!(isSignIn) && <input className='py-2 my-2 px-3 w-full bg-gray-700' type='text' placeholder=' Enter Name'></input>}

                <input
                    className='py-2 my-2 px-3 w-full bg-gray-700'
                    type='text' placeholder=' Enter Email'>
                </input>
                <input
                    className='py-2 my-2 px-3 w-full bg-gray-700'
                    type='password' placeholder=' Enter Password'>
                </input>
                <button className='py-2 my-2 bg-red-600 text-white w-full rounded-lg'>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-2 my-2 text-white cursor-pointer'
                    onClick={handletoggle}>
                    {isSignIn ? "Are you new ? Sign Up now " : "Already a User? Sign In now"}
                </p>
            </form>
        </div>
    )
}

export default Login;