import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass ='';
    btnClass = classes.red;
    if(props.showPerson) {
      btnClass = classes.red
    }
    

    if(props.persons.length <= 2) {
      assignedClasses.push('red');
    }
    if (props.persons.length <= 1) {
      assignedClasses.push('bold');
  }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am React</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
            className="button"
            onClick={props.clicked}>Swith Name</button>
        </div>
    )
}

export default cockpit;