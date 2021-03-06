import "./App.css";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import ResultPanel from "./components/ResultPanel/ResultPanel";
import { Container, Navbar } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  let [data, setData] = useState([]);

  let handleSearch = (searchResponse) => {
    setData([...searchResponse]);
  };

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
        <ToastContainer
          className="error-container"
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <SearchPanel search={handleSearch}></SearchPanel>
        <ResultPanel data={data}></ResultPanel>
      </div>
    </>
  );
}

export default App;
