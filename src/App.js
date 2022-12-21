import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GeneralFootCare from "./components/GeneralFootCare";
import InGrowingToenails from "./components/InGrowingToenails";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Row from "react-bootstrap/Row";
import { Route, Routes } from "react-router-dom";
import SpecialConditions from "./components/SpecialConditions";

function App() {
  return (
    <div className='d-flex flex-column justify-between h-screen'>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/services/general-foot-care'
          element={<GeneralFootCare />}
        />
        <Route
          path='/services/in-growing-toenails'
          element={<InGrowingToenails />}
        />
        <Route
          path='/services/special-conditions'
          element={<SpecialConditions />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
