import React from 'react';
import styled from 'styled-components';



const projects = [
    {item: "http://www.kidsmathgamesonline.com/images/pictures/shapes/square.jpg"},
    {item: "http://www.kidsmathgamesonline.com/images/pictures/shapes/square.jpg"},
]

const Holder = styled.div`
    margin: 5px;
    // background-color: ${props => props.theme.main}
`;

const Template = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

`;

// const Background = styled.div`
// background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'%3E%3Cline x1='0%' y1='0%' x2='100%' y2='100%' style='stroke:rgb(22,61,44, 0.5);stroke-width:100' /%3E%3C/svg%3E");
// padding: 200px;
// `;

const Background = styled.div`
background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'%3E%3Cline x1='0%' y1='0%' x2='100%' y2='100%' style='stroke:%23${props => props.theme.main.replace("#", "")}80;stroke-width:180' /%3E%3C/svg%3E");
padding: 100px;
`;


class Projects extends React.Component{
    
    render(){
        return(
            <Background>
                <Template>
                {projects.map(item => {
                    return(
                        <Holder> 
                            <img width="250px" src={`${item.item}`}/>
                        </Holder>
                    )
                })}
                </Template>
            </Background>
        )
    }
}

export default Projects;