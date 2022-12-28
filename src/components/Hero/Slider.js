import React from 'react'
import HeroSlider, {Slide} from "hero-slider"
import './Hero.css'
export default function Slider() {
    const img1="https://www.pw.live/version2/images/web_1668488317Web%20Banner_UPSC-01.jpg";
    const img2="https://www.pw.live/version2/images/web_1668488406Web%20Banner_CTET-01.jpg";
    const img3="https://www.pw.live/version2/images/web_1671456992Banking_Web_Banner.jpg";
  return (
    <div>
  {/* <AwesomeSlider animation="cubeAnimation">
    <div data-src="https://images.livemint.com/img/2021/09/06/1600x900/BYJU's_1617611925125_1630937205472.jpg" />
    <div data-src="https://images.moneycontrol.com/static-mcnews/2019/06/Byjus.jpg?impolicy=website&width=770&height=431" />
    <div data-src="https://deshicompanies.com/wp-content/uploads/2020/10/BYJUs.jpg" />
  </AwesomeSlider> */}

<HeroSlider
    slidingAnimation="left to right"
    orientation="horizontal"
    initialSlide={1}
    autoplay="true"
    autoplayDuration="2000"
    style={{
        backgroundColor:"rgba(0,0,0,0)"
    }}
    settings={{
        slideDuration:250,
        slideDelay:100,
        shouldAutoplay:true,
        shouldDisplayButtons:true,
        autoplayDuration:2000,
        
        // height:"70vh"
    }}
    // height="70vh"
>
    <Slide
     className='img-fluid'
    background={{
        backgroundImageSrc:img1,
        backgroundAttachment:"fixed",
        height:"70vh"
    }}/>
        <Slide
        className='img-fluid'
    background={{
        backgroundImageSrc:img2 ,
        backgroundAttachment:"fixed",
        height:"70vh"
    }}/>
        <Slide
         className='img-fluid'
    background={{
        backgroundImageSrc:img3,
        backgroundAttachment:"fixed",
        height:"70vh"
    }}
    
   />
     
</HeroSlider>

    </div>
  )
}
