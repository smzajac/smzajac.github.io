import React from 'react';
import styled from 'styled-components';
import Printer from '../Assets/Images/printer-debugging.jpeg';
import Win from '../Assets/Images/win.jpeg';

const Base = styled.div`
    background-color: ${props => props.theme.main};
    color: #e8edfb
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5% 7%;
    
    h3{
        max-width: 1200px
        font-size: 25px;
        margin-bottom: 60px;
        width: 100%;
    }

    h3::after{
        content: "";
        display: block;
        position: relative;
        top: -12px;
        margin-left: 130px;
        width: 250px;
        height: 1px;
        background-color: ${props => props.theme.secondary};
    }
`;

const Structure = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        flex-direction: column-reverse;
      }
`;

const Photos = styled.div`

    @media only screen and (min-width: ${props => props.theme.breakpoints.md}px) {
        margin-right: 150px
    }

    .wrap{
        position: relative;
    }

    .wrap:before {
        content:"";
        position: absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        background: rgba(173,29,68,0.4);
        z-index:999;
    }

    .bjj-wrap{
        position: relative;
        width: 300px;
        @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
            width: 200px;
          }
    }

    .bjj-wrap:before {
        content:"";
        position: absolute;
        top:-20px;
        right:-153px;
        height: 100%;
        width: 100%
        background: rgba(173,29,68,0.4);
        z-index:999;
        @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
            right: -83px;
          }
    }


    .printer{
        width: 350px;
        @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
            width: 250px;
          }
    }

    .bjj{
        width: 100%
        position: relative;
        top: -20px;
        right: -153px;
        @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
            right: -83px;
          }
    }

`;

const Bio = styled.div`
    line-height: 1.5;
    margin-left: 30px;
    max-width: 600px;
    background-color: ${props => props.theme.light}
    padding: 20px

    @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
        margin-bottom: 50px;
        margin-left: 0px;
      }
    
`;

const Chiclets = styled.div`
    margin-top: 20px;

    span{
        background-color: ${props => props.theme.secondary}
        display:inline-block;
        padding: 3px 10px;
        border-radius: 20px;
        margin-right: 15px;
        margin-top: 15px;
    }
`;


export default function AboutNew(){
    return(
        <Base id="about">
            <h3>About Me</h3>
            <Structure>
                <Photos>
                    <div class="wrap">
                        <img alt="pointing at 3D printer" class="printer" src={Printer}/>
                    </div>
                    <div class="bjj-wrap">
                        <img alt="hand held in air for winning BJJ competition" class="bjj" src={Win}/>
                    </div>
                </Photos>
                <Bio>
                    <div>
                        I have always held a deep interest in technology as long as I can remember. 
                        I started off my programming jouney learning Visual Basic back in highschool!
                        <br/> <br/>
                        Today, I have had the opportunity of working in both Ed-Tech and E-Commerce spaces, coming up with creative solutions to everyday problems and using technology as a medium.  I have been a member
                            of dynamic teams who stick with a product through the entire lifecycle process.  My work has weighed heavility in Front-End tools such as React and Node.js along with creating micro-services running on serverless AWS solutions.
                        <br/> <br/>
                        In my spare time, I enjoy 3D printing (and constantly debugging the printers) . To stay active I practice Brazilian Jiu Jitsu!
                    </div>
                    <Chiclets>
                        <div>Here are a few of my favorite technologies:</div>
                        <span>React</span> <span>Node.js</span> <span>Javascript</span> <span>TypeScript</span> <span>AWS</span> <span>Docker</span>
                    </Chiclets>
                </Bio>
            </Structure>
        </Base>
    )
}