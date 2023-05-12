import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Fade from "react-bootstrap/Fade";


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
        <Fade in={openLocation}>
          <div id="example-fade-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Fade>
        <Fade in={openGuests}>
          <div id="example-fade-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Fade>
      </Offcanvas.Body>
    </>
  );
}
