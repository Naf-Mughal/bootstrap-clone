import React from 'react'
import Slider from '../../../assets/Slider.jpg'
import Slider2 from '../../../assets/Slider2.jpg'
function TopSection() {
  return (
    <div className="full_width">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 p-0">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Slider} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption">
                                    <h5 className="main_slider_heading">Exploring the world</h5>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Slider2} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption">
                                    <h5 className="main_slider_heading">Exploring the world</h5>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSection