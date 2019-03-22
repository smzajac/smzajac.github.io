import React from 'react';
import styled from 'styled-components';
import Me from '../Assets/Images/me.jpg';

const Divider = styled.hr`
    height: 3px;
    width: 90%;
    background-color: ${props => props.theme.main};
    border: none;
    margin-top: 30px;
    margin-bottom: 30px;
`;


const Holder = styled.div`
    margin: auto;
    width: 90%;
    background-color: ${props => props.theme.main};
    // border: solid 3px ${props => props.theme.main};
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Center = styled.div`
   margin: auto;
   text-align: left;
   width: 70%;
   display: flex;
   justify-content: center;
   align-items: center;

   p{
       font-size: 18px;
       padding-left: 10px;
   }
`;

const Header = styled.h3`
    margin: auto;
    text-align: center;
    font-size: 50px;
`

const SkillsHeader = styled.h3`
    font-size: 50px;
    margin-bottom: 3px;
`

// const Testy = styled.div`
// background-color: #163d2c;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='993' height='993' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23ffffff' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23ffffff' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");
// padding: 200px;
// `;

// const Line = styled.div`
//     background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%'%3E%3Cline x1='0%' y1='0%' x2='100%' y2='100%' style='stroke:rgb(68, 99, 86, 0.5);stroke-width:100' /%3E%3C/svg%3E");
//     padding: 200px;
// `;

const Abilities = styled.div`
   background-color: ${props => props.theme.main}
   padding: 1px 0px 10px 70px;
   color: white;
`

const Skills = styled.div`
 display: flex;
 justify-content: space-around;

`

const SkillsHolder = styled.div`
padding: 15px;
`

const ColorButton = styled.button`
background-color: ${props => props.theme.main}
border: none;
color: white;
padding: 15px 25px;
margin: 2px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
outline: none;
:hover {
background-color: ${props => props.theme.dark};
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.4s;
}
`;

const Input = styled.input`
    outline: none;
    margin-right: 20px;
    font-size: 30px;
    width: 150px;
`



class About extends React.Component{

    state = {}

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <Holder/>
                    <Center>
                        <div>
                        <img style={{borderRadius: "50%", padding: "15px", marginRight: "20px"}} width="250px" height="250px" src={Me}/>
                        </div>
                        <p>
                        I am an Indianapolis local with a mixed bag of
                        design and development experience in the Web, 3D, and Game space.
                        I enjoy coming up with creative solutions to everyday problems and using technology as a medium.
                        <br/><br/>
                        I believe applications need to be built in a scalable way that can be easily updated.  To show this, enter a hex value in the
                        space below to change the over-arching theme of my site!
                        <br/><br/>
                        Website made using React.
                        </p>
                    </Center>
                    <Center>
                        <Input placeholder="#000000" onChange={this.handleChange}></Input>
                        <ColorButton onClick={() => this.props.callbackFromParent(this.state.value)}>Change!</ColorButton>
                    </Center>
                <Holder/>
                <Abilities>
                    <SkillsHeader>Skills</SkillsHeader>   
                        <Skills>
                            <SkillsHolder>
                                <h2>Design</h2>
                                    3D Modeling
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
                                <h2>Games</h2>
                                <ul>
                               <li>Unity</li>
                               <li>C#</li>
                               <li>React</li>
                               <li>Node.js</li>
                                </ul>
                            </SkillsHolder>
                        </Skills>
                </Abilities>
            </div>
        )
    }
}

export default About;