import React from 'react'
import { Button, Avatar, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import './about.css'

const About = () => {
    const vistapp = () => {
        window.location = "https://wa.me/918309857097"
    }
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/dycdl8sqx/image/upload/v1680179747/IMG-20230226-WA0535_nhtxty.jpg"
                            alt="Founder"
                        />
                        <Typography>Jilani</Typography>
                        <Button color="primary" onClick={vistapp}>
                            Visit what's app
                        </Button>
                        <span>
                            This is a sample wesbite made by @Jilani.
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a
                            href="https://wa.me/918309857097"
                            target="blank"
                        >
                            <WhatsAppIcon />
                        </a>

                        <a href="https://t.me/shaik_jilani12" target="blank">
                            <TelegramIcon />
                        </a>
                        <a className="mailBtn" href="mailto:shaikjilani2001@gmail.com">
                            <MailIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
