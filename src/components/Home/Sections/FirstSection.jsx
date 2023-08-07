import React from 'react'
import Banr1 from '../../../assets/banr1.jpg'
import Banr2 from '../../../assets/banr2.jpg'
import Banr3 from '../../../assets/banr3.jpg'
import Banr4 from '../../../assets/banr4.jpg'
function FirstSection() {
  return (
    <div className="section1">
        <div className="container">
            <div className="row mt-2 mb-5">
                <div className="col-md-4 col-12 sec1_padd">
                    <div className="over_lay_img" style={{overflow: "hidden"}}>
                        <div className="hover01">
                            <img src={Banr3} alt=""/>
                            <div className="sec_1_price">
                                <p>Pakistan Tours</p>
                                <p className="price_sec_1">From $600</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 ">
                    <div className="row">
                        <div className="col-md-12 mb-md-4 mb-0 col-12 sec1_padd_1">
                            <div className="over_lay_img" style={{overflow: "hidden"}}>
                                <div className="hover01">
                                    <img className="w-100" src={Banr1} alt=""/>
                                    <div className="sec_1_price">
                                        <p>Pakistan Tours</p>
                                        <p className="price_sec_1">From $600</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-12 sec1_padd_1">
                            <div className="over_lay_img" style={{overflow: "hidden"}}>
                                <div className="hover01">
                                    <img className="w-100" src={Banr2} alt=""/>
                                    <div className="sec_1_price">
                                        <p>Pakistan Tours</p>
                                        <p className="price_sec_1">From $600</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 sec1_padd">
                    <div className="over_lay_img" style={{overflow: "hidden"}}>
                        <div className="hover01">
                            <img src={Banr4} alt=""/>
                            <div className="sec_1_price">
                                <p>Pakistan Tours</p>
                                <p className="price_sec_1">From $600</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstSection