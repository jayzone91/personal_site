import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Startseite() {
  return (
    <Container>
      <h1>Johannes Kirchner</h1>
      <h2>Hobby Dev</h2>
      <p>
        Projekte:
        <ul>
          <li>
            <Link to="/tictactoe">Tic Tac Toe</Link>
          </li>
        </ul>
      </p>
    </Container>
  );
}
