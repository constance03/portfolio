import React from 'react'
import { Contact, FooterContainer, FooterIcons, InfoContainer } from './footerStyle'
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import instagram from "../../assets/instagram.svg"
import mail from "../../assets/mail.png"

const Footer = () => {
  return (
    <FooterContainer>
      <InfoContainer>
          <Contact>
            <h2>Let's get to know each other!</h2>
            <a href="mailto:maria-constance@hotmail.com" target="_blank"><img src={mail}/></a>
          </Contact>
          <FooterIcons>
            <a href="https://www.linkedin.com/in/mariaconstance/" target="_blank"><img src={linkedin}/></a>
            <a href="https://github.com/constance03/" target="_blank"><img src={github}/></a>
            <a href="https://instagram.com/heydearmaria/" target="_blank"><img src={instagram}/></a>
          </FooterIcons>
      </InfoContainer>
      <p>Copyright © 2022 Design by Maria Constance</p>
    </FooterContainer>
  )
}

export default Footer