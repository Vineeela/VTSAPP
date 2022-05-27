import React from "react";
import Table from "react-bootstrap/Table";
import { IoIosArrowUp } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Button, Dropdown, Form, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "./Table.css";

const Tabless = () => {
  return (
    <div className="flex">
        <Form className="flex" >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{ color: 'whitesmoke' }}><BsSearch style={{ fontSize: '20px', }} /></Button>
              </Form>
  
      <Dropdown className="drpdwn">
        <Dropdown.Toggle variant=" " id="dropdown-basic">
          Select select Group{" "}
        </Dropdown.Toggle>
      </Dropdown>
      <Form.Group className="mb-3">
            <Form.Control type="date" style={{ backgroundColor: "#F0F4F8" }} />

          </Form.Group>
<div className="tbl">
      <Table striped hover borderless >
        <thead>
          <tr>
            <th>
              Vechile# &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowUp />{" "}
            </th>
            <th>Start Date</th>
            <th>Distance</th>
            <th>Odometer Start</th>
            <th>Odometer End</th>
            <th>Avg Speed</th>
            <th>Max Speed</th>
            <th>Engine(hrs)</th>
            <th>Spent Fuel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KAGH8291L <circle outline/><FaMapMarkedAlt /> </td>
            <td>16 Jan 2022</td>
            <td>300 Km</td>
            <td>29123</td>
            <td>29723</td>
            <td>60 km/hr</td>
            <td>80 km/hr</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              KAGH8291L <FaMapMarkedAlt />
            </td>
            <td>16 Jan 2022</td>
            <td>300 Km</td>
            <td>29123</td>
            <td>29723</td>
            <td>60 km/hr</td>
            <td>80 km/hr</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              KAGH8291L <FaMapMarkedAlt />
            </td>
            <td>16 Jan 2022</td>
            <td>300 Km</td>
            <td>29123</td>
            <td>29723</td>
            <td>60 km/hr</td>
            <td>80 km/hr</td>
            <td>10 </td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              KAGH8291L <FaMapMarkedAlt />
            </td>
            <td>16 Jan 2022</td>
            <td>300 Km</td>
            <td>29123</td>
            <td>29723</td>
            <td>60 km/hr</td>
            <td>80 km/hr</td>
            <td>10</td>
            <td>-</td>
          </tr>
        </tbody>
        
      </Table>
      </div>
    </div>
  );
};

export default Tabless;
