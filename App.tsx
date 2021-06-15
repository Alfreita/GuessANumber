import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumer] = useState<any>();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumer(null);
  };
  const startGamehandler = (selectedNumber: any) => {
    setUserNumer(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds: any) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGamehandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGame}
      />
    );
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
