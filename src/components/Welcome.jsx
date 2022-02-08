import { Jumbotron, Container, h1, p } from "react-bootstrap";

const Welcome = (props) => (

<Jumbotron fluid className="bg-info">
  <Container>
    <h1 className='text-white'>{props.branding}</h1>
    <p className='text-white'>
   {props.branding2}
    </p>
  </Container>
</Jumbotron>

)

export default Welcome