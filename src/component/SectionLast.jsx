import  React, { useState } from 'react';

export default function SectionLast(){
      const [Showform , setShowform] = useState(false);
      const [afterSubmit , SetAfterSubmit] = useState(false);

     function handleShowform(){
         setShowform(true)
     }
     function handleCloseform(){
        setShowform(false)
     }
     function handleSubmit(){ 
         SetAfterSubmit(true)
         setShowform(false)

     }
     function handleAppciation(){
        SetAfterSubmit(false)
     }
    return(
        <>
       <section className='SectionLast'> 
      
        <h3>We are Web Universals</h3>
        <p>
        <strong>The team that envisions the digital version of your brand as a stunning piece of art!</strong>
        </p>
        <p>At Web Universals we are the powerhouse of brainstorming ideas that are developed with the aim of revolutionizing the digital sphere. With commitment to excellence and inspiration derived from the best industry trends, our team of in-house developers strive to bring a ripple in the ocean of business ecosystems with a robustly developed program.</p>
        <p><strong>Come join hands, and our developers will help you harness the real prowess of digital media! </strong></p>
        <a className="btn" onClick={handleShowform}>Get a Call Back !</a>
       </section>
       {Showform && (
    
    <form className='Form' >
               <h1>Get a call back</h1>
           
          
                  <input type="text" placeholder="Full Name" name="name"  />
             
                
                  <input type="text" placeholder="Enter Email" name="email" />
             
               
                  <input type="text" placeholder="Phone Number" name="phone"  />
             
                
                  <select className="form-container" >
                      <option> Select Your Services</option>
                      <option>Website design</option>
                      <option>Wordpress Website</option>
                      <option>Custom CMS Website</option>
                      <option>E-Commerce Website</option>
                      <option>Web Development</option>
                      <option>Searh Engine Optimization</option>
                      <option>Social Media Marketing</option>
                      <option>Online Marketing</option>
                      <option>Mobile Marketing</option>
                      <option>Content Writing</option>
                      <option>Logo Design</option>
                  </select>
                   <br/>
                   <br/>
                  <button type="button" className="butn" onClick={handleSubmit}>Submit</button>
                  <button type="button" className="butn btn-cancel" onClick={handleCloseform}>Close</button>  
  </form>
       ) }
       {afterSubmit && (
        <div className='submit'>
        <h1>Thankyou We will call you soon</h1>
        <button className='btn' onClick={handleAppciation}>Close</button>
        </div>
       )}
        </>
    )
}