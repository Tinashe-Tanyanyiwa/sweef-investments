import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div>
      <MDBFooter className='text-center' color='white' bgColor='dark'>

<div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  ©2024 Copyright <b>Sweef Investments.</b> | All Rights Reserved
   {/* <a className='text-white' href='https://sagehilltechnologies.com/'> */}
     
  {/* </a>npm i @emailjs/browser */}
</div>
</MDBFooter>
    </div>
  )
}
