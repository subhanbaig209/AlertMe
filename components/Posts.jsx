import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default Posts = () => {
    return(
        <View style={styles.background}>
            <Image style={styles.alert} source={require('../assets/alertRecent.png')} />

            <View style={styles.alertText}>
                <Text style={styles.alertTitle}>Incident on Hutchinson</Text>
                <Text style={styles.alertInfo}>An incident has been reported on Hutchinson Drive in Davis, California. Reports of Mutiple Authorities and an Arrest.</Text>
            </View>
        </View>
    )
}