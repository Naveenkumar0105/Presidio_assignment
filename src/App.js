import Main from "./components/Main";
import Navbar from "./components/Navbar"
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Afooter from "./components/Afooter";
import PhotoSlideShow from "./components/PhotoSlideShow";
import Signup from "./components/Signup";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Menu/>
      <Projects/>
      <Signup></Signup>
      <PhotoSlideShow/>
      <Afooter/>
      <Footer/>
    </div>
  );
}

export default App;
