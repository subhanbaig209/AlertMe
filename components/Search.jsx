import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import SmallButton from "./SmallButton";
import assetsObject from "./assets";

export default Search = () => {
    let [search, setSearch] = useState("")
    let updateSearch = (searchVal) => {
        setSearch(searchVal)
    }


    return(
        <View style={styles.searchContainer}>
            <SearchBar containerStyle={styles.searchBorder} inputContainerStyle={styles.searchInput}
                                        value={search} onChangeText={updateSearch}/>
            <TouchableOpacity style={styles.settingsButton}>
                <Image style={styles.settings} source={require('../assets/filter.png')} />
            </TouchableOpacity>
        </View>

    )
}

const styles = new StyleSheet.create({
    searchInput: {
        backgroundColor: "#e7e7e7", 
        borderRadius: 10, width: 270
    },

    searchBorder: {
        backgroundColor: "transparent", 
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },

    searchContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },  

    settings: {
        width: 20,
        height: 10,
    },

    settingsButton: {
        marginRight: 20,
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000579",
        borderRadius: 10,
    },
})