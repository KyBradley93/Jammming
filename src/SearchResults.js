import React from 'react';
import Styles from '/Users/lisadodd/Desktop/Codecademy/Code Projects/Jammming/react-jammming-project/src/SearchResults.module.css'
import { TrackList } from './Tracklist';

export function SearchResults() {
    return (
        <div className={Styles.SearchResults}>
            <h2>Search Results Here</h2>
            <TrackList />
        </div>
    )
}