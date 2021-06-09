import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/Game";

export default function App() {
  const [userNumber, setUserNumer] = useState();

  const startGamehandler = (selectedNumber: any) => {
    setUserNumer(selectedNumber);
  };
  let content = <StartGameScreen onStartGame={startGamehandler} />;
  
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
