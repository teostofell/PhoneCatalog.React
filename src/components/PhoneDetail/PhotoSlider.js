import React, { Component } from "react";
import Slider from "react-slick";

class PhotoSlider extends Component {
    render() {
        let photos = this.props.photos;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>                
                <Slider {...settings}>
                    {
                        photos.map(p => 
                            <div>
                                <img src={p.Path} alt="slider-item" className="slider-photo"/>
                            </div>
                        )
                    }
                </Slider>
            </div>
        );
    }
}

export default PhotoSlider;