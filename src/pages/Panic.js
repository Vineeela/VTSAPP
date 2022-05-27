import React from 'react'
import ChartsPage from '../components/Panic/PanicStatus';
import SOS from '../components/Panic/SOS';
import { Tab, Tabs } from '../components/Tabs/Tab';

 const Panic = () => {
  return (
    
      <main >
     
        <Tabs>
          <Tab label={"Panic Status"} tabName={"Panic Status"}>
   <ChartsPage/>
          </Tab>
          <Tab label={"SOS"} tabName={"SOS"}>
       <SOS/>
          </Tab>
        </Tabs>     
      </main>
 
  )
};
 export default Panic;
