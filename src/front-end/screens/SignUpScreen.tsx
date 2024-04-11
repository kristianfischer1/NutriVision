import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import PasswordFormContainer from "../components/PasswordFormContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.signUpScreen}
      locations={[0, 0.6, 0.71, 1]}
      colors={["#145923", "#25ac58", "#0ca42d", "#1e6e22"]}
    >
      <Text style={styles.signUp}>Sign Up</Text>
      <View style={styles.signUpScreenChild} />
      <PasswordFormContainer
        userInputText="Email Address"
        ageTop={441}
        propMarginLeft={-85}
        propTop={1}
      />
      <Pressable
        style={styles.vectorParent}
        onPress={() => navigation.navigate("Personal")}
      >
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../../../assets/rectangle-5.png")}
        />
        <Text style={styles.continue}>Continue</Text>
      </Pressable>
      <Text style={[styles.enterAValid, styles.step1Typo]}>
        Enter a valid email address and create a password to keep your account
        secure.
      </Text>
      <Text style={[styles.step1, styles.step1Typo]}>Step 1</Text>
      <PasswordFormContainer
        userInputText="Password"
        ageTop={493}
        propMarginLeft={-85}
        propTop={1}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  step1Typo: {
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  signUp: {
    marginLeft: -101,
    top: 285,
    fontSize: FontSize.size_29xl,
    color: Color.colorGainsboro_100,
    width: 202,
    height: 71,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  signUpScreenChild: {
    marginLeft: -127,
    top: 422,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 248,
    height: 189,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_8xs,
    top: 0,
    height: 40,
    width: 191,
    position: "absolute",
  },
  continue: {
    marginLeft: -84.5,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    top: 0,
    height: 40,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  vectorParent: {
    top: 545,
    left: 98,
    height: 40,
    width: 191,
    position: "absolute",
  },
  enterAValid: {
    marginLeft: -152,
    top: 363,
    color: Color.colorBlack,
    width: 304,
    height: 52,
  },
  step1: {
    marginLeft: -99,
    top: 255,
    color: Color.colorDarkseagreen,
    width: 198,
    height: 30,
  },
  signUpScreen: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default SignUpScreen;
