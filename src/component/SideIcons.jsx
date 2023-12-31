import React from 'react';

export default function SideIcons() {
    return (
        <div className="icon-bar">
            {/* <span className="fa fa-phone"></span> */}
            <a href="https://www.facebook.com/webuniversalsindia" target='_blank' className="facebook">
            <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/webuniversals" target='_blank' className="twitter">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/accounts/login/" target='_blank' className="intragram">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/web-universals" target='_blank'  className="linkedin">
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    )
}