import Hero from "../Hero/Hero";
import AboutMe from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import NavigationBar from "../../components/Navbar/Navbar";


function Home (){
    return(
        <>
       <NavigationBar/>
        <Hero/>
        <AboutMe/>
        <Experience/>
        <Project/>
        <Contact/>
        </>
    )
};
export default Home;
