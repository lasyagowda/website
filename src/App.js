import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";

import "./App.css";
import Body from "./component/Body";
import About from "./component/About";
import Skills from "./component/Skills";
import Home from "./component/Home";
import Project from "./component/Project";
import Contact from"./component/Contact";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
