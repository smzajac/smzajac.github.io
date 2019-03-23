import React from 'react';
import styled from 'styled-components';

const Abilities = styled.div`
   background-color: ${props => props.theme.main}
   padding: 1px 0px 20px 0px;
   color: white;
`

const Skill = styled.div`
 display: flex;
 justify-content: space-around;

 @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {  
    flex-direction: column;
    align-items: flex-start;
}
`

const SkillsHolder = styled.div`
padding: 15px;
`

const SkillsHeader = styled.h3`
    font-size: 50px;
    margin-bottom: 3px;
    text-align: center;
`

const Mobile = styled.div`
@media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {  
    display: flex;
    justify-content: center;
    
}
`

export default class Skills extends React.Component{
    render(){
        return(
            <div>       
                <Abilities>
                       <SkillsHeader>Skills</SkillsHeader>
                       <Mobile>  
                           <Skill>
                               <SkillsHolder>
                                   <h2>Programming</h2>
                                   <ul>
                                  <li>HTML</li>
                                  <li>CSS</li>
                                  <li>Javascript</li>
                                  <li>React</li>
                                  <li>Node.js</li>
                                   </ul>
                               </SkillsHolder>
                               <SkillsHolder>
                                   <h2>Deployment</h2>
                                   <ul>
                                  <li>Amazon Web Services</li>
                                  <li>Docker</li>
                                   </ul>
                               </SkillsHolder>
                               <SkillsHolder>
                                   <h2>Game Development</h2>
                                   <ul>
                                  <li>Unity</li>
                                  <li>C#</li>
                                  <li>3D Modeling</li>
                                  <li>Design Theory</li>
                                   </ul>
                               </SkillsHolder>
                           </Skill>
                           </Mobile> 
                   </Abilities>
            </div>
        )
    }
}
