import React, { Fragment } from 'react'
import { Tab, Tabs } from '../components/Tabs/Tab';
import Tabless from '../components/Tables/VehicleSummary';


const Overview = () => {
  return (
    <main >
      <Tabs>
        <Tab label={"Overall"} tabName={"Overall"}>
          <p>Inject your component here</p>
        </Tab>
        <Tab label={"Vehicle Summary"} tabName={"Vehicle Summary"}>
        
          <Tabless />
        </Tab>
      </Tabs>

    </main>



  )
};
export default Overview;
