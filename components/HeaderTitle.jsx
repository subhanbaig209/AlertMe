import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';

export default HeaderTitle = ({ text, date }) => {

return(
    <View style={styles.recentAlert}>
                <Text style={styles.alertTitle}>{text}</Text>
                <Text style={styles.alertDate}>{date}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    alertTitle: {
        fontFamily: "GilroyBold",
        fontSize: 20,
        marginBottom: 15,
        marginTop:15,
        marginLeft: 10,
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