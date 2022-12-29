import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
// import Routes from './components/router';
function App() {

  useEffect(() => {
    sessionStorage.setItem('isHome',true)
  }, [])
  
  return (
    <div className="App bg-gray-200">
<Header/>
<BrowserRouter>

<Routes>
    <Route exact path="/" element={<Hero />}/>
    <Route exact path="/login" element={<Login />}/>
        
      </Routes>
    </BrowserRouter>




          

    </div>
  );
}

export default App;
