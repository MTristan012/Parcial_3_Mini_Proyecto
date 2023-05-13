import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import LocationList from "./LocationList";
import GuestsList from "./GuestsList"

export default function OffCanvas() {
  const [openLocation, setOpenLocation] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Edit your search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row className="g-2">
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
              <Form.Control type="email" placeholder="name@example.com" />
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
                <GuestsList/>
              </div>
            </Collapse>
          </Col>
        </Row>
      </Offcanvas.Body>
    </>
  );
}
