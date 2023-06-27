import { useState } from 'react'
import Navbar from './component/Navbar';
import Header  from './component/Header';
import Services from './component/Services';
import SectionOne from './component/SectionOne';
import SectionTwo from './component/SectionTwo';
import SectionThree from './component/SectionThree';
import SectionFour from './component/SectionFour';
import SectionFive from './component/SectionFive';
import SectionSix from './component/SectionSix';
import SectionSeven from './component/SectionSeven';
import SectionEight from './component/SectionEight';
import SectionLast from './component/SectionLast';
import Footer from './component/Footer';
import './App.css'
                                                                                             
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <Services/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <SectionSeven/>
    <SectionEight/>
    <SectionLast/>
    <Footer/>
    </>
  )
}

export default App
