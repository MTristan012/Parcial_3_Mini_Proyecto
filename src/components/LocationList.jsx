import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function LocationList({setLocationValue}) {
  const [locations] = useState([
    { location: "Helsinki, Finland" },
    { location: "Turku, Finland" },
    { location: "Oulu, Finland" },
    { location: "Vaasa, Finland" },
  ]);

  return (
    <ListGroup className="mt-2">
      {locations.map((location, id) => {
        return (
          <ListGroup.Item
            key={id}
            className="border-0 border"
            onClick={(e) => setLocationValue(e.target.innerText)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </span>
            <span> {location.location}</span>
          </ListGroup.Item>
        );})}
    </ListGroup>
  );
}
