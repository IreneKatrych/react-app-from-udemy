import React, { Component } from 'react';
import classes from'./App.module.css'; //WE SHOULD USE [FILE_NAME].MODULE.CSS FOR CSS MODULES

//RADIUM LIBRARY
//import Radium, { StyleRoot } from 'radium';

//STYLED COMPONENTS LIBRARY
//import styled from 'styled-components';

import Person from './Person/Person';

//FOR STYLED COMPONENT LIBRARY
// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//     &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color: black;
// }
// `;
class App extends Component {
  state = {
    persons: [
      { id: 'hdkd', name: 'Irene', age: 26 },
      { id: 'zjx', name: 'Mariann', age: 19 },
      { id: 'jgxm', name: 'Vitalik', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  /* DEPRECATED FUNCTION
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Mariann', age: 19 },
        { name: 'Vitaliy', age: 23 }
      ]
    });
  };
  */

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //ANOTHER WAY TO COPY ARRAY ELEMENTS
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {

    //THIS WILL MUTATE STATE - WE SHOULD NOT USE THIS WAY
    // const persons = this.state.persons.slice();

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    //THIS IS OBJECT FOR RADIUM
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null;
    let btnClass = [classes.Button];

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass.push(classes.Red);

      //THIS IS ALSO FOR RADIUM (DYNAMIC CHANGES)
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    };
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    };

    return (
      //FOR RADIUM -> <StyleRoot>
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            //ALSO FOR RADIUM -> style={style}
            //FOR STYLED COMPONENTS -> alt={this.state.showPersons}
            className={btnClass.join(' ')}
            onClick={this.togglePersonHandler}>Toggle Persons
          </button>
          {persons}
        </div>
      //RADIUM -> </StyleRoot>
    );

    //ANOTHER WAY TO CREATE REACT ELEMENT
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

//RADIUM -> export default Radium(App);
export default App;

//HOOK COMPONENTS
/*
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
    {name: 'Irene', age: 26},
    {name: 'Mariann', age: 19},
    {name: 'Vitalik', age: 23}
  ],
  otherState: 'some other value'
});

  const switchNameHandler = () => {
    //console.log('clicked!');
    //DO NOT DO THIS!!! this.state.persons[0].name = 'Iryna';
    setPersonsState({
      persons: [
        {name: 'Iryna', age: 26},
        {name: 'Mariann', age: 19},
        {name: 'Vitalik', age: 24}
      ],
      otherState: personsState.otherState
    })
  }

  console.log(personsState);

    return (
      <div className="App">
        <h1>Hi, I'm react app!</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch name!</button>
        <Person name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name}
        age={personsState.persons[1].age}>Hobbies: reading</Person>
        <Person name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m react app!'))
  }


export default app;
*/
