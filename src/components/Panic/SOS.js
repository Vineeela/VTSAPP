import React from "react";
import Table from "react-bootstrap/Table";


const SOS = () => {
    return (

    <div className="scroll">
     
<Table striped hover borderless >
<thead>
  <tr>
    <th>
      Vechile# &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
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
    <td>KAGH8291L <circle outline/> </td>
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
      KAGH8291L 
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
      KAGH8291L 
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
      KAGH8291L 
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
    )}

export default SOS;