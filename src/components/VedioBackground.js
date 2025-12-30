
const VedioBackground = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <iframe

                className="w-full aspect-video"
                src="https://www.youtube.com/embed/AfQ13jsLDms?autoplay=1&mute=1&loop=1&rel=0&modestbranding=1"
                title="Stranger Things Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"

            />
        </div>

    )
}

export default VedioBackground