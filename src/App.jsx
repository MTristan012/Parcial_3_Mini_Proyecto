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
import { Stack } from "react-bootstrap";
import Card from "./components/Cards";
import { Stays } from "./data/stays";
import Footer from "./components/Footer"

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [openLocation, setOpenLocation] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);
  const totalGuests = child + adult;
  const [city, setCity] = useState("");
  const [filteredStays, setFilteredStays] = useState(Stays);

  const handleFilter = () => {
    let filtered;

    if (city && !adult && !child) {
      
      filtered = Stays.filter(
        (stay) => stay.city == city.split(" ")[0].replace(/,$/, "")
      );
    } else if (!city && (adult || child)) {
      
      filtered = Stays.filter((stay) => stay.maxGuests >= adult + child);
    } else {
      
      filtered = Stays.filter(
        (stay) =>
          stay.city === city.split(" ")[0].replace(/,$/, "") &&
          stay.maxGuests >= adult + child
      );
    }

    setFilteredStays(filtered);
    handleClose();
  };

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
                  placeholder="add Location"
                  className="me-0"
                  aria-label="Search"
                  onClick={handleShow}
                  value={city ? city : "add Location"}
                  readOnly
                />
                <Form.Control
                  placeholder="add Guest"
                  className="me-0"
                  aria-label="Search"
                  onClick={handleShow}
                  value={totalGuests ? totalGuests + " Guests" : "Add Guests"}
                  readOnly
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
                        aria-controls="cityLocation"
                        aria-expanded={openLocation}
                      >
                        <Form.Control
                          placeholder="add Location"
                          value={city ? city : "add Location"}
                          readOnly
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
                          value={
                            totalGuests ? totalGuests + " Guests" : "add Guests"
                          }
                          readOnly
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="g-2">
                    <Col
                      md
                      className="d-flex justify-content-center justify-content-md-start"
                    >
                      <Collapse in={openLocation}>
                        <div id="Location">
                          <LocationList city={city} setCity={setCity} />
                        </div>
                      </Collapse>
                    </Col>
                    <Col
                      md
                      className="d-flex justify-content-center mb-3 justify-content-md-start"
                    >
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
                  <Row>
                    <Button
                      variant="danger"
                      type="submit"
                      value="Submit"
                      onClick={handleFilter}
                    >
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
                  </Row>
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
            <span id="place" className="mx-2">
              {city ? city.split(" ")[0].replace(/,$/, "") : "Finland"}
            </span>
          </h1>
          <p>
            <span id="stays">
              {filteredStays ? filteredStays.length + "+" : Stays.length + "+"}
            </span>{" "}
            Stays
          </p>
        </section>
        <br />
        <section className="mx-3">
          <Stack gap={2}>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
              {filteredStays.length > 0 ? (
                filteredStays.map((stay, index) => (
                  <Col
                    key={index}
                    className="d-flex align-items-start justify-content-center"
                  >
                    <Card
                      photo={stay.photo}
                      title={stay.title}
                      superHost={stay.superHost}
                      type={stay.type}
                      beds={stay.beds}
                      rating={stay.rating}
                    />
                  </Col>
                ))
              ) : (
                <p>
                  No hay alojamientos disponibles que coincidan con los
                  criterios de búsqueda.
                </p>
              )}
            </Row>
          </Stack>
        </section>
      </main>
      <footer className="text-center">
        <Footer />
      </footer>
    </>
  );
}

export default App;
