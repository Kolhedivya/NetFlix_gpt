import { BG_POSTER } from "../utils/constants"
import GptSearchBar from "./GptSearchBar"
import { GptSearchSuggestion } from "./GptSearchSuggestion"


const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img alt='backgound-img'
                    src={BG_POSTER}
                ></img>
            </div>

            |<GptSearchBar />
            <GptSearchSuggestion />
        </div>
    )
}

export default GptSearch