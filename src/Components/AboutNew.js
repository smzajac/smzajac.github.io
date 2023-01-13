import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
    background-color: ${props => props.theme.main};
    color: #e8edfb
`;


export default function AboutNew(){
    return(
        <Base>
            About New
        </Base>
    )
}