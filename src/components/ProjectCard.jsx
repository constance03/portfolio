import { Tooltip } from '@chakra-ui/react';
import React from 'react'
import styled from 'styled-components';

export const ProjectCard = (props) => {
    const {project} = props

    const ImgCard = styled.img`
      opacity: 0.7;
    &:hover {
      transform: scale(1.1);
      padding-bottom: 2vh;
      opacity: 1;
      cursor: pointer;
    }
`;

  return (
    <Tooltip hasArrow label={project.description} fontSize='2xl' bg='gray.200' color='black' >
       <a href={project.link} target="_blank"><ImgCard src={project.image} width="600px"/></a> 
    </Tooltip>
  )
}

