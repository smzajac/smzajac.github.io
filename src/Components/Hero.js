import React from 'react';
import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../Assets/Animations/BaseAnimation'
import Deviant from '../Assets/Icons/Deviantart.svg'
import Linkedin from '../Assets/Icons/LinkedIn.svg'
import GitHub from '../Assets/Icons/GitHub.svg'
import Twitter from '../Assets/Icons/Twitter.svg'

//https://www.pexels.com/photo/adventure-calm-clouds-dawn-414171/
import Landscape from '../Assets/Images/landscape.jpeg';

class Hero extends React.Component{
    render(){

        //will need to modify background size based on browser size

        const HeroImg = styled.div`
            background-image: url(${Landscape});
            // background-size: 100%;
            padding: 9% 5%;

            @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
                height: 400px; 
            }

        `;
        const HeroText = styled.h1`
            color: white;

            @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
                  font-size: 50px;
                  padding-top: 15%;
              }

            @media only screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
                font-size: 70px;
              }

            @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
                  font-size: 90px; 
              }
        `;

        const HeroSubText = styled.h2`
            color: white;
           

            @media only screen and (max-width: ${props => props.theme.breakpoints.sm}px) {
                font-size: 45px;
                }

            @media only screen and (min-width: ${props => props.theme.breakpoints.sm}px) {
                font-size: 65px;
                width: 90%
              }


          @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
                font-size: 80px; 
                width: 80%
            }
        `;

        const FadeInAnimation = keyframes`  
            from { opacity: 0; transform: translate3d(0,40px,0); }
            to { opacity: 1; transform: translate3d(0,0,0);}
        `; 

        const FadeIn = styled(BaseAnimation)`
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
        padding: 0px 5px;
        :hover {
            transform: scale(1.15);
            transition: transform .20s ease-out;
    }
    `;

        return(
            <div>
                <HeroImg>
                    <FadeIn duration="1s">
                    <HeroText>
                        Hi, I'm Sarah.
                    </HeroText>
                    </FadeIn>
                    <FadeIn delay="1.2s">
                        <HeroSubText>
                            I'm a Developer and Designer.
                        </HeroSubText>
                    </FadeIn>
                    <IconHolder>     
                    <a href="https://www.linkedin.com/in/zajacsarah/" target="_blank"><Icons src={Linkedin}/></a>
                    <a href="https://github.com/smzajac" target="_blank"><Icons src={GitHub}/></a>
                    <a href="https://twitter.com/ZeyHeySar" target="_blank"><Icons src={Twitter}/></a>
                    <a href="https://www.deviantart.com/sarahzajac" target="_blank"><Icons src={Deviant}/></a> 
                    </IconHolder>          
                </HeroImg>
            </div>
        )
    }
}

export default Hero;