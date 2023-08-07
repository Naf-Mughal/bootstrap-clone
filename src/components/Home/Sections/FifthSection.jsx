import React from 'react'
import Test1 from '../../../assets/Test1.jpg'
import Test2 from '../../../assets/Test2.jpg'
import Slider from "react-slick";
function FourthSection() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };

  return (
        <div className="section5">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="hot_deal pb-lg-0 pb-4">Hot Deal</p>
                        </div>
                        <Slider {...settings} className="your-class1">
                            <div className="container_deal">
                                <div className="overlay-black">
                                    <img src={Test1}
                                        alt="Avatar" className="image_deal w-100"/>
                                </div>
                                <div className="overlay">
                                    <img className="overlay_img w-100"
                                        src={Test2}
                                        alt=""/>
                                </div>
                                <p className="deal_price">£ 100.00</p>
                                <p className="perfect_day">Perfect Day in...</p>
                            </div>
                            <div className="container_deal">
                                <div className="overlay-black">
                                    <img src={Test1}
                                        alt="Avatar" className="image_deal w-100"/>
                                </div>
                                <div className="overlay">
                                    <img className="overlay_img w-100"
                                        src={Test2}
                                        alt="" />
                                </div>
                                <p className="deal_price">£ 100.00</p>
                                <p className="perfect_day">Perfect Day in...</p>
                            </div>
                            <div className="container_deal">
                                <div className="overlay-black">
                                    <img src={Test1}
                                        alt="Avatar" className="image_deal w-100"/>
                                </div>
                                <div className="overlay">
                                    <img className="overlay_img w-100"
                                        src={Test2}
                                        alt=""/>
                                </div>
                                <p className="deal_price">£ 100.00</p>
                                <p className="perfect_day">Perfect Day in...</p>
                            </div>
                            <div className="container_deal">
                                <div className="overlay-black">
                                    <img src={Test1}
                                        alt="Avatar" className="image_deal w-100"/>
                                </div>
                                <div className="overlay">
                                    <img className="overlay_img w-100"
                                        src={Test2}
                                        alt="" />
                                </div>
                                <p className="deal_price">£ 100.00</p>
                                <p className="perfect_day">Perfect Day in...</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FourthSection