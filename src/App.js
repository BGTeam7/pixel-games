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
import Construction from './pages/construction';
import TersmOfUse from './pages/termsofuse';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/construction" element={<Construction />}/>
            <Route path="/terms-of-use" element={<TersmOfUse />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
