import React, { useState } from 'react';
import { Button, Card, Form, FormControl, Modal, Table } from "react-bootstrap";
import { IoIosArrowUp } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";


const Schedule = () => {
    const [currentState, setCurrentState] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const changeHandler = () => {

        setCurrentState(!currentState);

    };
    return (

        <div>
            <div style={{ display: 'flex' }} >
                <Form style={{ fontSize: '20px', display: 'flex', height: '40px' }}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        style={{ width: '200px' }}
                        aria-label="Search"
                    />
                    <Button style={{ color: 'whitesmoke' }}><BsSearch style={{ fontSize: '20px', }} /></Button>
                </Form>
                <Container style={{ position: 'relative' }}>
                    <Row style={{ paddingTop: "40px" }}>
                        <Col xs={3} >
                            <Container >
                                <Row>
                                    <Col >
                                        <b>Total Count</b>
                                    </Col>
                                    <Col xs md="-10" style={{ paddingRight: '-50px' }}>
                                        <Card style={{ borderRadius: '12px', width: '50px', paddingLeft: '18px', backgroundColor: "#F0F4F8" }}>2</Card>
                                    </Col>
                                </Row>
                            </Container><br />

                        </Col>
                        <Col xs={9} ></Col>
                    </Row>
                </Container>

                <Button variant="primary" style={{ height: '60px' }} onClick={handleShow}>  <GrAddCircle />Addschedule
                </Button>

                <Modal show={show} onHide={handleClose} className='my-modal' >
                    <Modal.Header closeButton>
                        <Modal.Title>Schedule Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={4}>
                                <Form>
                                    <Form.Group className="mb-3"  >
                                        <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
                                            <option>Select Report Type</option>
                                            <option>Select Report Type </option>
                                            <option>Select Report Type</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
                                            <option>Select Group</option>
                                            <option>Select Group </option>
                                            <option>Select Group</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
                                            <option>Select Vehicle</option>
                                            <option>Select Vehicle </option>
                                            <option>Select Vehicle</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
                                            <option>Enter Email Id</option>
                                            <option>Enter Email Id </option>
                                            <option>Enter Email Id</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
                                            <option>Enter Email Id</option>
                                            <option>Enter Email Id </option>
                                            <option>Enter Email Id</option>
                                        </Form.Select>
                                    </Form.Group>

                                </Form>
                            </Col>
                            <Col sm={8}>
                                <Form.Group className="mb-3" >
                                    <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
                                        <option>Duration</option>
                                        <option>Duration </option>
                                        <option>Duration</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label=" Weekly "
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Biweekly"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Monthly"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />

                                        </div>
                                    ))}
                                </Form>

                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Mon"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Tue"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Wed"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Thu"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Fri"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Sat"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Sun"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                                <Form.Group className="mb-3" >
                                    <Form.Select style={{ backgroundColor: "#F0F4F8" }} >
                                        <option>Excel Sheet</option>
                                        <option>Excel Sheet </option>
                                        <option>Excel Sheet</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <Table responsive striped borderless hover variant="light" size="" >
                    <thead>
                        <tr>
                            <th>Report Type &nbsp; &nbsp; &nbsp; <IoIosArrowUp /></th>
                            <th>Device Group</th>
                            <th>Details</th>
                            <th>Duration</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Trip Summary</td>
                            <td>Group_name_</td>
                            <td>Weekly</td>
                            <td> - </td>
                            <td>Vinnn@gmail.com</td>
                            <td>active</td>
                            <td><HiOutlineDotsVertical /></td>
                        </tr>
                        <tr>
                            <td>Dashboard</td>
                            <td>Group_name_</td>
                            <td>Weekly</td>
                            <td> - </td>
                            <td>Vinnss@gmail.com</td>
                            <td>active</td>
                            <td><HiOutlineDotsVertical /></td>
                        </tr>
                        <tr>
                            <td>Trip Summary</td>
                            <td>Group_name_</td>
                            <td>Weekly</td>
                            <td> - </td>
                            <td>Vinzzz@gmail.com</td>
                            <td>active</td>
                            <td><HiOutlineDotsVertical /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default Schedule;