import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Cards  from './Cards';


const CardComponent = () => {
  const[currentState,setCurrentState]=useState(false);
const changeHandler=()=>{
  
setCurrentState(!currentState);

};

  return (
    <div>     
      {currentState == false ? ( <Card style={{ width: '18rem', borderRadius: "10px", boxShadow: "0px 10px 30px -15px rgba(0, 0, 0, 0.3) ", paddingBottom: "18px" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted" style={{ paddingBottom: "20px", fontWeight: '1000', paddingTop: "10px" }}>Trails</Card.Subtitle>

          <Form.Group className="mb-3" >

            <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
              <option>Select Trail</option>
              <option>Select Trail </option>
              <option>Select Trail</option>

            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">

            <Form.Select style={{ backgroundColor: "#F0F4F8" }}>
              <option>Select Device</option>
              <option>Select Device </option>
              <option>Select Device</option>

            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="date" style={{ backgroundColor: "#F0F4F8" }} />

          </Form.Group>

          <Button variant="primary" onClick={changeHandler}>Track</Button>{' '}
        </Card.Body>
      </Card>) :(<Cards />)}
     </div>
  )
};
export default CardComponent;

