import { useSelector } from 'react-redux'
import { language } from '../utils/languageConstants'
import { useRef } from 'react'

import openai from '../utils/openAi'


const GptSearchBar = () => {
    const lang = useSelector(store => store.config.language)
    const serachText = useRef(null);

    const handleSubmit = async () => {
        const query = serachText.current?.value;
        if (!query) return;
        console.log("User query:", query);
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: 'You are a movie expert who recommends popular and underrated films based on user preferences. Focus on Indian cinema unless asked otherwise.'
                }
            ]
        });
        console.log("GPT response:", completion.choices);
    }

    return (
        <div className='pt-[10%] flex justify-center'>


            <form onSubmit={(e) => { e.preventDefault() }} className='w-1/2 bg-black grid grid-cols-12'>
                <input ref={serachText} className='col-span-9 p-4 m-4 bg-white text-black' type='text' placeholder={language[lang].placeholder}></input>
                <button onClick={handleSubmit} className='col-span-3 py-2 px-2 m-4 bg-red-700 text-white rounded-lg'>{language[lang].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar