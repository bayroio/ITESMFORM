import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link } from 'react-router-dom';

// Import pages
import Home from "./pages/Home"
import CUP from "./pages/UniversalProfile/Create"
import RUP from "./pages/UniversalProfile/Read"
import UUP from "./pages/UniversalProfile/Update"
import CINFT from "./pages/NFT/CreateIndividual"
import CMNFT from "./pages/NFT/CreateMultiple"

function BasicExample() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">ITESM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Universal Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Universal_Profile/Create">Create</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Universal_Profile/Read">Read</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Universal_Profile/Update">Update</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="NFT" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/NFT/CreateIndividual">Create Individual</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/NFT/CreateMultiple">Create Multiple</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Universal_Profile/Create" element={<CUP />} />
          <Route path="/Universal_Profile/Read" element={<RUP />} />
          <Route path="/Universal_Profile/Update" element={<UUP />} />
          <Route path="/NFT/CreateIndividual" element={<CINFT />} />
          <Route path="/NFT/CreateMultiple" element={<CMNFT />} />
          <Route render={function () {
            return <p>Not found</p>
          }} />
        </Routes>
      </div>
    </div>
  );
}

export default BasicExample;

