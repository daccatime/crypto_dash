
import React, {Component} from 'react';
import WelcomeMessage from './WelcomeMessage' 
import './app/App.css';
import styled from 'styled-components'
import AppLayout from './app/AppLayout'

const MyButton = styled.h1`
font-size: 1.5em;
text-align: center;
color: green;
`;

class App extends Component {
  render() {
    return (
    <AppLayout>
      <WelcomeMessage/>
      
      <MyButton>Hello style</MyButton>  
  </AppLayout>
  );
    }
}

export default App;
