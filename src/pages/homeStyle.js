import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0A2647;
`;

export const HrStyled = styled.hr`
    background-color: #2C74B3;
    width: 90vw;
    height: 1vh;
    align-self: center;
    border: none
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 4vw;
    padding-bottom: 8vh;
`;

export const DivProjects = styled.div`
    /* height: 150vh;  */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
`;

export const Title = styled.div`
    padding: 8vh 0 4vh 0;
    font-size: 5rem;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 3rem;
    }
`;

export const SkillsContainer = styled.div`
    /* height: 95vh; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 16vh;
`;

export const SkillsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 4vh;
`;