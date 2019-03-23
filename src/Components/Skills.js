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

`

const SkillsHolder = styled.div`
padding: 15px;
`
const SkillsHeader = styled.h3`
    font-size: 50px;
    margin-bottom: 3px;
    text-align: center;
`


export default class Skills extends React.Component{
    render(){
        return(
            <div>       
                <Abilities>
                       <SkillsHeader>Skills</SkillsHeader>   
                           <Skill>
                               <SkillsHolder>
                                   <h2>Design</h2>
                                   <ul>
                                       <li>3D Modeling</li>
                                   </ul>
                                       
                               </SkillsHolder>
                               <SkillsHolder>
                                   <h2>Development</h2>
                               </SkillsHolder>
                               <SkillsHolder>
                                   <h2>Programming</h2>
                                   <ul>
                                  <li>HTML</li>
                                  <li>CSS</li>
                                  <li>React</li>
                                  <li>Node.js</li>
                                   </ul>
                               </SkillsHolder>
                               <SkillsHolder>
                                   <h2>Game Development</h2>
                                   <ul>
                                  <li>Unity</li>
                                  <li>C#</li>
                                  <li></li>
                                   </ul>
                               </SkillsHolder>
                           </Skill>
                   </Abilities>
            </div>
        )
    }
}
