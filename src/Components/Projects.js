import React from 'react';
import styled, { keyframes } from 'styled-components';
import Kenzie from '../Assets/Images/KenzieOnline.png'
import Offerings from '../Assets/Images/Offerings.png'
import Wooble from '../Assets/Images/WoobleWobble.png'
import BaseAnimation from '../Assets/Animations/BaseAnimation'

const projects = [
    {item: Kenzie,
     link: "https://online.kenzie.academy/",
     name: "Kenzie Online",
     tech: ["React", "Redux", "Redux Saga", "Node.js"],
     about: "Member of team working on Learning Management System for Kenzie Academy. Assisted in development of frontend and the deployment of the platform."
    },
    {item: Offerings,
     link: "https://offerings-staging.kenzie.studio/",
     name: "Offerings",
     tech: ["React", "Redux", "Redux Thunk", "Node.js"],
     about: "Small passion project giving people the ability to offer their spare food to their local community."
    },
    {item: Wooble,
     link: "https://play.google.com/store/apps/details?id=com.novacovellc.wooblewobble&hl=en",
     name: "Wooble Wobble",
     tech: ["Unity", "C#", "Maya"],
     about: "Game made for the Merge VR cube which was sold in stores around the US."
    },
]

const FadeInAnimation = keyframes`  
from { opacity: 0; transform: translate3d(0,-10px,0); }
to { opacity: 1; transform: translate3d(0,0,0);}
`; 

const Holder = styled.div`
    :hover{
        div{
            display: block
        }
    }
    width: 70%;
    margin: 5%;
    box-shadow: 0px 0px 3px 3px ${props => props.theme.dark}80;
    position: relative;
    text-align: center;
    img{
        margin: auto;
        width: 100%;
    }

    div{ 
        display: none;
        position: absolute;
        background-color: ${props => props.theme.dark};
        width: 100%;
        color: white;
        margin: auto;

        .aboutTech{
            display: flex;
            justify-content: space-around;

            .gridItem{
                width: 100%;
                margin-top: 0px;
                
                 p{
                     width: 80%;
                     margin: auto;
                     padding: 2%;
                     font-size: 14px;
                 }

                 ul{
                    padding: 0px; 
                    margin: 0px;  
                 }
                 li{
                     overflow: hidden;
                     font-size: 14px;
                 }
            }

        }
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

const FadeIn = styled(BaseAnimation)`
animation-name: ${FadeInAnimation};
`;


class Projects extends React.Component{
    
    render(){
        return(
            <Background>
                <SkillsHeader>Projects</SkillsHeader>
                <Template>
                {projects.map(item => {
                    return(
                        <Holder>
                            <a href={item.link} target="_blank">
                            <FadeIn>
                                <div>
                                <div className="info">
                                   <p>{item.name}</p>
                                   <div className="aboutTech">
                                       <p className="gridItem">
                                          <p style={{fontWeight:"bold"}}>About</p>
                                           <p>{item.about}</p>
                                          </p>

                                       <p className="gridItem">
                                          <p style={{fontWeight:"bold"}}>Technologies</p>
                                          <ul>
                                              {item.tech.map(tech => {
                                                  return(
                                                      <li>{tech}</li>
                                                  )
                                              })}
                                          </ul>
                                       </p>
                                    </div>
                                </div>
                                </div>
                            </FadeIn>
                                <img width="70%" height="auto" src={`${item.item}`}/>
                            </a>
                        </Holder>
                    )
                })}
                </Template>
            </Background>
        )
    }
}

export default Projects;