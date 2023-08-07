import React from 'react'
import Video from '../../../assets/video.jpg'
function FourthSection() {
  return (
    <div className='section4'>
        <div className="container">
            <div className="row my_cus_row" style={{padding: "100px 0px"}}>
                <div className="col-xl-6 col-lg-4 col-12 btn-play">
                    <img src={Video} className="img-fluid" alt=""/>
                    <div className="play">
                        <div className="play-video"></div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-8 col-12 ps-xl-4 ps-5">
                    <div className="vid p-lg-0 p-md-5 p-0">
                        <p className="vid_text">Travel early and travel often. Live abroad, if you can. Understand
                            cultures other than your own. As your understanding of other cultures increases,
                            your understanding of yourself and your own culture will increase exponentially.</p>
                        <p className="vid_bottom_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourthSection