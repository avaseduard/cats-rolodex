// import { Component } from 'react'; // for react with classes
import { useState, useEffect, ChangeEvent } from 'react'; // for react with functions and hooks
// import logo from './logo';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';
import './App.css';

export type Cat = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  // Setting searchField to a initial value of '' and then using the setSearchField to update it; react rerenders the whole app component when the value is different to the setValue
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [cats, setCats] = useState<Cat[]>([]);
  const [filteredCats, setFilteredCats] = useState(cats);

  // The useEffect hook takes in two arguments: a callback function and an array of dependencies; the callback is the effect (code) we want to happen; whenever the value in the array changes, the callback function will run; by having an empty dependencies array, the useEffect runs only once, at the first render
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Cat[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setCats(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    // Filter the cats by the search field input
    const newFilteredCats = cats.filter(cat =>
      cat.name.toLocaleLowerCase().includes(searchField)
    );

    setFilteredCats(newFilteredCats);
  }, [cats, searchField]); // run the callback only when cats array changes or searchField

  // Take in the search box input string and passes it to the setValue
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Cats rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search for cats"
        className="cats-search-box"
      />
      <CardList cats={filteredCats} />
    </div>
  );
};

// class App extends Component {
//   // The constructor runs first and it's just dictating the initial state of the component
//   constructor() {
//     super();

//     this.state = {
//       cats: [],
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
//             return { cats: users };
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
//     const { cats, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredCats = cats.filter(cat =>
//       cat.name.toLocaleLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1 className='app-title'>Cats rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search for cats' className='cats-search-box' />
//         <CardList cats={filteredCats} />
//       </div>
//     );
//   }
// }

export default App;
