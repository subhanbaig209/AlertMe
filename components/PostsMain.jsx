import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default PostsMain = ({ title, description, image}) => {
    return(
        <View style={styles.background}>
                <Image style={styles.image} source={require('../assets/alertRecent.png')} />

                <View style={styles.alertContainer}>
                    <Text style={styles.alertTitle}>Incident on Hutchinson</Text>
                    <Text style={styles.alertInfo}>An incident has been reported on Hutchinson Drive in Davis, California. Reports of Mutiple Authorities and an Arrest.</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    background: {
        margin: 20,
        height: 150,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "#000579",
    },

    alertTitle: {
        fontFamily: "GilroyBold",
        marginBottom: 15,
        color: "white",
    },

    alertInfo: {
        color: "white",
        fontFamily: "Century",
        width: 190,
        fontSize: 10,
    },

    alertContainer: {
        marginLeft: 20,
    },

    image: {
        marginLeft: 20,
        width: 80,
        height: 80
    },

});