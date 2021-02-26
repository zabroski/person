
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';
// import Radium, { StyleRoot }from 'radium';

const StyleButton = styled.button`

      background-color: green;
      color: white;
      font: white
      boder: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: lightgreen;
        color: black;
      }
`;
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
  const persons =[...this.state.persons]
  person[personIndex] = person;

  this.setState({persons:persons});





  this.setState({
    persons: [
      { name: 'Summer', age: 27},
      { name: event.target.value, age: 29},
      { name: 'Raye', age: 20},
    ]
  })
} 


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
        {this.state.persons.map((person, index) => {
          return <Person
          click={() =>this.deletePersonHandle(index)}
            name={person.name}
            age={person.age}
            key={index}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
            
        })}
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
          <StyleButton onClick={()=> this.togglePersonHandler()}>Swith Name</StyleButton>
            { persons}
        </div>
 
    );

  }
}

export default App ;
