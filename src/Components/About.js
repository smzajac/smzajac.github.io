import React from 'react';
import styled from 'styled-components';
import Me from '../Assets/Images/me.jpg';

// const Divider = styled.hr`
//     height: 3px;
//     width: 90%;
//     background-color: ${props => props.theme.main};
//     border: none;
//     margin-top: 30px;
//     margin-bottom: 30px;
// `;


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

const Bio = styled.div`
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

   @media only screen and (max-width: ${props => props.theme.breakpoints.md}px) {
      
    flex-direction: column;
       
}
`;


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
    }

    handleKeyPress = (e) => {
        if(e.charCode === 13){
            this.props.callbackFromParent(this.state.value)
        }
    }

    render(){
        return(
            <div>
                <Holder/>
                    <Bio> 
                        <React.Fragment>
                        <div id="about">
                        <img alt="me" style={{borderRadius: "50%", padding: "15px", marginRight: "20px"}} width="250px" height="250px" src={Me}/>
                        </div>
                        <p>
                        I am an Indianapolis local with a mixed bag of
                        design and development experience in the Web, 3D, and Game space.
                        I enjoy coming up with creative solutions to everyday problems and using technology as a medium.  I have been a member
                        of dynamic teams who stick with a product through the entire lifecycle process.
                        
                        <br/><br/>
                        I believe applications need to be built in a scalable way that can be easily updated.  To show this, enter a hex value in the
                        space below to change the over-arching color theme of my site!
                        <br/><br/>
                        Website made using React.
                        </p>
                        </React.Fragment>
                    </Bio>
                    <Center>
                        <p style={{fontSize: "30px"}}>#</p>
                        <Input maxLength="6" placeholder="000000" onChange={this.handleChange} onKeyPress={this.handleKeyPress}></Input>
                        <ColorButton onClick={() => this.props.callbackFromParent(this.state.value)}>Change!</ColorButton>
                    </Center>
                    {this.props.error ? <Center>
                        <p style={{paddingTop: "10px", color: "red"}}>Enter a valid Hex Key, try: 4EA6BB 
                        or click <a href="https://htmlcolorcodes.com/" rel="noopener noreferrer" target="_blank">here</a> to make your own!
                         </p>
                    </Center> : ""
                    }
                <Holder/>
            </div>
        )
    }
}

export default About;