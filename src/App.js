import logo from "./logo.svg";
import "./App.css";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import ResultPanel from "./components/ResultPanel/ResultPanel";
import { Container, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/skill-tracker-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Skill Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="col-sm-12 px-3 App">
        <SearchPanel></SearchPanel>
        <ResultPanel></ResultPanel>
      </div>
    </>
  );
}

export default App;
