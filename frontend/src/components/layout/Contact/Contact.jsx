import React from 'react'
import { Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <a className="mailBtn" href="mailto:shaikjilani2001@gmail.com">
        <Button>Contact: shaikjilani2001@gmail.com</Button>
      </a>
      <div>
      <h3>Contact me on what's app</h3>
      <a href="https://wa.me/918309857097" target={"_blank"} className='whatapp'>
        <WhatsAppIcon />
      </a>
      </div>
    </div>
  )
}

export default Contact
