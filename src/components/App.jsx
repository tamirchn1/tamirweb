import Navbar from "./Navbar"
import Footer from "./Footer"
import About from "./About";
import Music from "./Music";
import WebTech from "./WebTech";
import Contact from "./Contact";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <About/>
    <WebTech/>
    <Music/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
