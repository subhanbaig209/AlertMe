import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import HeaderTitle from "./HeaderTitle"
import Post from "./Post";
import assetsObject from "./assets"
import PostsMain from "./PostsMain";

export default SmallButton = ({style, image}) => {
    return(
        <TouchableOpacity style={styles.button}>
            <Image style={style} source={image} />
        </TouchableOpacity>
    )
}

let styles = StyleSheet.create({
    button: {
        marginRight: 20,
        marginTop: 40,
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d6d6d6",
        borderRadius: 10
    },
})