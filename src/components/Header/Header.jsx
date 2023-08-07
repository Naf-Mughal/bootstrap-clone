/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from 'react'
import './Header.scss'
import Logo1 from '../../assets/logo-1.png'
function Header() {
    const [IsActive, setIsActive] = useState(true)
    function renderNav(){
        if(IsActive === false){
            setIsActive(true)
        }
        else setIsActive(false)
        }
    const handleResize = () => {
        if (window.innerWidth < 720) setIsActive(false)
        else setIsActive(true)
        }
    useEffect(() => {
            window.addEventListener("resize", handleResize)
          })
    return (
    <header>
        <div class="manu-logo-section ">
            <a className="burger-menu" onClick={renderNav}>&#9776;</a>
            <div class="logo-section align-self-center">
                <a class="navbar-brand align-middle" href="#">
                    <img src={Logo1} alt="logo"/>
                </a>
            </div>
            <nav id="myNav" className= 'nav' style={IsActive ? {display: "block"} : {display: "none"}}>
                <a className="closebtn" onClick={renderNav}>&times;</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="menu-hide" href="">menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Blog <i
                                class="fa-solid fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Post Format Video</a></li>
                            <li><a class="dropdown-item" href="#">Post Format Text Only</a></li>
                            <li><a class="dropdown-item" href="#">Post Format Gallary</a></li>
                            <li><a class="dropdown-item" href="#">Post Format Standard</a></li>
                            <li><a class="dropdown-item" href="#">Post Format Audio</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">post format <i
                                class="fa-solid fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Post Format Video</a></li>
                            <li><a class="dropdown-item" href="#">Post Format Text Only</a></li>
                            <li><a class="dropdown-item" href="#">Post Format Gallary</a></li>
                            <li><a class="dropdown-item" href="#">Post Format Standard</a></li>
                            <li><a class="dropdown-item" href="#">Post Format Audio</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">page <i
                                class="fa-solid fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">About Us</a></li>
                            <li><a class="dropdown-item" href="#">FAQs Page</a></li>
                            <li><a class="dropdown-item" href="#">Features</a></li>
                            <li><a class="dropdown-item" href="#">Gallery</a></li>
                            <li><a class="dropdown-item" href="#">Service</a></li>
                            <li><a class="dropdown-item" href="#">Page 404</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0);">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
        <form class="d-flex cart-icons align-self-center" role="search">
            <i class="fa-solid fa-magnifying-glass right_icon_top"></i>
            <i class="fa-solid fa-user right_icon_top"></i>
            <i class="fa-solid fa-cart-shopping right_icon_top"></i>
        </form>
    </header>
  )
}

export default Header