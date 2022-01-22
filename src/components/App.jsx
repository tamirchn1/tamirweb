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
    <Music/>
    <WebTech/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
