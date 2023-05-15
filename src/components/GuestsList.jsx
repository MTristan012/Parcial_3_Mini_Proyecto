import Button from "react-bootstrap/Button";

// eslint-disable-next-line react/prop-types
export default function GuestsList({ adultCount, childrenCount, incrementDecrement }) {
  const handleClick = (e) => {
    e.preventDefault();
    incrementDecrement(e);
  };
  return (
    <>
      <br />
      <div>
        <h6>Adults</h6>
        <h6 style={{ color: "#cecece" }} className="mb-3">
          Age 13 or above
        </h6>
        <div>
          <Button variant="outline-dark" onClick={(e) => handleClick(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
              />
            </svg>
          </Button>
          <span>{adultCount}</span>
          <Button variant="outline-dark" onClick={(e) => handleClick(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </Button>
        </div>
      </div>
      <br />
      <div>
        <h6>Children</h6>
        <h6 style={{ color: "#cecece" }} className="mb-3">
          Age 2 - 12
        </h6>
        <div>
          <Button
            variant="outline-dark"
            onClick={(e) => handleClick(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
              />
            </svg>
          </Button>
          <span>{childrenCount}</span>
          <Button
            variant="outline-dark"
            onClick={e => handleClick(e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}
