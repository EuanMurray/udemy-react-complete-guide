import React, { PureComponent } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return true;
  //   return (
  //     nextState.persons != this.state.persons ||
  //     nextState.showPersons != this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate() {}

  state = {
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Michael", age: 18 },
      { id: "3", name: "jack", age: 48 }
    ]
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
