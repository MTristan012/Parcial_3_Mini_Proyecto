import { GenerateCards } from "./components/GenerateCards";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/Collapse";
import LocationList from "./components/LocationList";
import GuestsList from "./components/GuestsList";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [openLocation, setOpenLocation] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const totalGuests = child + adult;
  const city = ""

  return (
    <>
      <header>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src="../../static/logo.png" alt="Logo" />
            </Navbar.Brand>
            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="add Location"
                  className="me-0"
                  aria-label="Search"
                  onClick={handleShow}
                  value={city ? city : "add Location"}
                />
                <Form.Control
                  type="search"
                  placeholder="add Guest"
                  className="me-0"
                  aria-label="Search"
                  onClick={handleShow}
                  value={totalGuests ? totalGuests + " Guests" : "Add Guests"}
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
              </InputGroup>
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="top"
                className="h-75"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Edit your search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Row className="g-2 col order-md-first">
                    <Col md>
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="Location"
                        onClick={() => setOpenLocation(!openLocation)}
                        aria-controls="example-fade-text"
                        aria-expanded={openLocation}
                      >
                        <Form.Control
                          type="text"
                          placeholder="add Location"
                          value={city ? city : "add Location"}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md>
                      <FloatingLabel
                        controlId="totalGuests"
                        label="Guests"
                        onClick={() => setOpenGuests(!openGuests)}
                        aria-controls="example-fade-text"
                        aria-expanded={openGuests}
                      >
                        <Form.Control
                          placeholder="Add guests"
                          readOnly
                          value={
                            totalGuests ? totalGuests + " Guests" : "add Guests"
                          }
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="g-2">
                    <Col md>
                      <Collapse in={openLocation}>
                        <div id="Location">
                          <LocationList />
                        </div>
                      </Collapse>
                    </Col>
                    <Col md>
                      <Collapse in={openGuests}>
                        <div id="Guests">
                          <GuestsList
                            child={child}
                            adult={adult}
                            setChild={setChild}
                            setAdult={setAdult}
                          />
                        </div>
                      </Collapse>
                    </Col>
                  </Row>
                  <Button variant="danger" type="submit" value="Submit">
                    <span className="align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </span>
                    <span className="ms-2">Search</span>
                  </Button>
                </Offcanvas.Body>
              </Offcanvas>
            </Form>
          </Container>
        </Navbar>
      </header>
      <main>
        <section className="d-flex mt-3 mx-3 justify-content-between">
          <h1 className="fs-3">
            Stays in
            <span id="place"> Finland</span>
          </h1>
          <p>
            <span id="stays"></span> Stays
          </p>
        </section>
        <br />
        <section className="mx-3">
          <GenerateCards totalGuests={totalGuests} />
        </section>
      </main>
    </>
  );
}

export default App;
