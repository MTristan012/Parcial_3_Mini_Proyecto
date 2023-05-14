import Button from "react-bootstrap/Button";

// eslint-disable-next-line react/prop-types
export default function GuestsList({child, adult, setChild, setAdult}) {

  function incrementAdult() {
    if (child < 10 - adult) {
      setAdult(adult + 1);
    }
  }

  function decrementAdult() {
    setAdult(adult - 1);
  }

  function incrementChild() {
    if (adult < 10 - child) {
      setChild(child + 1);
    }
  }

  function decrementChild() {
    setChild(child - 1);
  }

  return (
    <>
      <br />
      <div>
        <h6>Adults</h6>
        <h6 style={{ color: "#cecece" }} className="mb-3">
          Age 13 or above
        </h6>
        <div>
          <Button
            variant="outline-dark"
            onClick={decrementAdult}
            disabled={adult <= 0}
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
          <span>{adult}</span>
          <Button
            variant="outline-dark"
            onClick={incrementAdult}
            disabled={adult >= 10}
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
      <br />
      <div>
        <h6>Children</h6>
        <h6 style={{ color: "#cecece" }} className="mb-3">
          Age 2 - 12
        </h6>
        <div>
          <Button
            variant="outline-dark"
            onClick={decrementChild}
            disabled={child <= 0}
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
          <span>{child}</span>
          <Button
            variant="outline-dark"
            onClick={incrementChild}
            disabled={child >= 10}
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
