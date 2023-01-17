// import { Component } from 'react'; // for react with classes
import { useState, useEffect } from 'react'; // for react with functions and hooks
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  // Setting searchField to a initial value of '' and then using the setSearchField to update it; react rerenders the whole app component when the value is different to the setValue
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // The useEffect hook takes in two arguments: a callback function and an array of dependencies; the callback is the effect (code) we want to happen; whenever the value in the array changes, the callback function will run; by having an empty dependencies array, the useEffect runs only once, at the first render
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    // Filter the monsters by the search field input
    const newFilteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]); // run the callback only when monsters array changes or searchField

  // Take in the search box input string and passes it to the setValue
  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search for monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   // The constructor runs first and it's just dictating the initial state of the component
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     console.log('constructor');
//   }

//   // The componentdidmount runs third, after the render has mounted
//   componentDidMount() {
//     console.log('componentdidmount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => console.log(this.state)
//         )
//       );
//   }

//   onSearchChange = event => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   // The render runs second and it renders the initial state of the component but then runs again to rerender after the async function is done fetching
//   render() {
//     console.log('render app');

//     // Use destructuring to write just the constantName where we need it, instead if this.state.constantName
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster =>
//       monster.name.toLocaleLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search for monsters' className='monsters-search-box' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
