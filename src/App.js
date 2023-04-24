import "./App.scss";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Employment from "./components/developmentHistory/Employment";
import Resume from "./components/developmentHistory/Resume";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import MyProjects from "./components/MyProjects";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <main>
      <Navigation />
      <Banner />
      <Intro />
      <hr />
      <Employment />
      <Resume />
      <Skills />
      <MyProjects />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
