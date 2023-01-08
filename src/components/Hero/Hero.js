import React from 'react';
import Slider from './Slider';
import Container from 'react-bootstrap/esm/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contact from '../Contact us/Contact us';
import Courses from '../Courses/Courses';
import './Hero.css'
export default function Hero() {
  return (
    <section>
{/* slider start */}
    <div>
        <Slider/>
    </div>
{/* slider end */}

{/* hero start */}
    <div>
      <Container>

      
    <section class="text-gray-600 body-font px-6 card m-16 filter drop-shadow-md md:drop-shadow-xl hero-card">
  <div class=" mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div class="lg:flex-grow lg:w-6/12 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 py-2 px-6  rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
      <img class="object-cover w-full object-center rounded" alt="hero" height="200px" src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2FStudents%20watching%20webinar%20on%20computer.jpg?alt=media&token=2cd34a54-a18e-4444-8558-b35d923bf540"/>
    </div>
  </div>
</section>
</Container>

      <Courses/>
      <Contact/>
      <Footer/>
    </div>
    {/* hero end */}
    </section>
  )
}
