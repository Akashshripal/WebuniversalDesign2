import React from 'react'

export default function Header(){
     return (
        <>
            <div className='header'>
                <h2>Website Design Experts</h2>
                    <form method='post'>
                        <p>
                        <strong>
                            Get Seamlessly & Fully Responsive Website Design & uner-friendly apps from web Universals.
                        </strong>
                        </p>
                        <p className='sub-heading'>Make first impressions last forever with award-winning Web Development Services
                        <br/>
                        from web Universals
                        </p>
                        <input type='text' placeholder='Full Name:' required/>
                        <br/>
                        <input type='email' placeholder='Email:' required/>
                        <br/>
                        <input type='phone' placeholder='Phone No:' required/>
                        <br/>
                        <input type='text' placeholder='Subject:' required/>
                        <br/>
                        <button className="btn">Submit now !</button>
                    </form>
               </div>
        </>
     )
}