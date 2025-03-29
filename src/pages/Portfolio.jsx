import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Portfolio = () => {
    return (
        <main className="w-full bg-gray-100 text-gray-900 px-4">
            <div className="max-w-screen-xl mx-auto lg:pt-10">
                <Banner /><br/>
                <AboutMe /><br/>
                <Experience /><br/>
                <Skills /><br/>
                <Projects /><br/>
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
export default Portfolio;
