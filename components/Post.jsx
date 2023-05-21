import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default Post = ({ image, title, description}) => {
    return(
        <View style={styles.background}>
            <Image style={styles.alert} source={require("../assets/biohazard.png")} />

            <View style={styles.alertText}>
                <Text style={styles.alertTitle}>{title}</Text>
                <Text style={styles.alertInfo}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        margin: 20,
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "#191559",
    },

    alert: {
        marginLeft: 20,
        width: 80,
        height: 80
    },

    alertTitle: {
        fontFamily: "GilroyBold",
        marginBottom: 15,
        color: "white",
    },

    alertInfo: {
        color: "white",
        fontFamily: "Century",
        width: 197,
        fontSize: 10,
    },

    alertText: {
        marginLeft: 20
    },

    alertDate: {
        fontFamily: "Century",
        color: "gray",
        marginRight: 20
    },

    recentAlert: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});