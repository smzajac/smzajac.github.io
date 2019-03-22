import React, { Component } from 'react';
import './App.css';
import BaseLayout from './Components/BaseLayout';
import Hero from './Components/Hero';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/Main';
import About from './Components/About';
import Projects from './Components/Projects';


class App extends Component {

 state = theme

 myCallback = (dataFromChild) => {
   
   if(dataFromChild){
  this.setState({
    ...theme,
    main: dataFromChild,
      }
    )
   }
}
 
  render() {

    this.hander = () => {
      console.log("hit")
      this.setState({
        ...theme,
        main: "#CE3817",
      }
    )
    }
    

    return (
      <ThemeProvider theme={this.state}>
        <BaseLayout>
          <Hero/>
          <About callbackFromParent={this.myCallback}/>
          <Projects/>
        </BaseLayout>
      </ThemeProvider>
    );
  }
}

export default App;
