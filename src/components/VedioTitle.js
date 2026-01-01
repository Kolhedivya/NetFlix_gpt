

const VedioTitle = ({ title, year }) => {


    return (
        <div className='pt-[68%] px-6 md:w-screen aspect-video md:pt-[10%]  md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-2xl md:text-3xl md:font-bold'>{title}</h1>
            <p className=' md:text-xl md:font-bold'>{year}</p>
            <p className="max-sm:hidden md:py-6 md:text-lg md:w-1/4">In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries</p>
            <div className="">
                <button className="max-sm:text-sm max-sm:p-2   max-sm:mt-1  bg-blue-500 m-1  rounded-lg md:p-4 md:px-16  text-white md:text-xl bg-opacity-60 hover:opacity-45">▶️ Play</button>
                <button className="max-sm:hidden bg-blue-500 m-1    rounded-lg p-4 px-16 text-lg text-white text-xl  bg-opacity-60">ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VedioTitle