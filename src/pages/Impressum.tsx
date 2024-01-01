import { Container } from "react-bootstrap";

export default function Impressum() {
  return (
    <Container>
      <h1>Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Johannes Kirchner
        <br />
        Rote Breite Str. 30a
        <br />
        34246 Vellmar
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: -<br />
        Telefax: -<br />
        E-Mail: hi at johanneskirchner dot net;
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
      </p>
    </Container>
  );
}
