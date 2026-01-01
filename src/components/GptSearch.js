import GptSearchBar from "./GptSearchBar"
import { GptSearchSuggestion } from "./GptSearchSuggestion"


const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10 w-full h-screen overflow-hidden'>
                <img className="w-full h-full object-cover" alt='backgound-img'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg'
                ></img>
            </div>
            <div className="">
                |<GptSearchBar />
                <GptSearchSuggestion />
            </div>

        </>
    )
}

export default GptSearch