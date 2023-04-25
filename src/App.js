import './App.css';
import Header from "./components/Header";
import {Person} from "./components/Person";
import {About} from "./components/About";
import {Skills} from "./components/Skills";
import {Portfolio} from "./components/Portfolio";
import {Certificates} from "./components/Certificates";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {BackToTopBtn} from "./components/BackToTopBtn";


function App() {
  return (
    <div>
      <Header/>
      <Person/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Certificates/>
      <Contact/>
      <Footer/>
      <BackToTopBtn/>
    </div>
  );
}

export default App;
