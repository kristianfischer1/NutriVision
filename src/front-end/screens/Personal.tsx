import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import PasswordFormContainer from "../components/PasswordFormContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Personal = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.personal}
      locations={[0, 0.6, 0.71, 1]}
      colors={["#145923", "#25ac58", "#0ca42d", "#1e6e22"]}
    >
      <Text style={styles.personal1}>Personal</Text>
      <View style={styles.personalChild} />
      <PasswordFormContainer userInputText="Age" />
      <PasswordFormContainer
        userInputText="Weight (lbs)"
        ageTop={610}
        propMarginLeft={-81}
      />
      <PasswordFormContainer
        userInputText="Last name"
        ageTop={498}
        propMarginLeft={-83}
      />
      <PasswordFormContainer
        userInputText="First name"
        ageTop={441}
        propMarginLeft={-85}
        propTop={1}
      />
      <Pressable
        style={styles.vectorParent}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../../../assets/rectangle-5.png")}
        />
        <View style={styles.completeWrapper}>
          <Text style={styles.complete}>Complete</Text>
        </View>
      </Pressable>
      <Text style={[styles.enterInformationAbout, styles.step2Typo]}>
        Enter information about yourself to complete your NutriVision account
      </Text>
      <Text style={[styles.step2, styles.step2Typo]}>Step 2</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  step2Typo: {
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
  personal1: {
    marginLeft: -121,
    top: 285,
    fontSize: FontSize.size_29xl,
    color: Color.colorGainsboro_100,
    width: 242,
    height: 66,
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
  personalChild: {
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
    width: 254,
    height: 307,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -95.5,
    borderRadius: Border.br_8xs,
    top: 0,
    height: 40,
    width: 191,
    left: "50%",
    position: "absolute",
  },
  complete: {
    marginLeft: -85,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 170,
    top: 0,
    height: 40,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  completeWrapper: {
    marginLeft: -83.5,
    width: 170,
    top: 0,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  vectorParent: {
    marginLeft: -97,
    top: 665,
    height: 40,
    width: 191,
    left: "50%",
    position: "absolute",
  },
  enterInformationAbout: {
    marginLeft: -183,
    top: 369,
    color: Color.colorBlack,
    width: 361,
    height: 41,
  },
  step2: {
    marginLeft: -99,
    top: 255,
    color: Color.colorDarkseagreen,
    width: 198,
    height: 30,
  },
  personal: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});

export default Personal;
