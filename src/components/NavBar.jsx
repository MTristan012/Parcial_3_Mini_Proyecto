import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import OffCanvas from "./OffCanvas";


export default function NavBar(logo) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="add Location"
            className="me-0"
            aria-label="Search"
            onClick={handleShow}
          />
          <Form.Control
            type="search"
            placeholder="add Guest"
            className="me-0"
            aria-label="Search"
            onClick={handleShow}
          />
          <Button variant="outline-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
              onClick={handleShow}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="top"
            className="h-75"
          >
            <OffCanvas />
          </Offcanvas>
        </Form>
      </Container>
    </Navbar>
  );
}
