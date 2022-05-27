import React from "react";
import { Col, Container, Dropdown, Form, Row, Button, FormControl, Table } from "react-bootstrap";
import { FaCarAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineGpsNotFixed } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import { MdBatteryFull } from "react-icons/md";
import { FaFan } from "react-icons/fa";
import { MDBCol, MDBIcon } from "mdbreact";
import { BsSearch } from "react-icons/bs";

const VechileTable = () => {
  return (
    <div className="scroll">
      <Container>
        <Row>
          <Col>
            {/* searchbar */}
            <MDBCol md="3">
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
                </Form> </div>
              <Form.Group className="mb-3">
                <Form.Control
                  type="date"
                  style={{ backgroundColor: "#F0F4F8" }}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Dropdown className="drpdwn">
                    <Dropdown.Toggle variant=" " id="dropdown-basic">
                      Select select Group{" "}
                    </Dropdown.Toggle>
                  </Dropdown>
                </Col>
              </Row>
            </MDBCol>
            <Row>
              <Table responsive stripped borderless hover variant="light" size="sm">
                <thead>
                  <tr>
                    <th>
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              type={type}
                              id={`inline-${type}-1`}
                            />
                          </div>
                        ))}
                        Vechile#
                      </Form>
                    </th>
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>Type</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>Speed</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>Address</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>GPS Time</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>GPS</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>Status</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>Distance</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>Driver</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>RFID</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>GPS Status</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>GSM Status</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>Last Alarm</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>IgnitionStatus</th>
                    ))}
                    {Array.from({ length: 1 }).map((_, index) => (
                      <th key={index}>Details</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              type={type}
                              id={`inline-${type}-1`}
                            />
                          </div>
                        ))}
                        AKHFSS...{" "}
                      </Form>
                    </td>
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        {" "}
                        <FaCarAlt/> Car{index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>60 km/h{index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        Address_Lorem i-sum pin 500061 <FaMapMarkedAlt style={{ color: "blue" }} />
                        {index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        27 July 2022 <br /> 12 Aug 2022{index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        {" "}
                        <MdOutlineGpsNotFixed /> 22 {index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>No Data{index}</td>
                    ))}

                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>0 km{index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>Vineela {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>Active {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>In-active {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        <FaCarBattery /> Power 9.70v <br />
                        <MdBatteryFull /> Battery 4.10v <br />
                        <FaFan /> AC Off {index}
                      </td>
                    ))}
                  </tr>
                  <tr>
                  <td>
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              type={type}
                              id={`inline-${type}-1`}
                            />
                          </div>
                        ))}
                        AKHFSS...{" "}
                      </Form>
                    </td>
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        {" "}
                        <FaTruck /> Truck {index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>60 km/h{index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        Address_Lorem i-sum pin 500061 <FaMapMarkedAlt   style={{ color: "blue" }} />
                        {index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        27 July 2022 <br /> 12 Aug 2022{index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        {" "}
                        <MdOutlineGpsNotFixed /> 22 {index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>No Data{index}</td>
                    ))}

                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>0 km{index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>Vineela {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>Active {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>In-active {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        <FaCarBattery /> Power 9.70v <br />
                        <MdBatteryFull /> Battery 4.10v <br />
                        <FaFan /> AC Off {index}
                      </td>
                    ))}
                  </tr>

                  <tr>
                  <td>
                      <Form>
                        {["checkbox"].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                              inline
                              type={type}
                              id={`inline-${type}-1`}
                            />
                          </div>
                        ))}
                        AKHFSS...{" "}
                      </Form>
                    </td>
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        {" "}
                        <FaCarAlt /> Car{index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>60 km/h{index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        Address_Lorem i-sum pin 500061 <FaMapMarkedAlt  style={{ color: "blue" }} />
                        {index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        27 July 2022 <br /> 12 Aug 2022{index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        {" "}
                        <MdOutlineGpsNotFixed /> 22 {index}
                      </td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>No Data{index}</td>
                    ))}

                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>0 km{index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>Vineela {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>Active {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>In-active {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>- {index}</td>
                    ))}
                    {Array.from({ length: 1 }).map((index) => (
                      <td key={index}>
                        <FaCarBattery /> Power 9.70v <br />
                        <MdBatteryFull /> Battery 4.10v <br />
                        <FaFan /> AC Off {index}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VechileTable;
