import logo from './logo.svg';
import './App.css';
import React from "react";
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
import Conspiracy from './pages/conspiracy/conspiracy';
import Construction from './pages/construction';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/conspiracy" element={<Conspiracy />}/>
            <Route path="/construction" element={<Construction />}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
