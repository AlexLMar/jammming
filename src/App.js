import styles from "./components/App.module.css";
import React, { useState } from "react";
// import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tracklist from "./components/Tracklist";

const songList = [
  { name: "Song 1" },
  { name: "Song 2" },
  { name: "Song 3" },
  { name: "Song 4" },
];

function App() {
  const [userInput, setUserInput] = useState("");

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  const [searchResults, setSearchResults] = useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();
    setSearchResults(songList);
    setUserInput("");
  }

  const [tracklist, setTracklist] = useState({});

  function handleAddTrack(e) {
    setTracklist({});
  }

  function handleRemoveTrack(e) {
    
    setTracklist({});
  }

  return (
    <>
      <h1>Playlist creator</h1>
      <p>You can search here for a song you'd like to add to your playlist:</p>
      <div>
        <SearchBar
          onChange={handleUserInput}
          userInput={userInput}
          onSubmit={handleFormSubmit}
        />
      </div>
      <div>
        <div className={styles.content}>
          <SearchResults
            searchResults={searchResults}
            onAddTrack={handleAddTrack}
            onRemoveTrack={handleRemoveTrack}
          />
        </div>
        <div>
          <Tracklist tracklist={tracklist} />
        </div>
      </div>
    </>
  );
}

export default App;
