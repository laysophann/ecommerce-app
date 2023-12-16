import * as React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
      <Image source={require("../assets/favicon.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
  logo: {
    resizeMode: "contain",
    width: 300,
    height: 100,
  },
  bgLogo: {
    resizeMode: "contain",
    width: 300,
    height: 100,
    opacity: 0.5,
  },
});
