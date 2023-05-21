import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import HeaderTitle from "./HeaderTitle"
import assetsObject from "./assets"
import PostsMain from "./PostsMain";
import SmallButton from "./SmallButton"

export default Welcome = ({ text, date }) => {
    const [fontsLoaded] = useFonts({
        'Baskerville': require('../fonts/Baskerville/LibreBaskerville-Regular.ttf'),
        'BaskervilleBold': require('../fonts/Baskerville/LibreBaskerville-Bold.ttf'),
        'Gilroy': require('../fonts/Gilroy/Gilroy-Light.otf'),
        'GilroyBold': require('../fonts/Gilroy/Gilroy-ExtraBold.otf'),
        'Century': require('../fonts/CenturyGothic/CenturyGothic.ttf'),
      });

    return(
        <View>
            <View style={styles.navBar}>
                <View style={styles.nav}>
                    <View style={styles.profile}>
                        <Image style={styles.profilePic} source={require('../assets/profile.jpg')} />

                        <View style={styles.information}>
                            <Text style={styles.caption}>Welcome Back,</Text>
                            <Text style={styles.header}>Hashim</Text>
                        </View>
                    </View>
  
                    <SmallButton image={assetsObject.settings} style={styles.settings} />
                </View>
            </View>

            <HeaderTitle text={"Most Recent Post"} date={"May 22"}/>
            <PostsMain image={assetsObject.alert} title={"Incident on Hutchinson"} description={"An incident has been reported on Hutchinson Drive in Davis, California. Reports of Mutiple Authorities and an Arrest."} />
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
    alerts: {
        fontFamily: "GilroyBold",
        marginTop: 10,
        marginLeft: 10,
        fontSize: 23
    },

    information: {
        display: "flex",
        justifyContent: "center",
    },

    header: {
        fontFamily: "Baskerville",
        fontSize: 16,
        color: "black"
    },

    caption: {
        marginBottom: 3,
        fontSize: 10,
        fontFamily: "Century",
        color: "black"
    },
    profile: {
        display: "flex",
        flexDirection: "row",
        marginTop: 40,
        marginLeft: 10
    },

    profilePic: {
        margin: 10,
        width: 40,
        height: 40,
        borderRadius: 50,
    },

    settings: {
        width: 20,
        height: 20
    },


    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    navBar: {
        display: "flex",

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
        width: 190,
        fontSize: 10,
    },

    alertText: {
        marginLeft: 20,
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