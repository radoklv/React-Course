import './App.css';
import List from './components/List/List';
import Search from './components/Search/Search'
import {useState, useEffect } from 'react'; 

const DUMMY_DATA = [
  { id: 1, brand: 'Peugeot' },
  { id: 2, brand: 'Mercedes' },
  { id: 3, brand: 'BMW' },
];

function App() {
  const [brands, setBrands] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');

  const setWord = (e) =>{
    setSearchedWord(e.target.value.trim().toLowerCase());
  }

  useEffect(()=>{
    setBrands(DUMMY_DATA.filter(el =>{
      return el.brand.toLowerCase().includes(searchedWord)
    }));
  }, [searchedWord])

  return (
    <div className="app">
      <div className="container">
        <Search onType={setWord}/>
        <List items={brands}/>
      </div>
    </div>
  );
}

export default App;
