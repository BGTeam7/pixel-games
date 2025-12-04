import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import News from "./pages/news";
import Construction from './pages/construction';
import TersmOfUse from './pages/termsofuse';
import Privacy from './pages/privacy';

// import music from './assets/we'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/construction" element={<Construction/>}/>
            <Route path="/terms-of-use" element={<TersmOfUse/>}/>
            <Route path="/privacy" element={<Privacy />}/>
        </Routes>
        <Footer/>
      </Router>
      <audio id="audio" loop autoPlay> 
        <source src="website.mp3" type="audio/mpeg"/>
      </audio>
    </div>
  );
}

export default App;
