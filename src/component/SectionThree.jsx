import  React from 'react';

export default function SectionThree(){
    return(
        <>
          <section className="SectionThree">
            <div className="SectionThree-info">
                <h5>Take your website design to the next level for driving sales</h5>
                <p>Get a uniquely designed website to match your unique brand. We create websites that stand apart from the crowd with their unbelievably smart design and optimized interfaces. At Web Universals we make your dream website come to life through:</p>
                <ul className="SectionThree-list">
                    <li><span></span><p>Passionate and creative ideas</p></li>
                    <li><span></span><p>The expertise of our complete in-house development team</p></li>
                    <li><span></span><p>More than a decade of experience</p></li>
                    <li><span></span><p>Versatile services ranging from SEO to other digital marketing endeavours</p></li>
                </ul>
            </div>
            <div>
                <img className="SectionThree-img" src="./src/assets/img/SectionThree.png" alt="/"/>
            </div>
</section>
        </>
    )
}