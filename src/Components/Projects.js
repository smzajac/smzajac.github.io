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

const FadeInAnimation = keyframes`  
from { opacity: 0; transform: translate3d(0,-10px,0); }
to { opacity: 1; transform: translate3d(0,0,0);}
`; 

const Holder = styled.div`
    :hover{
        .info{
            display: block
            animation-name: ${FadeInAnimation};
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

`;

const Info = styled.div`
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
        
             p{
                 width: 80%;
                 margin: auto;
                 padding: 5%;
                 font-size: 14px;
             }

             ul{
                padding: 0px;   
             }
             li{
                 overflow: hidden;
                 font-size: 14px;
             }
        }

    }


`

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
                                <Info className="info">
                                   <h3>{item.info}</h3>
                                   <div className="aboutTech">
                                       <div className="gridItem">
                                          <div style={{fontWeight:"bold"}}>About</div>
                                           <p>hello this is content for the item I am going to type a lot to see how this reacts to its space given</p>
                                          </div>

                                       <div className="gridItem">
                                          <div style={{fontWeight:"bold"}}>Technologies</div>
                                          <ul>
                                              <li>React</li>
                                              <li>Redux</li>
                                              <li>Node.js</li>
                                          </ul>
                                       </div>
                                    </div>
                                </Info>
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