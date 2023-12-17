import React, { useState, useEffect } from "react";

import { Text, StyleSheet, Image, Pressable, TextInput } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Import the validateEmail function
import { validateEmail } from "../utils";

const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!validateEmail(email));
  }, [email]);

  const onPressFunction = () => {
    alert("Thanks for subscribing, Stay tuned!");
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our {"\n"} latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputText}
        placeholder="Type your email"
        onChangeText={setEmail}
      />
      <Pressable
        style={[
          styles.button,
          isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled,
        ]}
        onPress={onPressFunction}
        disabled={isButtonDisabled}
      >
        <Text style={styles.textButton}>Subscribe</Text>
      </Pressable>
    </GestureHandlerRootView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 17,
    textAlign: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  inputText: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonEnabled: {
    backgroundColor: "blue",
  },
  buttonDisabled: {
    backgroundColor: "gray",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
