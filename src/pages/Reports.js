import React from 'react'
import { Tab, Tabs } from '../components/Tabs/Tab';
import { Container, Row, Col, Card } from "react-bootstrap";
import ReportCard from '../components/Report/ReportCard';
import Schedule from '../components/Report/Schedule';
import GroupTab from '../components/Report/GroupTab';

const Reports = () => {
  return (
    <main >
      <Tabs>
        <Tab label={"Vehicle"} tabName={"Vehicle"}>
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
                <ReportCard />
              </Col>
              <Col xs={9} ></Col>
            </Row>
          </Container>
        </Tab>
        <Tab label={"Group"} tabName={"Group"}>
<GroupTab/>
        </Tab>
        <Tab label={"Schedule"} tabName={"Schedule"}>
          <Schedule />
        </Tab>
      </Tabs>


    </main>
  )
};
export default Reports;
