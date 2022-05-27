import React from 'react'

import { Card } from 'react-bootstrap';

import {BiArrowBack} from 'react-icons/bi'

 const Cards = () => {

  return (

    <div>

        <Card style={{ width: '18rem', borderRadius: "10px", boxShadow: "0px 10px 30px -15px rgba(0, 0, 0, 0.3) ", paddingBottom: "18px" }}>

         <Card.Body>

          <Card.Subtitle className="mb-2 text-muted" style={{ paddingBottom: "20px", fontWeight: '1000', paddingTop: "10px" }}><BiArrowBack/>Back</Card.Subtitle>

          </Card.Body>

          </Card>

    </div>

  )

}

export default Cards;