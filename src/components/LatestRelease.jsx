
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import books from '../data/history.json'


  const LatestRelease = () =>(
            <Row className='m-auto'>
                 { books.map((book) =>(
                <Col xs='12' sm='6' md='4' lg='2' key={book.asin}>
          
    <Card className='mb-3' style={{ width: '12rem' }}>
  <Card.Img variant="top" src={book.img} style={{height: '300px'}} />
  {/* <Card.Body>
    <Card.Title style={{
    width: '10rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
}}>{book.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{book.category}</ListGroupItem>
    <ListGroupItem style={{ fontWeight: 'bolder' }}>$ {book.price}</ListGroupItem>
  </ListGroup> */}
</Card>                     
</Col> 
 ))} 
</Row>
  )

export default LatestRelease