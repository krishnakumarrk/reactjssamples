import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

 state = {
   persons: [
     {name: 'Krishna', age: 34},
     {name: 'Rahul', age: 28},
     {name: 'Christina', age: 29},
   ],
   showPerson: false
 };

 onClickHandler = (newName, newAge) => {
   this.setState({
     persons: [
       {name: 'Krishna', age: 34},
       {name: newName, age: newAge},
       {name: 'Christina', age: 30},
     ],
     showPerson: !this.state.showPerson
   });
 }

 onNameChanged = (event) => {
   this.setState({
     persons: [
       {name: event.target.value, age: 34},
       {name: 'Rahul', age: 28},
       {name: 'Christina', age: 30},
     ]
   });
 }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => { this.onClickHandler('Hari', 40) }}>
          Show Person
        </button>
        {
          this.state.showPerson ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} nameChanged={this.onNameChanged}/>
            <Person
              click={this.onClickHandler.bind(this, 'Raiza')}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}>
              My Hobby - Racing
            </Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
