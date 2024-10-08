import React from 'react';
import Track from './Track';
import styles from './SearchResults.module.css';

function SearchResults(props){
    
    if (props.searchResults.length) {
        return (
            <div className={styles.searchResults}>
                <h2>Results:</h2>
                <div className={styles.resultsList}>
                    {props.searchResults.map(song => <Track song={song.name} onAddTrack={props.onAddTrack}/>)}
                </div>
                
            </div>
        );
    } else {
        return (
            <>
                <p>Search for songs</p>
            </>
        );
    }
    
}

export default SearchResults;