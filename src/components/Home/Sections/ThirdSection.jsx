import React from 'react'
import Fcard from '../../../assets/f_card_img.jpg'
import Slider from "react-slick";
function ThirdSection() {
    const settings = {
        centerPadding: "20px",
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
    <div className="section3">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-12">
                    <p className="f_blog_heading">FEATURERD BLOG POST</p>
                </div>
                <Slider {...settings} className="your-class">
                    <div className="blog_card">
                        <div>
                            <div className="overlay-black">
                                <img src={Fcard} className="img-fluid" alt=""/>
                            </div>

                            <div className="img_dec_f mt-3">
                                <i className="fa fa-pencil"></i>
                                <p className="f_p">by admin</p>
                            </div>
                            <p className="post_title">venenatis sit amet malesuada ut malesuada non ligu…</p>
                            <p className="blog_date">JUL 16, 2020</p>
                        </div>
                    </div>
                    <div className="blog_card">
                        <div>
                            <div className="overlay-black">
                                <img src={Fcard} className="img-fluid" alt=""/>
                            </div>
                            <div className="img_dec_f mt-3">
                                <i className="fa fa-pencil"></i>
                                <p className="f_p">by admin</p>
                            </div>
                            <p className="post_title">venenatis sit amet malesuada ut malesuada non ligu…</p>
                            <p className="blog_date">JUL 16, 2020</p>
                        </div>
                    </div>
                    <div className="blog_card">
                        <div>
                            <div className="overlay-black">
                                <img src={Fcard} className="img-fluid" alt=""/>
                            </div>
                            <div className="img_dec_f mt-3">
                                <i className="fa fa-pencil"></i>
                                <p className="f_p">by admin</p>
                            </div>
                            <p className="post_title">venenatis sit amet malesuada ut malesuada non ligu…</p>
                            <p className="blog_date">JUL 16, 2020</p>
                        </div>
                    </div>
                    <div className="blog_card">
                        <div>
                            <div className="overlay-black">
                                <img src={Fcard} className="img-fluid" alt=""/>
                            </div>
                            <div className="img_dec_f mt-3">
                                <i className="fa fa-pencil"></i>
                                <p className="f_p">by admin</p>
                            </div>
                            <p className="post_title">venenatis sit amet malesuada ut malesuada non ligu…</p>
                            <p className="blog_date">JUL 16, 2020</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection