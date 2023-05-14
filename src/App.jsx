import { GenerateCards } from "./components/GenerateCards";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <section className="d-flex mt-3 mx-3 justify-content-between">
          <h1 className="fs-3">
            Stays in
            <span id="place"> Finland</span>
          </h1>
          <p>
            <span id="stays"></span> Stays
          </p>
        </section>
        <br />
        <section className="mx-3">
          <GenerateCards/>
        </section>
      </main>
    </>
  );
}

export default App
