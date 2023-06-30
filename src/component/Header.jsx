import React from 'react'

export default function Header(){
     return (
        <>
            <div className='header'>
                <div className='header-content'>
                <h2>Website Design Experts</h2>
                    <form className='header-form' method='post'>
                        <p className='sub-heading'>
                        <strong >
                            Get Seamlessly & Fully Responsive Website Design & uner-friendly apps from web Universals.
                        </strong>
                        </p>
                        <p className='sub-heading'>Make first impressions last forever with award-winning Web Development Services
                        <br/>
                        from web Universals
                        </p>
                        <input type='text' className="Input"placeholder='Full Name:' required/>
                        <br/>
                        <input type='email'className="Input" placeholder='Email:' required/>
                        <br/>
                        <input type='phone'className="Input" placeholder='Phone No:' required/>
                        <br/>
                        <input type='text' className="Input"placeholder='Subject:' required/>
                        <br/>
                        <button className="btn">Submit now !</button>
                    </form>
                </div>
               </div>
        </>
     )
}