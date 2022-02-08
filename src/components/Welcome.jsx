import { Jumbotron, Container, h1, p } from "react-bootstrap";

const Welcome = (props) => (

<Jumbotron fluid>
  <Container>
    <h1>{props.branding}</h1>
    <p>
   {props.branding2}
    </p>
  </Container>
</Jumbotron>

)

export default Welcome