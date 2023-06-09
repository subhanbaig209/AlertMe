import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default Post = ({ image, title, description}) => {
    return(
        <View style={styles.background}>
            <Image style={styles.image} source={image} />

            <View style={styles.alertContainer}>
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

    image: {
        marginLeft: 20,
        width: 50,
        height: 50
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

    alertContainer: {
        marginLeft: 20
    },

    alertDate: {
        fontFamily: "Century",
        color: "gray",
        marginRight: 20
    }
});