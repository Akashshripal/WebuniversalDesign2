import React from 'react';
import TextCarousel from './TextCarousel';
export default function SectionEight() {


const carouselData = [
    {
      header: 'Omar Shariff',
      paragraph:'We were spending more on Google Adwords PPC, Web Universals supported us to Save More on our daily spend and their friendly team make sure we get more ROI, they are the Google Adwords PPC Experts. I recommend their PPC services.',
    },
    {
      header: 'Viraj',
      paragraph: 'We were not sure as to how do we go about selling our Artificial Jwellery Online &amp; had no idea which company to choose after going through many Ecommerce website design companies we found Web Universals have affordable shopping cart website design options and more importantly they are The Best Choice for the first timers.',
    },
    {
      header: 'Yunus Fazil',
      paragraph: 'I was looking for a Small Business Website and found Web Universals, the Team Really Helped me to get my business online within 5 working days as promised with complete Content Creation. I highly recommend Web Universals for all Small Business Website Needs.',
    },
    {
      header: 'Sateesh Selvam',
      paragraph: 'Web Universals assited me to get Home Appliance Repair Website for the Best Price, they have a very friendly team and vast knowledge on Website Design.',
    },
    {
      header: 'Srinidhi Marketing',
      paragraph: 'We are Happy To have Found Web Universals as our One-Stop solution for all our Web Design, SEO &amp; Social Media Marketing needs, they are reasonable and have customised package which has taken care of us to Save Money compared with other vendor we were with'
    }
    ];

    return (
        <>
 <section className='SectionEight'>
      <TextCarousel data={carouselData} />
           
    </section>
        </>
    )
}