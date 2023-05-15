import { Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Card from "./Cards";
import { Stays } from "../data/stays";

export function GenerateCards() {

  return (
    <Stack gap={2}>
      <Row xs={1} sm={1} md={2} lg={3} className="g-4">
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
    </Stack>
  );
}
