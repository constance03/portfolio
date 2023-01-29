import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: #144272;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2vh;
    width: 40vw;
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6rem;
    padding-top: 2vh;
    padding-bottom: 2vh;

    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`;

export const SocialIcon = styled.img`
    max-width: 10vw;
    max-height: 10vh;
`;