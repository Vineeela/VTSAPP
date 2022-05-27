import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import ReportCards from './ReportCards';
import Cardss from './ReportCards';
import ReportTrack from './ReportTrack';



const VehicleTab = () => {
    const [currentState, setCurrentState] = useState(false);
    const changeHandler = () => {

        setCurrentState(!currentState);

    };

    return (
        <div>
            {currentState == false ? (<Card style={{ width: '18rem', borderRadius: "10px", boxShadow: "0px 10px 30px -15px rgba(0, 0, 0, 0.3) " }}>

            
                    <Card.Subtitle className="mb-2 text-muted" style={{ paddingBottom: "20px", fontWeight: '1000', paddingTop: "10px" }}>Reports</Card.Subtitle>

                    <Form.Group className="mb-3" >

                        <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
                            <option>Trip Summary Report</option>
                            <option>Trip Summary Report </option>
                            <option>Trip Summary Report</option>
                        </Form.Select>

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="date" style={{ backgroundColor: "#F0F4F8" }} />

                    </Form.Group>


                    <Form.Select style={{ backgroundColor: "#F0F4F8" }}>
                        <option>Select Vehicle</option>
                        <option>Select Vehicle </option>
                        <option>Select Vehicle</option>

                    </Form.Select>
                    <br />

                    <Button variant="primary" onClick={changeHandler}>Show</Button>{' '}
                
            </Card>) : (<ReportTrack />)}

        </div>
    )
};
export default VehicleTab;

