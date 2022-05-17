import React, {Component} from 'react';

import {Container} from 'react-bootstrap'

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

class App extends Component {

  render() {
    return (
      <>
      <Header />
      <div className="App">
        <Container>
        <h1>Hello</h1>

        </Container>
      </div>
      <Footer />
      </>
  );
  }
  
}

export default App;
