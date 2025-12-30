

const VedioTitle = ({ title, year }) => {


    return (
        <div className='w-screen aspect-video pt-[10%]  px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-xl font-bold'>{year}</p>
            <p className="py-6 text-lg w-1/4">In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries</p>
            <div className="">
                <button className="bg-blue-500 m-1  rounded-lg p-4 px-16 text-lg text-white text-xl bg-opacity-60 hover:opacity-45">▶️ Play</button>
                <button className="bg-blue-500 m-1    rounded-lg p-4 px-16 text-lg text-white text-xl  bg-opacity-60">ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VedioTitle