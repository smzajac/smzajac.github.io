import React from 'react';
import styled from 'styled-components';
import Kenzie from '../Assets/Images/KenzieOnline.png'
import Offerings from '../Assets/Images/Offerings.png'
import Wooble from '../Assets/Images/WoobleWobble.png'

const projects = [
    {item: Kenzie},
    {item: Offerings},
    {item: Wooble},
]

const Holder = styled.div`
    // margin: 5px;
    // background-color: ${props => props.theme.main}
    width: 70%;
    margin: 5%;
    box-shadow: 0px 0px 3px 3px ${props => props.theme.dark}80;
    img{
        margin: auto;
        width: 100%;
    }
`;

const Template = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Background = styled.div`
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'%3E%3Cline x1='0%' y1='0%' x2='100%' y2='100%' style='stroke:%23${props => props.theme.main.replace("#", "")}80;stroke-width:180' /%3E%3C/svg%3E");
    padding: 5%;
    
`;

const SkillsHeader = styled.h3`
    font-size: 50px;
    text-align: center;
    color: ${props => props.theme.dark}
`


class Projects extends React.Component{
    
    render(){
        return(
            <Background>
                <SkillsHeader>Projects</SkillsHeader>
                <Template>
                {projects.map(item => {
                    return(
                        <Holder>
                            <img width="70%" height="auto" src={`${item.item}`}/>
                        </Holder>
                    )
                })}
                </Template>
            </Background>
        )
    }
}

export default Projects;