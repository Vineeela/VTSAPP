
import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import CardComponent from '../components/Trails/Card';
import { Tab, Tabs } from '../components/Tabs/Tab';

const Trails = () => {


    return (
        <main>
            <Tabs>
                <Tab label={"Trail"} tabName={"Trail"}>
                    <Container>
                        <Row style={{ paddingTop: "40px" }}>
                            <Col xs={3} >
                                <Container >
                                    <Row>
                                        <Col >
                                            <b>Total Count </b>
                                        </Col>
                                        <Col xs md="-10" style={{ paddingRight: '-50px' }}>
                                            <Card style={{ borderRadius: '12px', width: '50px', paddingLeft: '18px', backgroundColor: "#F0F4F8" }}>2</Card>
                                        </Col>
                                    </Row>
                                </Container><br />
                                <CardComponent />
                            </Col>
                            <Col xs={9} ></Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab label={"Trip/Trail"} tabName={"Trip/Trail"}>
                    <p>Inject your component here</p>
                </Tab>
            </Tabs>
        </main>


    )
};
export default Trails;
