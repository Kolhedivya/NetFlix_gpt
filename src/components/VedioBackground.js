import { useRef } from "react";


const VedioBackground = () => {

    const iframeRef = useRef();

    const goFullscreen = () => {
        const iframe = iframeRef.current;
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) { // Safari
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // IE/Edge
                iframe.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <button
                onClick={goFullscreen}
                className="mb-4 px-4 py-2 bg-red-600 text-white rounded"
            >
                Go Fullscreen
            </button>

            <iframe
                ref={iframeRef}
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/AfQ13jsLDms?autoplay=1&mute=1&rel=0&modestbranding=1"
                title="Stranger Things Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
            />
        </div>

    )
}

export default VedioBackground