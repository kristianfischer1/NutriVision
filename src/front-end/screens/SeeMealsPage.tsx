import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SectionForm from "../components/SectionForm";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SeeMealsPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.seeMealsPage}>
      <Image
        style={[styles.seeMealsPageChild, styles.seeLayout]}
        contentFit="cover"
        source={require("../../../assets/rectangle-14.png")}
      />
      <Text style={styles.yourMeals}>YOUR MEALS</Text>
      <View style={[styles.seeMealsPageItem, styles.groupChild15Position]} />
      <View style={styles.nutrivisionParent}>
        <Text style={styles.nutrivision}>NutriVision</Text>
        <Pressable
          style={styles.user}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../../../assets/user.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() => navigation.navigate("ClickedOnMeal")}
      >
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupContainer, styles.groupLayout]}
        onPress={() => navigation.navigate("ClickedOnMeal")}
      >
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("ClickedOnMeal")}
      >
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.groupChild, styles.groupChildPosition]} />
          </View>
        </View>
      </Pressable>
      <SectionForm />
      <Pressable
        style={[styles.arrow, styles.arrowLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout1]}
          contentFit="cover"
          source={require("../../../assets/arrow2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  seeLayout: {
    width: 390,
    marginLeft: -195,
  },
  groupChild15Position: {
    backgroundColor: Color.colorGray_400,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  groupLayout: {
    height: 99,
    width: 355,
    left: 18,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    width: 99,
    height: 99,
    top: 0,
    position: "absolute",
  },
  rectanglePosition: {
    left: 128,
    height: 99,
    top: 0,
    position: "absolute",
  },
  groupChild15Layout: {
    width: 418,
    marginLeft: -209,
  },
  wrapperPosition: {
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    width: 53,
    position: "absolute",
  },
  arrowLayout: {
    height: 20,
    position: "absolute",
  },
  homeTypo: {
    height: 16,
    letterSpacing: 0.1,
    fontSize: FontSize.size_2xs,
    marginLeft: -26.5,
    width: 53,
    textAlign: "center",
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    top: 0,
    overflow: "hidden",
  },
  seeMealsPageChild: {
    top: 175,
    height: 699,
    left: "50%",
    position: "absolute",
  },
  yourMeals: {
    marginLeft: -182,
    top: 146,
    fontSize: FontSize.size_base,
    letterSpacing: 0.2,
    textAlign: "left",
    width: 182,
    height: 24,
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  seeMealsPageItem: {
    height: 103,
    width: 390,
    marginLeft: -195,
  },
  nutrivision: {
    marginLeft: -144.5,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorSnow,
    width: 255,
    textAlign: "center",
    height: 56,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  user: {
    left: "88.24%",
    top: "7.14%",
    right: "0%",
    bottom: "33.93%",
    width: "11.76%",
    height: "58.93%",
    position: "absolute",
  },
  nutrivisionParent: {
    marginLeft: -144,
    top: 47,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 289,
    height: 56,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    width: 99,
    backgroundColor: Color.colorGray_500,
    left: 0,
  },
  rectangleParent: {
    width: 99,
  },
  rectangleContainer: {
    width: 99,
  },
  rectangleGroup: {
    width: 227,
  },
  groupParent: {
    top: 196,
  },
  groupContainer: {
    top: 317,
  },
  groupPressable: {
    top: 678,
  },
  icon2: {
    marginTop: -367,
  },
  arrow: {
    top: "50%",
    width: 12,
    left: 18,
    height: 20,
  },
  seeMealsPage: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_500,
  },
});

export default SeeMealsPage;
