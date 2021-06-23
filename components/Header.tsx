import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";
import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props: any) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerANDROID,
        }),
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  title: {
    color: Platform.OS === "ios" ? colors.primary : "white",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerANDROID: {
    backgroundColor: Colors.primary,
  },
});

export default Header;
