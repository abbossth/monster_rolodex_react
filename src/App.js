import { Component } from 'react'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: 'Johny',
        },
        {
          name: 'Mashu',
        },
        {
          name: 'Krapv',
        },
        {
          name: 'Ladan'
        }
      ]
    }    
  
  }
  render() {
    return(
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.name}>{monster.name}</h1>
          })  
        }
      </div>
    );
  }
}

export default App;
