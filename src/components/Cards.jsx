import Card from "react-bootstrap/Card";

export default function Cards(stay) {
  return (
    <>
      <Card
        className="border border-0 mt-4"
        style={{ width: "35rem" }}
      >
        <Card.Img
          className="rounded-4 object-fit-fill "
          style={{ height: "22rem" }}
          src={stay.photo}
          alt={stay.title}
          variant="top"
        />
        <Card.Body className="card-body justify-content-between lh-lg">
          <div className="d-flex justify-content-between">
            <div>
              {stay.superHost ? (
                <span
                  className="border border-light-subtle rounded-pill fw-semibold text-body-secondary p-1"
                  style={{ fontSize: "0.9rem", textAlign: "center" }}
                >
                  SUPER HOST
                </span>
              ) : (
                ""
              )}
              <span className="text-body-secondary p-2">
                {stay.superHost
                  ? `${stay.type} ${stay.beds ? ` . ${stay.beds} beds` : ""}`
                  : stay.type}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#dc3545"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
              <span className="mx-2">{stay.rating}</span>
            </div>
          </div>
          <div className="d-flex justify-content-start">
            <span className="fw-semibold">{stay.title}</span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
