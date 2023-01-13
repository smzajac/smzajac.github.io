import React, { Component } from 'react';
import './App.css';
import BaseLayout from './Components/BaseLayout';
import Hero from './Components/Hero';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/Main';
import About from './Components/AboutNew';
import Projects from './Components/Projects';
import Skills from './Components/Skills';


class App extends Component {

 state = {
   ...theme,
   error: false,
}

//takes two parameters the hex color and luminosity factor
//  -0.1 is 10% darker, 0.2 is 20% lighter, etc. 
ColorLuminance = (hex, lum) => {
	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

 myCallback = (dataFromChild) => {
   
  if(dataFromChild === undefined){
    this.setState({
      ...theme,
      error: true,
    })
    return
  }

  if(dataFromChild[0] !== '#'){
    dataFromChild = `#${dataFromChild}`
  }

  let ishex  = /^#[0-9A-F]{6}$/i.test(dataFromChild)

   if(ishex){
    let darker = this.ColorLuminance(dataFromChild, -0.2);
    let lighter = this.ColorLuminance(dataFromChild, 0.2);
  this.setState({
    ...theme,
    main: dataFromChild,
    dark: darker,
    light: lighter,
    error: false,
      }
    )
   }else{
     this.setState({
       ...theme,
       error: true,
     })
   }
}
 
  render() {

    // this.hander = () => {
    //   this.setState({
    //     ...theme,
    //     // main: "#CE3817",
    //   }
    // )
    // }
    

    return (
      <ThemeProvider theme={this.state}>
        <BaseLayout>
            <Hero/>
            {/* <About callbackFromParent={this.myCallback} error={this.state.error}/> */}
            <About/>
            <Skills/>
            <Projects/>
        </BaseLayout>
      </ThemeProvider>
    );
  }
}

export default App;
