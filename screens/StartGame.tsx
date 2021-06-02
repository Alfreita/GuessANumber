import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const StartGame = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The game screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
export default StartGame;
