import Offcanvas from "react-bootstrap/Offcanvas";
import { Container } from "react-bootstrap";

export default function OffCanvas() {

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Edit your search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container>
          <form className=" align-items-center div_0">
            <div className="col-md-12 div_1">
              <div
                className="btn form-floating border border-1 col-12 col-md-12 div_1_1"
                data-bs-toggle="collapse"
                href="#location"
                role="button"
                aria-expanded="false"
                aria-controls="location"
              >
                <p type="label" className="text-start m-0" htmlFor="">
                  Location
                </p>
                <input
                  className="border border-0 fs-6 justify-content-md-start"
                  value="Add Location"
                  id="offCanvasLocation"
                  disabled
                ></input>
              </div>
              <div
                className="btn form-floating rounded-sm-bottom border border-1 col-12 col-md-12 div_1_2"
                data-bs-toggle="collapse"
                href="#guests"
                role="button"
                aria-expanded="false"
                aria-controls="guests"
              >
                <p type="label" className="text-start m-0" htmlFor="">
                  Guests
                </p>
                <input
                  className="border border-0 fs-6"
                  value="Add Guests"
                  id="offCanvasGuests"
                  disabled
                ></input>
              </div>
            </div>
            <div className="row div_2">
              <div className="col p-2">
                <div className="collapse multi-collapse" id="location"></div>
              </div>
              <div className="col p-2">
                <div className="collapse multi-collapse" id="guests">
                  <div className="">
                    <p className="d-flex flex-column">
                      <span className="fw-semibold">Adults</span>
                      <span className="text-body-secondary">
                        Ages 13 or above
                      </span>
                    </p>
                    <div className="grid d-flex align-items-center">
                      <span
                        className="minus border col-1 d-flex justify-content-center"
                        role="button"
                        id="adultMinus"
                      >
                        -
                      </span>
                      <input
                        className="border border-0 text-center col-2"
                        placeholder="0"
                        type="text"
                        value="0"
                        id="adults"
                      />
                      <span
                        className="plus border col-1 d-flex justify-content-center"
                        role="button"
                        id="adultPlus"
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="d-flex flex-column">
                      <span className="fw-semibold">Children</span>
                      <span className="text-body-secondary">Ages 2-12</span>
                    </p>
                    <div className="grid d-flex align-items-center">
                      <span
                        className="minus border col-1 d-flex justify-content-center"
                        role="button"
                        id="childMinus"
                      >
                        -
                      </span>
                      <input
                        className="border border-0 text-center col-2"
                        placeholder="0"
                        type="text"
                        value="0"
                        id="children"
                      />
                      <span
                        className="plus border col-1 d-flex justify-content-center"
                        role="button"
                        id="childPlus"
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center col-md-12 p-md-1 div_3">
              <a
                className="btn btn-danger"
                href="#"
                type="submit"
                id="search"
                data-bs-toggle="collapse"
                data-bs-target=".multi-collapse"
                aria-expanded="false"
                aria-controls="location guests"
                aria-label="Close"
              >
                <span className="material-symbols-outlined pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <span>Search</span>
              </a>
            </div>
          </form>
        </Container>
      </Offcanvas.Body>
    </>
  );
}
