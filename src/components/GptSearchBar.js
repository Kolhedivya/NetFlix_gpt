import { useSelector } from 'react-redux'
import { language } from '../utils/languageConstants'

const GptSearchBar = () => {
    const lang = useSelector(store => store.config.language)


    return (
        <div className='pt-[10%] flex justify-center'>


            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input className='col-span-9 p-4 m-4 bg-white text-black' type='text' placeholder={language[lang].placeholder}></input>
                <button className='col-span-3 py-2 px-2 m-4 bg-red-700 text-white rounded-lg'>{language[lang].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar