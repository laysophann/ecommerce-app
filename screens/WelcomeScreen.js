import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const onPressFunction = () => {
    navigation.navigate("Subscribe");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Little Lemon, your local {"\n"} Mediterranean Bistro
      </Text>
      <Pressable style={styles.button} onPress={onPressFunction}>
        <Text style={styles.textButton}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontWeight: "bold",
  },
  logo: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
