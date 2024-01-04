import { Container } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import Startseite from "./pages/Startseite";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

function App() {
  return (
    <>
      <Container fluid className="mb-5">
        <p>
          Links:
          <Link to="/" className="ms-3 me-3">
            Startseite
          </Link>
          <Link to="impressum/" className="ms-3 me-3">
            Impressum
          </Link>
          <Link to="datenschutz/">Datenschutz</Link>
        </p>
      </Container>
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
      <Container className="mt-5">
        <p>
          Externe Links:
          <a
            href="https://github.com/jayzone91"
            target="_blank"
            className="ms-3 me-3"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/j4yz0n31"
            target="_blank"
            className="ms-3 me-3"
            rel="noopener noreferrer"
          >
            Twitter / X
          </a>
          <a
            href="https://www.instagram.com/j4yz0n3/"
            target="_blank"
            className="ms-3 me-3"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.threads.net/@j4yz0n3"
            target="_blank"
            className="ms-3 me-3"
            rel="noopener noreferrer"
          >
            Threads
          </a>
          <a
            href="https://www.linkedin.com/in/johannes-kirchner-2ab357211/"
            target="_blank"
            className="ms-3 me-3"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </Container>
    </>
  );
}

export default App;
