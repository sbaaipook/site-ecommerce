import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import "./Product.css"
let listProduct = [];

const Product =(props)=>{
    return (
    <Card style={{ width: '15rem',height:'40rem',borderRaduis: "10px" }} className="m-1"> 
      <Card.Img variant="top" src={props.src} className="p-2 img"/>
      <Card.Body>
        <Card.Title className='fn-1'>{props.title}</Card.Title>
        <Card.Text className="fn">
          {props.text}
        </Card.Text>
        <Card.Text className='text-info'>
        <Row>
          <Col>{props.price}Dh</Col>
          <Col></Col>
          <Col style={{color:"orange"}}>{props.rate}</Col>
        </Row>
        </Card.Text>
        <Card.Text className='rounded p-2 bg-dark text-light'>
          Total : {props.count}
        </Card.Text>
        <input type="hidden" value={props.inpVal}/>
        <Button variant="primary" onClick={props.onclick}>Acheter</Button>
      </Card.Body>
    </Card>
    );
}
export {listProduct};
export default Product