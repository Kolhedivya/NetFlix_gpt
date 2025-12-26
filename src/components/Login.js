
import { useRef, useState } from 'react';
import Header from './Header';
import { validateDataSignIn, validateDataSignUp } from '../utils/validate';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PHOTO_URL } from '../utils/constants';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    const dispatch = useDispatch();


    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const handleClick = () => {
        if (isSignIn) {
            const errSignin = validateDataSignIn(email.current.value, password.current.value);
            setErrMessage(errSignin);
        }
        else {
            const errSignup = validateDataSignUp(email.current.value, password.current.value, name.current.value);
            setErrMessage(errSignup)
        }
        if (errMessage) return

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value, photoURL: PHOTO_URL
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;

                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            })
                        );

                    }).catch((error) => {
                        setErrMessage(error)
                    });


                })
                .catch((error) => {
                    //const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorMessage)


                });
        }
        else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;



                })
                .catch((error) => {

                    const errorMessage = error.message;
                    setErrMessage(errorMessage)
                });

        }

    }

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
            <form onSubmit={(e) => { e.preventDefault() }} className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 rounded-lg opacity-90'>
                <h1 className='text-bold text-3xl text-white py-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!(isSignIn) && <input ref={name} className='py-2 my-2 px-3 w-full text-white bg-gray-700' type='text' placeholder=' Enter Name'></input>}

                <input
                    className='py-2 my-2 px-3 w-full bg-gray-700 text-white'
                    ref={email}
                    type='text' placeholder=' Enter Email'>
                </input>
                <input
                    className='py-2 my-2 px-3 w-full bg-gray-700 text-white'
                    ref={password}
                    type='password' placeholder=' Enter Password'>
                </input>

                <button className='py-2 my-2 bg-red-600 text-white w-full rounded-lg' onClick={handleClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                <p className=' text-red-500 text-lg'>{errMessage}</p>

                < p className='py-2 my-2 text-white cursor-pointer'
                    onClick={handletoggle}>
                    {isSignIn ? "Are you new ? Sign Up now " : "Already a User? Sign In now"}
                </p>
            </form>
        </div>
    )
}

export default Login;