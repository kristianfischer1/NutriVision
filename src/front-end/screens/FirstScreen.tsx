import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const FirstScreen = () => {
  return (
    <LinearGradient
      style={styles.firstScreen}
      locations={[0, 0.6, 0.71, 1]}
      colors={["#145923", "#25ac58", "#0ca42d", "#1e6e22"]}
    >
      <Text style={[styles.nutrivision, styles.nutrivisionPosition]}>
        NutriVision
      </Text>
      <Image
        style={[
          styles.six1fc4ec7124ed4bf1B75732Icon,
          styles.nutrivisionPosition,
        ]}
        contentFit="cover"
        source={require("../../../assets/six-1fc4ec7124ed4bf1b757324bf9d038e7-1.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  nutrivisionPosition: {
    left: "50%",
    position: "absolute",
  },
  nutrivision: {
    marginLeft: -128,
    top: 518,
    fontSize: FontSize.size_29xl,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: "#eee3cf",
    textAlign: "left",
    width: 255,
    height: 56,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  six1fc4ec7124ed4bf1B75732Icon: {
    marginLeft: -123,
    top: 251,
    borderRadius: Border.br_125xl,
    width: 246,
    height: 238,
  },
  firstScreen: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default FirstScreen;
