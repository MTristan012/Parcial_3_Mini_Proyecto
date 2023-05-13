import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import LocationList from "./LocationList";
import GuestsList from "./GuestsList";
import Button from "react-bootstrap/Button";

export default function OffCanvas() {
  const [openLocation, setOpenLocation] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(0);

  return (
    <>
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
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Guests"
              onClick={() => setOpenGuests(!openGuests)}
              aria-controls="example-fade-text"
              aria-expanded={openGuests}
            >
              <Form.Control placeholder="Add guests" value={adult + child}/>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="g-2">
          <Col md>
            <Collapse in={openLocation}>
              <div id="example-fade-text">
                <LocationList />
              </div>
            </Collapse>
          </Col>
          <Col md>
            <Collapse in={openGuests}>
              <div id="example-fade-text">
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
    </>
  );
}
