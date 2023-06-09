import ListGroup from "react-bootstrap/ListGroup";


// eslint-disable-next-line react/prop-types
export default function LocationList({setCity}) {
  const Location = [
    "Helsinki, Finland",
    "Turku, Finland",
    "Vaasa, Finland",
    "Oulu, Finland",
  ];

  const handleLocation = (location) => {
    setCity(location);
    // Realiza otras acciones con el nombre de la ubicación seleccionada
  };

  return (
    <ListGroup className="mt-2">
      {Location.map((location, id) => (
        <ListGroup.Item
          key={id}
          className="border-0 border"
          onClick={() => handleLocation(location)}
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
          <span> {location}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
