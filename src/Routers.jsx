import Home from "pages/Home";
import { Container } from "react-bootstrap";
// import { Navbar, Footer } from "components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Router>
      <Container fluid className="px-0 poppins">
        {/* <Navbar /> */}
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Container>
    </Router>
  );
};

export default Routers;
