import './App.css';
import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Playlist } from './Playlist';
import { Spotify } from './Spotify';

function App() {
  /*const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchSubmit = (e) => {

  }*/

  return (
    <div className="App"> 
        <p>
          kill me
        </p>
        <SearchBar />  
        <SearchResults />
        <Playlist />
        <Spotify />
    </div>
  );
}

export default App;
