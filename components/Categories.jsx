import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Category from "./Category";

export default Categories = () => {
    categories = [<Category category={"Accidents"}/>, <Category category={"Fire"}/>, <Category category={"Injury"}/>,
                <Category category={"UCPD"}/>]

    return(
        <View>
            <Text style={styles.textCategory}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categories}>
                    {categories}
                </View>
            </ScrollView>
        </View>


    )
}

const styles = new StyleSheet.create({
    categories: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems:"center"
    },
    textCategory: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        fontFamily: "GilroyBold",
        fontSize: 20
    }
})