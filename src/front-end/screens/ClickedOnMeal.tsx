import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import NutritionalValueContainer from "../components/NutritionalValueContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ClickedOnMeal = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.clickedOnMeal, styles.iconLayout]}>
      <View style={styles.frame}>
        <Text style={[styles.yourMeal, styles.yourMealLayout]}>YOUR MEAL</Text>
      </View>
      <View style={styles.frame1}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          contentFit="cover"
          source={require("../../../assets/rectangle-16.png")}
        />
        <View style={[styles.frameItem, styles.framePosition]} />
        <NutritionalValueContainer />
        <Text style={[styles.mar072024, styles.framePosition]}>
          MAR 07, 2024 12:00PM
        </Text>
        <Text style={[styles.nutritionalValue, styles.framePosition]}>
          NUTRITIONAL VALUE
        </Text>
      </View>
      <View style={[styles.frame2, styles.framePosition]}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../../../assets/frame5.png")}
        />
        <View style={styles.nutrivisionParent}>
          <Text style={styles.nutrivision}>NutriVision</Text>
          <Pressable
            style={styles.user}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../../assets/user.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  yourMealLayout: {
    height: 24,
    width: 182,
    color: Color.colorSilver,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
  },
  framePosition: {
    left: "50%",
    position: "absolute",
  },
  yourMeal: {
    textAlign: "left",
  },
  frame: {
    top: 145,
    width: 198,
    alignItems: "flex-end",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 0,
    marginLeft: -195,
    left: "50%",
    width: 390,
    height: 704,
  },
  frameItem: {
    marginLeft: -173,
    top: 18,
    width: 346,
    height: 296,
    backgroundColor: Color.colorGray_500,
  },
  mar072024: {
    marginLeft: -91,
    top: 353,
    textAlign: "center",
    height: 24,
    width: 182,
    color: Color.colorSilver,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
  },
  nutritionalValue: {
    marginLeft: -125,
    top: 388,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.2,
    color: Color.colorWhite,
    width: 250,
    height: 27,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
  },
  frame1: {
    top: 175,
    height: 704,
    width: 390,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    width: 12,
    height: 26,
    overflow: "hidden",
  },
  nutrivision: {
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorSnow,
    width: 255,
    height: 56,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  user: {
    width: 34,
    height: 33,
  },
  nutrivisionParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    marginLeft: 17,
    height: 56,
    flexDirection: "row",
  },
  frame2: {
    backgroundColor: Color.colorGray_400,
    height: 103,
    paddingHorizontal: 22,
    paddingTop: 47,
    flexDirection: "row",
    top: 0,
    marginLeft: -195,
    left: "50%",
    width: 390,
    overflow: "hidden",
  },
  clickedOnMeal: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorGray_500,
  },
});

export default ClickedOnMeal;
