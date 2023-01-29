import React from 'react'
import { Contact, FooterContainer, FooterIcons, InfoContainer, SocialIcon } from './footerStyle'
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import instagram from "../../assets/instagram.svg"
import mail from "../../assets/mail.svg"

const Footer = () => {
  return (
    <FooterContainer>
      <InfoContainer>
          <Contact>
            <p>Let's get to know each other!</p>
          </Contact>
          <FooterIcons>
            <a href="https://www.linkedin.com/in/mariaconstance/" target="_blank"><SocialIcon src={linkedin}/></a>
            <a href="https://github.com/constance03/" target="_blank"><SocialIcon src={github}/></a>
            <a href="https://instagram.com/heydearmaria/" target="_blank"><SocialIcon src={instagram}/></a>
            <a href="mailto:maria-constance@hotmail.com" target="_blank"><SocialIcon src={mail}/></a>
          </FooterIcons>
      </InfoContainer>
      <p>Copyright © 2022 Design by Maria Constance</p>
    </FooterContainer>
  )
}

export default Footer