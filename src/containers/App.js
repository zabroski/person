
import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class  App extends Component {
  state ={
    persons: [
      { id: 'toto', name: 'Summer', age: 27},
      { id: 'vahy5', name: 'Grady', age: 29},
      { id: 'fgot6',name: 'Raye', age: 20},
    ],
    otherState: 'some other value',
    showPerson: false,
}

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person =  {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;
  const persons =[...this.state.persons];
  person[personIndex] = person;

  this.setState({persons:persons});

  this.setState({
    persons: [
      { name: 'Summer', age: 27},
      { name: event.target.value, age: 29},
      { name: 'Raye', age: 20},
    ]
  })
};


deletePersonHandle = (personIndex) => {
  const persons = [...this.state.persons]
  persons.splice(personIndex, 1);
  this.setState({persons:persons})

}



togglePersonHandler = () => {
  const doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow});
}

render () {
    const style= {
      backgroundColor: 'green',
      color: 'white',
      font: 'white',
      boder: '1px solid red',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor:'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPerson) {
      persons = (
      <div>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandle}
          changed={this.nameChangedHandler}
        />
     </div>

    );

      style.backgroundColor= 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color: 'black'
      }
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
            onClick={()=> this.togglePersonHandler()}>Swith Name</button>
            { persons}
        </div>
 
    );

  }
}

export default App ;
