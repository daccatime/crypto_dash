
import React, {Component} from 'react';
import WelcomeMessage from './WelcomeMessage' 
import './app/App.css';
import styled from 'styled-components'

const MyButton = styled.h1`
font-size: 1.5em;
text-align: center;
color: green;
`;

class App extends Component {
  render() {
    return (
    <div>
      <WelcomeMessage/>
      
  <MyButton>Hello style</MyButton>  
    </div>
  );
    }
}

export default App;
