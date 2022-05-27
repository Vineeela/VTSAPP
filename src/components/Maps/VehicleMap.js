import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { FaBroadcastTower } from "react-icons/fa";
import { MdGpsNotFixed } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { FaArrowCircleDown } from "react-icons/fa";


const VehicleMap = () => {
  return (

    <Container fluid>
      <Row>
        <Col>
          <Card
            className="box"
            style={{
              width: "300px",
              height: "160px",
              paddingLeft: "10px",
              borderRadius: "10px",

            }}
          >
                <p style={{ backgroundColor: "white" }}>
              <h3>
              <span style={{fontWeight: 'bold'}}>  AXUIASDA... </span>
              &nbsp;<FaMapMarkedAlt style={{ color: "blue" }} />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <GoPrimitiveDot style={{ color: "red" }} />
              </h3>
              <p style={{ color: "gray" }}> data may be inaccurate &nbsp; &nbsp; &nbsp;
                <Button variant="secondary" size="sm" active>
                  No Data
                </Button></p>
            </p>


            <p>
              <h3>
                {" "}
                <p style={{ color: "gray" }}> <FaBroadcastTower /> &nbsp; <MdGpsNotFixed /> &nbsp; <FaCarBattery />
                  <fa-solid-fa-engine-warning /> &nbsp; <BiStats />
                  &nbsp;  &nbsp; <FaArrowCircleDown style={{ color: "blue", marginLeft: "23px" }} />
                </p>
              </h3>
            </p>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card
            className="box"
            style={{
              width: "300px",
              height: "160px",
              paddingLeft: "10px",
              borderRadius: "10px",

            }}
          >
            <p style={{ backgroundColor: "white" }}>
              <h3>
              <span style={{fontWeight: 'bold'}}>  AXUIASDA... </span>
               &nbsp;<FaMapMarkedAlt style={{ color: "blue" }} />{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <GoPrimitiveDot style={{ color: "red" }} />
              </h3>
              <p style={{ color: "gray" }}> data may be inaccurate &nbsp; &nbsp; &nbsp;
                <Button variant="secondary" size="sm" active>
                  No Data
                </Button></p>
            </p>

            <p>
              <h3>
                {" "}
                <p style={{ color: "gray" }}> <FaBroadcastTower /> &nbsp; <MdGpsNotFixed /> &nbsp; <FaCarBattery />
                  <fa-solid-fa-engine-warning /> &nbsp; <BiStats />
                  &nbsp; &nbsp; <FaArrowCircleDown style={{ color: "blue", marginLeft: "18px" }} />
                </p>
              </h3>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default VehicleMap;