import { useState } from "react";

import "./App.css";
// import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";




const App = () => {
  // console.log('render');
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
    console.log(searchField)
  };

  return (
    <div className="App">
      
      <h1 className="app-title">Monsters Rolodex</h1>
      
      <SearchBox
        onSearchChange={onSearchChange}
        className={`search-box`}
        placeholder={'search monsters'}
      />
{/*       
      <CardList
        monsters={filteredMonsters}
      /> */}
    </div>
  );  
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   async componentDidMount() {
//     // console.log('componentDidMounted');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users =>
//         this.setState(
//           () => {
//             return { monsters: users }
//           }
//         ))
//   }   

//     onSearchChange = (event) => {
//       const searchField = event.target.value.toLowerCase();
//       this.setState(() => {
//         return { searchField };
//       });
//     };

//     render() {
//       const { monsters, searchField } = this.state;
//       const { onSearchChange } = this;


//       const filteredMonsters = monsters.filter((monster) => {
//         return monster.name.toLowerCase().includes(searchField);
//       });

//       return (
//         <div className="App">
          
//           <h1 className="app-title">Monsters Rolodex</h1>
          
//           <SearchBox
//             onSearchChange={onSearchChange}
//             className={`search-box`}
//             placeholder={'search monsters'}
//           />
          
//           <CardList
//             monsters={filteredMonsters}
//           />
//         </div>
//       );
//     }

//   }


export default App