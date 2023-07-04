import  React, { useState } from 'react';
// import PopUpForm from './PopUpForm';

export default function SectionLast(props){
      
    return(
        <>
       <section className='SectionLast'> 
      
        <h3>We are Web Universals</h3>
        <p>
        <strong>The team that envisions the digital version of your brand as a stunning piece of art!</strong>
        </p>
        <p>At Web Universals we are the powerhouse of brainstorming ideas that are developed with the aim of revolutionizing the digital sphere. With commitment to excellence and inspiration derived from the best industry trends, our team of in-house developers strive to bring a ripple in the ocean of business ecosystems with a robustly developed program.</p>
        <p><strong>Come join hands, and our developers will help you harness the real prowess of digital media! </strong></p>
        <a className="btn" onClick={props.handleform}>Get a Call Back !</a>
       </section>
        </>
 
 )
}