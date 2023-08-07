import React from 'react'
import Slider from "react-slick";
import Testi from '../../../assets/testi-100x100_left.jpg'
import Testi1 from '../../../assets/testi1-100x100_left.jpg'
import Testi2 from '../../../assets/testi2-100x100_left.jpg'
import Quat from '../../../assets/quat.svg'
function FifthSection() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "60px",
                slidesToShow: 3,
                speed: 500,
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
    <div className="section6">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p className="testimonial_sec">TESTIOMINAL</p>
                </div>
            </div>
            <div className="row">
                <Slider {...settings} className="test_content" id="test_content" >
                    <div className="col-md-4">
                        <div className="testimonial_card" >
                            <div className="testi_img">
                                <img src={Testi} className="img_test_img" alt=""/>
                                <p className="testimonial_title">JHON DEE</p>
                                <p className="testimonial_detail">Interdum et malesuada fames ac ante ipsum primis in
                                    faucibus. Nulla a erat non turpis ultricies sagi …</p>
                            </div>
                            <img src={Quat}
                                alt="" className="testmonial_qouma"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial_card" >
                            <div className="testi_img">
                                <img src={Testi1} className="img_test_img" alt=""/>
                                <p className="testimonial_title">JHON DEE</p>
                                <p className="testimonial_detail">Interdum et malesuada fames ac ante ipsum primis in
                                    faucibus. Nulla a erat non turpis ultricies sagi …</p>
                            </div>
                            <img src={Quat}
                                alt="" className= "testmonial_qouma"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial_card"> 
                            <div className="testi_img">
                                <img src={Testi2} className="img_test_img" alt=""/>
                                <p className="testimonial_title">JHON DEE</p>
                                <p className="testimonial_detail">Interdum et malesuada fames ac ante ipsum primis in
                                    faucibus. Nulla a erat non turpis ultricies sagi …</p>
                            </div>
                            <img src={Quat}
                                alt="" className= "testmonial_qouma"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial_card" >
                            <div className="testi_img">
                                <img src={Testi} className="img_test_img" alt=""/>
                                <p className="testimonial_title">JHON DEE</p>
                                <p className="testimonial_detail">Interdum et malesuada fames ac ante ipsum primis in
                                    faucibus. Nulla a erat non turpis ultricies sagi …</p>
                            </div>
                            <img src={Quat}
                                alt="" className= "testmonial_qouma"/>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default FifthSection