import React from 'react'
import styled from 'styled-components'

// icons from https://codepen.io/ruandre/pen/howFi?editors=1100
import Email from '../Assets/Icons/Email.svg'

export default class BaseLayout extends React.Component{
    render(){

    const Header = styled.div`
    background-color: ${props => props.theme.main}
    padding: 15px;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    `;

    const Footer = styled.div`
    background-color: ${props => props.theme.main}
    padding: 15px;
    color: white;
    display: flex;
    justify-content: center;
    `;

    const Icons = styled.img`
        padding: 0px 5px;
    :hover {
        transform: scale(1.15);
        transition: transform .20s ease-out;
    }
    `;

    const Link = styled.a`
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
    `;

    const NavButton = styled.button`
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

        return(
            <div>
                <Header>
                    <div>
                        <a href="#about"><NavButton>About</NavButton></a>
                        <a href="#projects"><NavButton>Portfolio</NavButton></a>
                        <a href="mailto:sarahmzajac@gmail.com"><NavButton>Contact</NavButton></a>
                    </div>
                </Header>
                    {this.props.children}  
                <Footer>
                    <Link href="mailto:sarahmzajac@gmail.com"> Email Me! <Icons src={Email}/></Link>
                </Footer>
            </div>
        )
    }
}