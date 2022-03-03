import "./App.css";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Hireme from "./components/hireme/Hireme";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Project from "./components/project/Project.jsx";
import Skills from "./components/skills/Skills";
import Stack from "./components/techstack/Stack";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Stack></Stack>
            {/* <Portfolio></Portfolio> */}
            <Project></Project>
            <Hireme></Hireme>
            <Footer></Footer>
        </div>
    );
}

export default App;
