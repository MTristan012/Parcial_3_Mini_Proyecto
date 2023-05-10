import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";
import { Stays } from "../data/stays";

export function GenerateCards() {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} xl={3} xxl={4} className="g-4">
        {Stays.map((stay, index) => (
          <Col
            key={index}
            className="d-flex align-items-center justify-content-center"
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
        ))}
      </Row>
    </Container>
  );
}
