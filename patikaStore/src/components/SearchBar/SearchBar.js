import React from "react";
import { TextInput, View } from "react-native";
import styles from './SearchBar.style';
const SearchBar = () => {
    return (
        <TextInput style={styles.SearchBar}
            placeholder="Ara..."
        />
    )
}

export default SearchBar;