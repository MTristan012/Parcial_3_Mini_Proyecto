import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffCanvas() {

  return (
    <>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Edit your search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
    </>
  );
}
