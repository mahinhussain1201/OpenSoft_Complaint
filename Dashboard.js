import React from 'react';
import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ComplaintList from './ComplaintList';
import FileComplaint from './FileComplaint';
// import Mess from './Mess';

const Dashboard = () => {
  return (
    <section id='dashboard'>
      {/* Navbar of Dashboard */}
      <Navbar expand="lg" className="bg-body-primary">
        <Container>
          <Navbar.Brand href="#home" className='dashboard-navbar'>Complaint Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='nav-link'>Home</Nav.Link>
              <Nav.Link href="#completed" className='nav-link'>Completed</Nav.Link>
              <Nav.Link href="#pending" className='nav-link'> Pending</Nav.Link>
              <Nav.Link href="#isuues" className='nav-link'>Issues</Nav.Link>
              <Nav.Link className='nav-link'><Link to ='/fileComplaint' >File Complaint</Link></Nav.Link>
              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item>Electrical</NavDropdown.Item>
                <NavDropdown.Item>Hygiene</NavDropdown.Item>
                <NavDropdown.Item>Internet</NavDropdown.Item>
                <NavDropdown.Item>Misc.</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item ><Link to ='/fileComplaint' >File Complaint</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ComplaintList />
      <FileComplaint />
    </section>
  );
}

export default Dashboard;
