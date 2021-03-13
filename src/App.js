import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

  /*
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

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


//hook component
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
