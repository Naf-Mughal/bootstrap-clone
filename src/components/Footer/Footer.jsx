import React from 'react'
import Logo2 from '../../assets/logo-2.jpg'
import Footer1 from '../../assets/footer1.jpg'
import Footer2 from '../../assets/footer2.jpg'
function Footer() {
  return (
    <footer class="section7">
        <div class="container-fluid p-0">
            <div class="footer_header">
                <div class="row">
                    <div class="col-md-2 col-12">
                        <img src={Footer2} alt=""/>
                    </div>
                    <div class="col-md-8 col-12 align-self-center">
                        <p class="news_latter">SUBSCRIBE OUR NEWS</p>
                        <p class="news_sub">Subscribe and receive our newsletters to follow the news about our fresh and
                            fantastic products</p>
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder="Enter your email"/>
                            <span class="input-group-btn">
                                <button class="btn" type="submit">Subscribe</button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-2 col-12">
                        <img src={Footer1} alt=""/>
                    </div>
                </div>
            </div>
            <div class="footer_mid pb-5">
                <div class="row">
                    <div class="col-md-3 col-12">
                        <img src={Logo2} alt=""/>
                        <p class="logofooter_desc">Lorem Ipsum has been the industrys standard my text ever when
                            annknown printer since the 1500s.</p>
                        <p class="follow_us">FOLLOW US</p>
                        <div class="my-3">
                            <i class="fa-brands fa-facebook-f footer_icon mx-1"></i>
                            <i class="fa-brands fa-twitter footer_icon mx-1"></i>
                            <i class="fa-brands fa-linkedin-in footer_icon mx-1"></i>
                            <i class="fa-solid fa-wifi footer_icon mx-1"></i>
                            <i class="fa-brands fa-youtube footer_icon mx-1"></i>
                        </div>
                    </div>
                    <div class="col-md-3 col-12">
                        <p class="follow_us">LINK</p>
                        <ul class="footer_ul">
                            <li class="link_li">About Us</li>
                            <li class="link_li">Delivery Information</li>
                            <li class="link_li">Privacy Policy</li>
                            <li class="link_li">Contact Us</li>
                            <li class="link_li">Special</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-12">
                        <p class="follow_us">CONTACT US</p>
                        <p>demo@demo.com</p>
                        <p>12, Lorem Ipsum Amet, Australiya 395</p>
                        <p>Call us : 0123-456-789</p>
                    </div>
                    <div class="col-md-3">
                        <p class="follow_us">CATEGORY</p>
                        <ul class="footer_ul">
                            <li class="link_li">Cryotronics</li>
                            <li class="link_li">Adventure</li>
                            <li class="link_li">Beaches</li>
                            <li class="link_li">Popular</li>
                            <li class="link_li">Audio</li>
                            <li class="link_li">Friendly</li>
                            <li class="link_li">Video</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="py-2">
                    <div class="row">
                        <div class="col-4 d-md-block d-none"></div>

                        <div class="col-md-4 col-12 align-self-center">
                            <div class="f_bottom_text text-center">
                                <p class="m-0" style={{color:"white", font_size: 13}}>Design By Nafeel</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-12 text-md-end  text-center pe-3 pt-md-0 pt-2">
                            <img class="f_bottom_img"
                                src="https://pixeltemplate.com/wordpress/cms/tourza/wp-content/themes/Tourza/images/webi/svg/maestro.svg"
                                alt=""/>
                            <img class="f_bottom_img"
                                src="https://pixeltemplate.com/wordpress/cms/tourza/wp-content/themes/Tourza/images/webi/svg/american-express.svg"
                                alt=""/>
                            <img class="f_bottom_img"
                                src="https://pixeltemplate.com/wordpress/cms/tourza/wp-content/themes/Tourza/images/webi/svg/paypal.svg"
                                alt=""/>
                            <img class="f_bottom_img"
                                src="https://pixeltemplate.com/wordpress/cms/tourza/wp-content/themes/Tourza/images/webi/svg/cash.svg"
                                alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer