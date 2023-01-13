import React from 'react';
import styled from 'styled-components';
import ExternalLink from '../Assets/Icons/external_link.svg';
import Kenzie from '../Assets/Images/KenzieOnline.png';
import Offerings from '../Assets/Images/Offerings.png';
import Wooble from '../Assets/Images/WoobleWobble.png';
import Profiles from '../Assets/Images/KenzieProfiles.png';
import LineupLens from '../Assets/Images/LineupLens.png';

const projects = [
    {image: LineupLens,
     link: "https://lineuplens.com",
     name: "Lineup Lens",
     tech: ["React", "GoogleSheets API", "Spotify"," Node.js", "Material UI"],
     about: "Passion project to compare Spotify listen history with upcoming Music Festival Lineups."
    },
    {image: Kenzie,
     link: "https://online.kenzie.academy/",
     name: "Kenzie Online",
     tech: ["React", "Redux", "Node.js"],
     about: "Member of team working on Learning Management System for Kenzie Academy. Assisted in development of frontend and the deployment of the platform."
    },
    {image: Profiles,
     link: 'https://profiles.kenzie.academy/',
     name: "Kenzie Profiles",
     tech: ["React", "Redux", "Node.js", "Material UI"],
     about: "Tool used by Kenzie Academy's Placement team to curate an exclusive student recruitment experience to our partners."
    },
    {image: Offerings,
    //  link: "https://offerings-staging.kenzie.studio/",
     name: "Offerings",
     tech: ["React", "Redux", "Node.js"],
     about: "Small passion project giving people the ability to offer their spare food to their local community."
    },
    {image: Wooble,
    //  link: "https://play.google.com/store/apps/details?id=com.novacovellc.wooblewobble&hl=en",
     name: "Wooble Wobble",
     tech: ["Unity", "C#", "Maya"],
     about: "Game made for the Merge VR cube which was sold in stores around the US."
    },
]

const Base = styled.div`
    background-color: ${props => props.theme.main};
    color: #e8edfb
    padding: 5% 7%;

    h3{
        font-size: 35px;
        margin-bottom: 60px;
        text-align: center;
        display: flex;
        flex-direction: row;
    }

    h3::before, h3: after{
        content: "";
        flex: 1 1;
        margin: auto;
        border-bottom: 1px solid ${props => props.theme.secondary};
        max-width: 400px;
        background-color: ${props => props.theme.secondary};
    }

    h3:before {
        margin-right: 15px;
    }

    h3:after {
        margin-left: 15px;
    }
`;

const Structure = styled.div`
    max-width: 1200px;
    margin: auto;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    a{
        text-decoration: none;
        color: inherit;
    }
`;

const Project = styled.div`
    background-color: ${props => props.theme.light};
    max-width: 320px;
    margin: 15px
    padding: 20px;

    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
        margin: 0;
        margin-bottom: 30px;
      }

    b{
        font-size: 18px;
    }
`

const Link = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const Name = styled.div`
    margin-bottom: 25px;
`;

const About = styled.div`
    line-height: 1.5;
    margin-bottom: 25px;
`;

const Image = styled.div`
    margin-bottom: 20px;
    img{
        width: 300px;
    }
`;

const Tech = styled.div`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    
    div{
        margin-right: 20px;
        margin-bottom: 10px;
    }
`;

export default function ProjectsNew(){
    return(
        <Base id="projects">
            <h3>Projects</h3>
            <Structure>
                <Wrapper>
                    {projects.map(project => {
                        return(
                            <a href={project.link} rel="noopener noreferrer" target="_blank">
                                <Project>
                                    { project.link &&
                                        <Link>
                                            <img alt="external link" src={ExternalLink}/>
                                        </Link>
                                    }
                                    <Name style={project.link ? {} : {marginTop: '20px'}}>
                                        <b>{project.name}</b>
                                    </Name>
                                    <About>
                                        {project.about}
                                    </About>
                                    <Image>
                                        <img alt="project" src={project.image}/>
                                    </Image>
                                    <Tech>
                                        {project.tech.map(tool => {
                                            return(
                                                <div>
                                                    {tool}
                                                </div>
                                            )
                                        })}
                                    </Tech>
                                </Project>
                            </a>
                        )
                    })}
                </Wrapper>
            </Structure>
        </Base>
    )
}