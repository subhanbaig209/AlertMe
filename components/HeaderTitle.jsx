import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';

export default HeaderTitle = ({ text, date }) => {

return(
    <View style={styles.titleContainer}>
                <Text style={styles.title}>{text}</Text>
                <Text style={styles.date}>{date}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontFamily: "GilroyBold",
        fontSize: 20,
        marginBottom: 10,
        marginTop:15,
        marginLeft: 10,
    },
    date: {
        fontFamily: "Century",
        color: "gray",
        marginRight: 20
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});