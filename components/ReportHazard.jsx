import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from "react-native";

export default ReportHazard = (props) => {
    // State to contorl visibility of Touchable Opacity
    let [visible, setVisible] = useState(true);

    // What to do on a click (state changes, etc.)
    let onClick = () => {
        return;
    }

    return(
        <TouchableOpacity style={styles.container} onClick={this.onClick}>
            <Image style={styles.hazard} source={require('../assets/hazard.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    topLevel: {
        borderColor: "#000",
        borderWidth: 2,
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        alignSelf: "stretch"
    },

    container: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#022442',
        borderRadius: 10,
        padding: 10,
        margin: 10,
      },
      hazard: {
        height: 30,
        width: 35,
    }
});