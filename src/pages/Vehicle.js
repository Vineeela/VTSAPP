import React from 'react'
import { Tab, Tabs } from '../components/Tabs/Tab';
import VechileTable from '../components/Tables/VechileTable';
//import Cardss from '../components/Maps/Maps';
import VehicleMap from '../components/Maps/VehicleMap';
import { Container, Row, Col, Card } from "react-bootstrap";




const Vehicle = () => {
  return (
    <main >
      <Tabs>
        <Tab label={"List"} tabName={"List"}>
          <VechileTable />
        </Tab>
        <Tab label={"New"} tabName={"Map"}>
          <Container>
            <Row style={{ paddingTop: "40px" }}>
              <Col xs={3} >
                <Container >
                  <Row>
                    <Col >
                      <span style={{ fontWeight: 'bold' }}> Total Count </span>
                    </Col>
                    <Col xs md="-10" style={{ paddingRight: '-50px' }}>
                      <Card style={{ borderRadius: '12px', width: '50px', paddingLeft: '18px', backgroundColor: "#F0F4F8" }}>2</Card>
                    </Col>
                  </Row>
                </Container><br />
                <VehicleMap />
              </Col>
              <Col xs={9} ></Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>

    </main>

  )
};
export default Vehicle;
