import Navbar from "./Navbar";
import Body from "./Body";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";


function Home() {
    return(
        <>
        <Body/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    );
}
export default Home;