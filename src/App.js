import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import GeneralFootCare from "./components/GeneralFootCare";
import InGrowingToenails from "./components/InGrowingToenails";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Container className='w-75'>
        <Row>
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
          </Routes>
        </Row>
      </Container>
    </>
  );
}

export default App;
