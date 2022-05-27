import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import ReportCard from './ReportCard';


const GroupTab = () => {
  const [currentState, setCurrentState] = useState(false);
  const changeHandler = () => {

    setCurrentState(!currentState);

  };

  return (
    <div>
      {currentState == false ? (<Card style={{ width: '18rem', borderRadius: "10px", boxShadow: "0px 10px 30px -15px rgba(0, 0, 0, 0.3) ", paddingBottom: "18px" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted" style={{ paddingBottom: "20px", fontWeight: '1000', paddingTop: "10px" }}>Report</Card.Subtitle>

          <Form.Group className="mb-3" >

            <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
              <option>Speed</option>
              <option>Speed </option>
              <option>Speed</option>

            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">

            <Form.Select style={{ backgroundColor: "#F0F4F8 " }}>
              <option>Select Group</option>
              <option>Select Group </option>
              <option>Select Group</option>

            </Form.Select>

            
          </Form.Group>
          <Form.Group className="mb-3">

<Form.Select style={{ backgroundColor: "#F0F4F8 " }}>
  <option>Select Group</option>
  <option>Select Group </option>
  <option>Select Group</option>

</Form.Select>


</Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="date" style={{ backgroundColor: "#F0F4F8" }} />

          </Form.Group>

          <Button variant="primary" onClick={changeHandler}>Track</Button>{' '}
        </Card.Body>
      </Card>) : (<ReportCard />)}
    </div>
  )
};
export default GroupTab;

