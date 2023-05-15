import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useContext, useEffect } from "react";
import LocationList from "./LocationList";
import GuestsList from "./GuestsList";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../context/GlobalContext";
import { HeaderContext } from "../context/HeaderContext";

export default function OffCanvas() {

  const { filterContent } = useContext(GlobalContext);
  const {
    clicked,
    whatClicked,
    locationValue,
    guestValue,
    handleClick,
    setLocationValue,
    setGuestValue,
    setWhatClicked,
    setClicked,
  } = useContext(HeaderContext);

  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  const incrementDecrement = (e) => {
    switch (e.target.ariaLabel) {
      case "adult plus button":
        setAdultCount(adultCount + 1);
        break;
      case "adult minus button":
        if (adultCount > 0) setAdultCount(adultCount - 1);
        break;
      case "children plus button":
        setChildrenCount(childrenCount + 1);
        break;
      case "children minus button":
        if (childrenCount > 0) setChildrenCount(childrenCount - 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (adultCount > 0 || childrenCount > 0) {
      setGuestValue(adultCount + childrenCount + " guests");
    } else {
      setGuestValue("");
    }
  }, [setGuestValue, adultCount, childrenCount]);

  const handleSubmit = (e) => {
    if (locationValue) {
      setClicked(!clicked);
      filterContent(locationValue, guestValue);
    }
    e.preventDefault();
  };

  return (
    <>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Edit your search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row className="g-2 col order-md-first">
          <Col md>
            <FloatingLabel
              location
              whatClicked={whatClicked}
              htmlFor="location"
            >
              <Form.Control
                type="text"
                name="location"
                value={locationValue}
                placeholder="Search Location"
                autoComplete="off"
                onClick={(e) => setWhatClicked(e.target.name)}
                readOnly
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel guest whatClicked={whatClicked} htmlFor="guests">
              <Form.Control
                type="text"
                name="guests"
                value={guestValue}
                placeholder="Add Guest"
                autoComplete="off"
                onClick={(e) => setWhatClicked(e.target.name)}
                readOnly
              />
            </FloatingLabel>
          </Col>
        </Row>
        {whatClicked === "location" && (
          <LocationList setLocationValue={setLocationValue} />
        )}
        {whatClicked === "guests" && (
          <GuestsList
            adultCount={adultCount}
            childrenCount={childrenCount}
            incrementDecrement={incrementDecrement}
          />
        )}
        <Button
          variant="danger"
          type="submit"
          value="Submit"
          onSubmit={handleSubmit + handleClick}
        >
          <span className="align-items-center">
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
          <span className="ms-2">Search</span>
        </Button>
      </Offcanvas.Body>
    </>
  );
}
