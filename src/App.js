import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  render() {
    return (
      <div className="App">
        <input
          type="text"
          className="search-box"
          placeholder="Search Monsters..."
          onChange={(e) => {
            fetch("https://jsonplaceholder.typicode.com/users")
              .then((response) => response.json())
              .then((users) =>
                this.setState(() => {
                  return {
                    monsters: users.filter((each) => {
                      return each.name
                        .toLowerCase()
                        .match(e.target.value.toLowerCase());
                    }),
                  };
                })
              );
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
