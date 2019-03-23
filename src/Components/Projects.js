import React from 'react';
import styled, { keyframes } from 'styled-components';
import Kenzie from '../Assets/Images/KenzieOnline.png'
import Offerings from '../Assets/Images/Offerings.png'
import Wooble from '../Assets/Images/WoobleWobble.png'
import BaseAnimation from '../Assets/Animations/BaseAnimation'

const projects = [
    {item: Kenzie,
     link: "https://online.kenzie.academy/",
     info: "Kenzie Online"
    },
    {item: Offerings,
     link: "https://offerings-staging.kenzie.studio/",
     info: "Offerings"
    },
    {item: Wooble,
     link: "https://play.google.com/store/apps/details?id=com.novacovellc.wooblewobble&hl=en",
     info: "Wooble Wobble"
    },
]

const Holder = styled.div`
    :hover{
        div{
            // display: block
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

    .info{ 
        // display: none;
        position: absolute;
        background-color: ${props => props.theme.dark};
        width: 100%;
        color: white;
        margin: auto;

        .aboutTech{
            display: flex;
            // grid-template-columns: auto auto;
            // padding: 5px 5px;
            justify-content: space-around;

            .gridItem{
                width: 50%;
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


const FadeInAnimation = keyframes`  
from { opacity: 0; transform: translate3d(0,-10px,0); }
to { opacity: 1; transform: translate3d(0,0,0);}
`; 

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
                            <FadeIn duration="0.8s">
                                <div className="info">
                                   <h3>{item.info}</h3>
                                   <div className="aboutTech">
                                       {/* <div style={{flexDirection: "column", alignItems:"center", width: "50%"}}> */}
                                       <div className="gridItem">
                                          <div style={{fontWeight:"bold"}}>About</div>
                                          </div>
                                            {/* <div style={{width: "50%"}}>hello more random item
                                                this is some really cool 
                                                stuff ya dig?
                                            </div> */}
                                       {/* </div> */}
                                       <div className="gridItem">
                                       {/* <div style={{flexDirection: "column", alignItems:"center", paddingRight:"40px"}}> */}
                                          <div style={{fontWeight:"bold"}}>Technologies</div>
                                                {/* <ul>
                                                    <li>React</li>
                                                    <li>Redux</li>
                                                    <li>Node.js</li>
                                                </ul> */}
                                          {/* </div> */}
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