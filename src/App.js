import React, { Component } from 'react';
import NavBar from './components/navBar'
import Counters from './components/counters';



class App extends Component {

  constructor() {
    super();
    console.log('app- constructor');
    
  }

  //good for making ajax calls to the server
  componentDidMount(){
    console.log("app - mounted")
  }
  

  state = {
      counters: [
          { id: 1, value: 4 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 }
      ]
  };

  handleIncrement = (counter) => {
      const counters = [...this.state.counters]
      const index = counters.indexOf(counter)
      counters[index] = {...counter}
      counters[index].value++;
      this.setState({ counters: counters })
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0
          return c
      })
      this.setState({ counters : counters })
  };

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId)
      this.setState({ counters: counters })
  };

  render() {
    console.log('app - Rendered')
    return (
      <React.Fragment>
        <NavBar totalCounters={ this.state.counters.filter(c => c.value > 0).length } />
        {/* <main> contains the content of <body> */}
        <main className="container"> 
        <Counters 
          counters={ this.state.counters }
          onReset={ this.handleReset}
          onIncrement={ this.handleIncrement }
          onDelete={ this.handleDelete } 
          /> 
        </main>
      </React.Fragment>
    );
  }
}

export default App;
