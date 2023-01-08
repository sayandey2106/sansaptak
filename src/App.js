import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact us/Contact us';
import Footer from './components/Footer/Footer';
// import Routes from './components/router';
function App() {

  useEffect(() => {
    sessionStorage.setItem('isHome',true)
  }, [])
  
  return (
    <div className="App bg-slate-200">
<BrowserRouter>

<Header/>
{/* <Contact/> */}
<Routes>
    <Route exact path="/" element={<Hero />}/>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/courses" element={<Courses />}/>
    <Route exact path="/contact" element={<Contact />}/>      
      </Routes>
    </BrowserRouter>




          

    </div>
  );
}

export default App;
