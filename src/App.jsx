import { GlobalContext } from "./context/GlobalContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Stays } from "./data/Stays";
import { useContext } from "react";
import { Stack } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Card from "./components/Cards";

function App() {
  const { contents, setContents } = useContext(GlobalContext);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="d-flex mt-3 mx-3 justify-content-between">
          <h1 className="fs-3">
            Stays in
            <span id="place"> Finland</span>
          </h1>
          <p>
            {contents.length > 12 ? "12+ stays" : contents.length + " stays"}
          </p>
        </section>
        <br />
        <section className="mx-3">
          <Stack>
            <Row>
              {contents.length ? (
                contents.map((content, index) => {
                  return (
                    <Col
                      key={index}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Card
                        photo={content.photo}
                        title={content.title}
                        superHost={content.superHost}
                        type={content.type}
                        beds={content.beds}
                        rating={content.rating}
                      />
                    </Col>
                  );
                })
              ) : (
                <div>
                  <p>
                    Please try again, by{" "}
                    <strong
                      style={{ cursor: "pointer" }}
                      onClick={() => setContents([...Stays])}
                    >
                      clicking here
                    </strong>
                  </p>
                </div>
              )}
            </Row>
          </Stack>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App
