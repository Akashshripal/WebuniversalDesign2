import React from 'react'
// import SideIcons from './SideIcons'

export default function Navbar(props){
    return(
        <>
        <nav className='navbar'> 
            <a className ='logo'>
            <img src='./src/assets/img/logo-animated.gif' alt="web-universal logo" width="250px" height ="60px" />
            </a>
            <div id="navbar">
            {/* <a href="#" className="nav-triger"><span className="fa fa-navicon"></span></a> */}
            <ul className="nav-ul">
            <li><a href="tel:9008404587"><span className="fa fa-phone"></span>900 840 4587</a></li>
            <li><a href="mailto:info@webuniversals.co.in"><span className="fa fa-envelope"></span>info@webuniversals.co.in</a></li>
            <li><a className="btn" onClick={props.handleform}>Get a Call Back !</a></li>
            </ul>
            </div>
        </nav>
        </>
    )
}