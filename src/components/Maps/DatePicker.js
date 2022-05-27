// import  React, { Component } from  'react'



// import { DatePicker } from  'react-dater'

// import  'react-dater/dist/index.css'



//  const  DatePickerr = () => {

// const [dates, setDates] = useState({

// checkin:  new  Date('2022-03-28'),

// checkout:  new  Date('2022-04-28')

// })

// const [open, setOpen] = useState(false)

// return (

// <>

// <DatePicker

// dates={dates}

// setDates={setDates}

// open={open}

// setOpen={setOpen}

// >

// <button  onClick={() =>  setOpen(!open)}>

// {dates.checkin && dates.checkin.toDateString()} |{' '}

// {dates.checkout && dates.checkout.toDateString()}

// </button>

// </DatePicker>

// </>

// )

// }
// export default DatePickerr;
import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-daterangepicker/daterangepicker.css';

class MyComponent {
  render() {
    return (
      <DateRangePicker
        initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}
      >
        <button>Click Me To Open Picker!</button>
      </DateRangePicker>
    );
  }
}

export default MyComponent;