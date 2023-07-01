import  React from 'react';

export default function SectionOne(){
    return(
        <>
           <main className='sectionOne'>
            <div className="info-section">
                <div className="info">
                    <h5 >Custom web development and SEO</h5>
                    <p>We provide flexible and versatile web development services that are based upon our client’s preferences integrated with Search Engine Optimization.</p>
                </div>

                <div className="info">
                    <h5 >Captivating designs</h5>
                    <p>Along with timely delivery and reasonable prices, we create beautiful, responsive websites that have an orchestrated layout and are incredibly smooth. </p>
                </div>

                <div className="info">
                    <h5 >Years of experience</h5>
                    <p >We deploy our years of experience to provide you websites and applications that speak volumes about your brand value. </p>
                </div>
            </div>

            <div >
                <img className="sectionOne-img" alt="" src="https://webuniversals.co.in/website-design-offer/assets/demo-data/home-page.png"/>
            </div>    
            </main>
            </>
    )
}