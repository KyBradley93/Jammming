import React from 'react';
import Styles from '/Users/lisadodd/Desktop/Codecademy/Code Projects/Jammming/react-jammming-project/src/SearchBar.module.css'

export function SearchBar() {
    return (
        <div className={Styles.SearchBar}>
            <h1>Search Here</h1>
            <input type="text" />
        </div>
    )
}