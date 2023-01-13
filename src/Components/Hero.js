import React from 'react';
import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../Assets/Animations/BaseAnimation';
import Me from '../Assets/Images/me_2023_zoomed.jpeg';
import Arrow from "../Assets/Icons/arrow_right.svg";
import Linkedin from '../Assets/Icons/LinkedIn.svg'
// import GitHub from '../Assets/Icons/GitHub.svg'
// import GitLab from '../Assets/Icons/GitLab.svg'

//https://www.pexels.com/photo/adventure-calm-clouds-dawn-414171/

const HeroImg = styled.div`
    background-color: #0A192F;
    padding: 5% 7%;
    display: flex;
    justify-content: center;
    min-height: 500px;

    @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
        height: 70vh; 
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1200px

    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
        flex-direction: column;
    }
`

const HeroBio = styled.div`
    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
        // height: 80vh;
    }
`;

const HeroText = styled.h1`
    color: #E6F1FF;

    span{
        text-decoration: underline;
        text-decoration-color: #ad1d44;
    }

    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
          font-size: 50px;
          padding-top: 20%;
      }

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 70px;
      }

    @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
          font-size: 70px;
      }
`;

const HeroSubText = styled.h3`
    color: #e8edfb;
   
    span{
        color: #ad1d44;
        font-size: 30px;
    }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
        font-size: 20px; 
        width: 80%
    }
`;

const FadeInAnimation = keyframes`  
    from { opacity: 0; transform: translate3d(0,40px,0); }
    to { opacity: 1; transform: translate3d(0,0,0);}
`;

const FadeIn = styled(BaseAnimation)`
    -moz-animation: ${FadeInAnimation};
    -ms-animation: ${FadeInAnimation};
    -o-animation: ${FadeInAnimation};
    animation-name: ${FadeInAnimation};
    
`;

const IconHolder = styled.div`
@media only screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: -150px;
    position: relative;
    bottom: 100px;
    left: 30px;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
    display: flex;
    justify-content: center;
    position: relative;
    top: 30px;
    }
`

const Icons = styled.img`
    :hover {
        transform: scale(1.15);
        transition: transform .20s ease-out;
    }
`;

const ArrowIcon = styled.img`
    padding-left: 12px;
`;

const MeImg = styled.div`
    margin-left: 15%;
    border-radius: 50%;
    border: 5px solid #ad1d44;
    background-color: #ad1d44;
    img{
        border-radius: 50%;
        aspect-ratio: 1 / 1;
    }

    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
        margin-left: 0px;
        margin: 15% 0;
        img{
            max-height: 300px;
        }
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
        img{
            max-height: 300px;
        }
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
        img{
            max-height: 500px;
        }
    }
`;

const Bio = styled.div`
    color: #e8edfb;
    margin-top: 45px;
    line-height: 1.5;
`;

const Connect = styled.div`
    color: #e8edfb;
    font-size: 18px;
    font-weight: bold;
    padding-top: 30px;
    display: flex;
    align-items: center;
`

function Hero() {
    return (
        <div>
            <HeroImg>
                <Container>
                    <HeroBio >
                        <FadeIn duration="1s">
                            <HeroText>
                                Hi, I'm <span>Sarah.</span>
                            </HeroText>
                        </FadeIn>
                        <FadeIn delay="1.2s">
                            <HeroSubText>
                                Developer <span>|</span> Tinkerer <span>|</span> Always Curious
                            </HeroSubText>
                            <Bio>
                                I am a Software Engineer with an Information Technology background.  From frontend, backend, to devops, I have worked with the whole stack helping organizations bring their ideas to life.
                            </Bio>
                            <Connect>
                                Connect with me <ArrowIcon src={Arrow}/> <a href="https://www.linkedin.com/in/zajacsarah/" rel="noopener noreferrer" target="_blank"><Icons src={Linkedin}/></a>
                            </Connect>
                        </FadeIn>
                    </HeroBio>
                    <MeImg>
                        <img alt="Sarah smiling at camera with cat on her shoulder" src={Me} />
                    </MeImg>
                    <IconHolder>     
                    {/* <a href="https://www.linkedin.com/in/zajacsarah/" rel="noopener noreferrer" target="_blank"><Icons src={Linkedin}/></a>
                    <a href="https://github.com/smzajac" rel="noopener noreferrer" target="_blank"><Icons src={GitHub}/></a>
                    <a href="https://gitlab.com/smzajac" rel="noopener noreferrer" target="_blank"><Icons src={GitLab}/></a> */}
                    </IconHolder>          
                </Container>
            </HeroImg>
        </div>
    )
}

export default Hero;