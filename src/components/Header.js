
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO_URL, SUPPORTED_LANUGAGE } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { addLanguagePref } from '../utils/configSlice'

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const showGpt = useSelector((store) => store.gptSearch.gptToggleValue)
    const dispatch = useDispatch();


    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            navigate('/error')
        })
    }

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView())
    }
    const handleLanguageChange = (e) => {
        dispatch(addLanguagePref(e.target.value))
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                const { uid, email, displayName, photoURL } = user.uid;

                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate('/browse');

            } else {
                // User is signed out
                dispatch(removeUser())
                navigate('/')
            }
        });

        return () => {
            unSubscribe();
        }
    }, [])

    return (
        <div className='flex justify-between absolute px-8 w-full py-2 bg-gradient-to-b from-black  z-10'>

            <img className='w-52'
                src={LOGO_URL} alt='logo'></img>

            {user && <div className='flex p-2'>
                {showGpt && <select onChange={handleLanguageChange} className='bg-black text-white py-2 px-4 rounded-3xl hover:opacity-50 mx-4 my-2'>
                    {SUPPORTED_LANUGAGE.map((lan) => (<option key={lan.identifier} value={lan.identifier}>{lan.name}</option>))}

                </select>}
                <button
                    onClick={handleGptSearchClick}
                    className='bg-blue-400 text-black py-2 px-4 rounded-3xl hover:opacity-50 mx-4 my-2'>{showGpt ? "Home Page" : "GPT Search"}</button>
                <img className='w-20 p-2'
                    alt='profileImg'
                    src={user?.photoURL}></img>
                <button onClick={handleSignOut} className='text-xl font-bold text-white'>Sign out</button>
            </div>}
        </div>

    )
}

export default Header;