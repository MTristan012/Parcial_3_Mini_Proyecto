import { Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Card from "./Cards";
import { Stays } from "../data/stays";

export function GenerateCards(city,adult,child) {
  console.log(city)
  console.log(adult);
  console.log(child);

   const filteredStays = Stays.filter((stay) => {
     return stay.city === city && stay.maxGuests >= adult + child;
   });

  return (
    <Stack gap={2}>
      <Row xs={1} sm={1} md={2} lg={3} className="g-4">
        {filteredStays.map((stay, index) => (
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
