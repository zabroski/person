import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class  App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
  }
  state ={
    persons: [
      { id: 'toto', name: 'Summer', age: 27},
      { id: 'grady14', name: 'Grady', age: 29},
      { id: 'raye2',name: 'Raye', age: 2},
    ],
    otherState: 'some other value',
    showPerson: false,
}


// static getDerivedSatateFormProps

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  })

  const person = {
    ...this.state.persons[personIndex]
  };

  // const person = Object.assign({}, this.state.persons[personIndex]);

  person.name = event.target.value;

  const persons = [...this.state.persons]
  persons[personIndex] = person;

  this.setState({persons:persons})
}


deletePersonHandle = (personIndex) => {
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1);
  this.setState({ persons: persons })

}



togglePersonHandler = () => {
  const doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow});
}

render () {
  
    let persons = null;

    if(this.state.showPerson) {
      persons = (
      <div>
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandle}
          changed={this.nameChangedHandler}
        />
     </div>

    );

    }


    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I am React</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button 
            className="button"
            onClick={()=> this.togglePersonHandler()}>Toggle Persons</button>
            { persons}
        </div>
 
    );

  }
}

export default App ;