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


function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/conspiracy" element={<Conspiracy />}/>
        </Routes>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
