import person from "../Persons/Person/Person";

import React from 'react';
import Person from './Person/Person'


const persons = (props) => (
    persons.map((person, index) => {
        return<Person
            click={() =>this.deletePersonHandle(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          
      })

);


export default persons;