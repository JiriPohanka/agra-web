import Slider from 'react-touch-drag-slider'
import { useState } from 'react'
import images from './images'

// {"access_token":"276911294492916|mVlOx5_gp5YUkgQB4XSgKkQ6bYs","token_type":"bearer"}

function Hero() {

    const [index, setIndex] = useState(1)

    const setFinishedIndex = (i) => {
        setIndex(i)
    }

    const next = () => {
        if (index < images.length - 1) setIndex(index + 1)
    }

    const previous = () => {
        if (index > 0) setIndex(index - 1)
    }

    return (
        <div className='hero h-96'>

            <button className="absolute" onClick={previous} disabled={index === 0}>
                〈
            </button>
            <button className="absolute" onClick={next} disabled={index === images.length - 1}>
                〉
            </button>
            <Slider
                onSlideComplete={setFinishedIndex}
                onSlideStart={(i) => {
                    // console.clear()
                    // console.log('started dragging on slide', i)
                }}
                activeIndex={index}
                threshHold={100}
                transition={0.5}
                scaleOnDrag={false}
            >
                {images.map(({ url, title }, index) => (
                    <img src={url} key={index} alt={title} />
                ))}
            </Slider>
        </div>


    )
}



export default Hero