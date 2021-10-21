import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const SingleUserContent = (props) => {
    const userdetail = props.route.params; 
    console.log(userdetail)
    return(
    <View style={[styles.container, styles.horizontal]}>
        <Text>Works</Text>
    </View>
    );
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default SingleUserContent;