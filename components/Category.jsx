import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

export default Category = ({ category }) => {
    let [colored, setColored] = useState(false);
    let [style, setStyle] = useState(styles.colorFalse)
    let [text, setText] = useState(styles.textFalse)


    // Function to color in categories on press
    let colorIn = () => {
        setColored(!colored)
    }

    useEffect(() => {  
        let textStyle = colored ? styles.textTrue : styles.textFalse
        let style = colored ? styles.colorTrue : styles.colorFalse

        setText(textStyle)
        setStyle(style)
    }, [colored]);

    return(
        <TouchableOpacity style={[styles.categoryButton, style]} onPress={colorIn}>
           <Text style={[style.category, text]}>{category}</Text>
        </TouchableOpacity>
    )
}

const styles = new StyleSheet.create({
    category: {
        fontFamily: "Century"
    },
    
    categoryButton: {
        margin: 5,
        width: 90,
        height: 30,
        backgroundColor: "#e9e9e9",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    colorFalse: {
        backgroundColor: "#e9e9e9",
    },

    colorTrue: {
        backgroundColor: "#000579",
    },

    textTrue: {
        color: "white"
    },

    textFalse: {
        color: "black"
    }
})