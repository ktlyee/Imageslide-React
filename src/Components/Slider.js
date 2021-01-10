import React, {useState} from 'react'
import '../Slider.scss'
import ImgComponent from './ImgComponent'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'

function Slider() {
    const sliderArray = [
        <ImgComponent src={pic1} index="1"/>,
        <ImgComponent src={pic2} index="2"/>,
        <ImgComponent src={pic3} index="3"/>,
        <ImgComponent src={pic4} index="4"/>,
        <ImgComponent src={pic5} index="5"/>
    ]
    const [index, setIndex] = useState(0)

    const prevSlide = () => {
        index === 0 ? setIndex(-100*(sliderArray.length-1)) : setIndex(index + 100)
    }

    const nextSlide = () => {
        index === -100*(sliderArray.length-1) ? setIndex(0) : setIndex(index - 100)
    }

    return (
        <div className="slider">
            {
                sliderArray.map((item, id) => {
                    return (
                        <div key={id} className="slide" style={{transform: `translateX(${index}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button id="buttonLeft" onClick={prevSlide}>
                <i class="fas fa-chevron-left"></i>
            </button>

            <button id="buttonRight" onClick={nextSlide}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Slider;