import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ProteinContainer from "../components/ProteinContainer";
import DataFilterContainer from "../components/DataFilterContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FriedChickenImage from "../components/FriedChickenImage";
import DinnerFormContainer from "../components/DinnerFormContainer";
import SaladImage from "../components/SaladImage";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeScreen}>
      <View style={[styles.maskGroupParent, styles.maskGroupPosition]}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../../../assets/mask-group.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>0000</Text>
        <Text style={[styles.text1, styles.textTypo]}>{`0
`}</Text>
        <Text style={[styles.text2, styles.textTypo]}>{`0
`}</Text>
        <Text style={[styles.eaten, styles.goalTypo]}>EATEN</Text>
        <Text style={[styles.calLeft, styles.goalTypo]}>CAL LEFT</Text>
        <Text style={[styles.goal, styles.goalTypo]}>GOAL</Text>
        <Image
          style={styles.calendarIcon}
          contentFit="cover"
          source={require("../../../assets/calendar.png")}
        />
        <Text style={[styles.todayMar07, styles.seeMealsTypo]}>
          TODAY, MAR 07
        </Text>
        <ProteinContainer />
        <DataFilterContainer />
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.recommended000, styles.recommendedTypo]}>
              Recommended: 000 - 000 cal
            </Text>
            <Text style={[styles.snack, styles.snackTypo]}>Snack</Text>
            <Pressable
              style={[styles.wrapper, styles.wrapperLayout]}
              onPress={() => navigation.navigate("CameraPage")}
            >
              <Image
                style={styles.iconLayout1}
                contentFit="cover"
                source={require("../../../assets/group-5.png")}
              />
            </Pressable>
          </View>
          <FriedChickenImage
            friedChickenImageFriedChi={require("../../../assets/fried-chicken.png")}
            friedChickenIconPosition="absolute"
            friedChickenIconWidth={60}
            friedChickenIconTop={9}
            friedChickenIconLeft={10}
            friedChickenIconHeight={64}
          />
        </View>
        <DinnerFormContainer />
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.lunch, styles.snackTypo]}>Lunch</Text>
          <Text style={[styles.recommended0001, styles.recommendedTypo]}>
            Recommended: 000 - 000 cal
          </Text>
          <Pressable
            style={[styles.container, styles.wrapperLayout]}
            onPress={() => navigation.navigate("CameraPage")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../../../assets/group-5.png")}
            />
          </Pressable>
          <SaladImage
            saladImageSalad={require("../../../assets/salad.png")}
            saladIconPosition="absolute"
            saladIconWidth={63}
            saladIconHeight={57}
            saladIconTop={12}
            saladIconLeft={8}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Text style={[styles.breakfast, styles.snackTypo]}>Breakfast</Text>
          <Text style={[styles.recommended0002, styles.recommendedTypo]}>
            Recommended: 000 - 000 cal
          </Text>
          <Pressable
            style={[styles.container, styles.wrapperLayout]}
            onPress={() => navigation.navigate("CameraPage")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../../../assets/group-5.png")}
            />
          </Pressable>
          <Image
            style={[styles.sandwichIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../../assets/sandwich.png")}
          />
        </View>
        <Pressable
          style={[styles.seeMealsParent, styles.seePosition]}
          onPress={() => navigation.navigate("SeeMealsPage")}
        >
          <Text style={[styles.seeMeals, styles.seePosition]}>SEE MEALS</Text>
          <Image
            style={styles.arrowIcon}
            contentFit="cover"
            source={require("../../../assets/arrow.png")}
          />
        </Pressable>
        <Image
          style={[styles.frameChild, styles.todayMar07Position]}
          contentFit="cover"
          source={require("../../../assets/ellipse-1.png")}
        />
        <View style={[styles.nutrivisionParent, styles.nutrivisionPosition]}>
          <Text style={[styles.nutrivision, styles.nutrivisionPosition]}>
            NutriVision
          </Text>
          <Pressable
            style={styles.user}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={[styles.icon3, styles.iconLayout]}
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
  maskGroupPosition: {
    width: 418,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.colorSnow,
  },
  textTypo: {
    height: 43,
    width: 85,
    letterSpacing: 2.2,
    fontSize: FontSize.size_17xl,
    top: 196,
    textAlign: "center",
    color: Color.colorSnow,
    fontFamily: FontFamily.caladeaRegular,
    left: "50%",
    position: "absolute",
  },
  goalTypo: {
    height: 22,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    width: 85,
    textAlign: "center",
    color: Color.colorSnow,
    left: "50%",
    position: "absolute",
  },
  seeMealsTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
  },
  groupPosition: {
    height: 81,
    width: 351,
    marginLeft: -176,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    marginLeft: -175.5,
    height: 81,
    width: 351,
  },
  groupChildPosition: {
    backgroundColor: Color.colorGray_400,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  recommendedTypo: {
    width: 179,
    color: Color.colorSilver,
    letterSpacing: 0.1,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  snackTypo: {
    height: 19,
    width: 93,
    color: Color.colorWhite,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 34,
    width: 34,
    top: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  seePosition: {
    marginLeft: -45,
    height: 21,
    left: "50%",
    position: "absolute",
  },
  todayMar07Position: {
    left: "50%",
    position: "absolute",
  },
  nutrivisionPosition: {
    height: 56,
    left: "50%",
    position: "absolute",
  },
  viewSpaceBlock: {
    marginLeft: -209,
    width: 418,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  parentLayout: {
    width: 53,
    position: "absolute",
  },
  iconPosition: {
    width: 20,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homePosition: {
    height: 16,
    marginLeft: -26.5,
    width: 53,
    color: Color.colorSilver,
    letterSpacing: 0.1,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  maskGroupIcon: {
    left: 0,
    height: 435,
  },
  text: {
    marginLeft: -68,
    top: 186,
    fontSize: FontSize.size_29xl,
    letterSpacing: 2.9,
    width: 136,
    height: 53,
    fontFamily: FontFamily.caladeaRegular,
    textAlign: "center",
    color: Color.colorSnow,
    left: "50%",
    position: "absolute",
  },
  text1: {
    marginLeft: -184,
  },
  text2: {
    marginLeft: 96,
  },
  eaten: {
    top: 237,
    height: 22,
    marginLeft: -184,
  },
  calLeft: {
    marginLeft: -43,
    top: 234,
  },
  goal: {
    top: 237,
    height: 22,
    marginLeft: 96,
  },
  calendarIcon: {
    top: 486,
    left: 142,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  todayMar07: {
    marginLeft: -46,
    top: 484,
    fontSize: FontSize.size_smi,
    letterSpacing: 1.4,
    color: "#adaeb0",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    marginLeft: -175.5,
    height: 81,
    width: 351,
  },
  recommended000: {
    marginLeft: -105.5,
    top: 49,
  },
  snack: {
    marginLeft: -119.5,
    top: 17,
    height: 19,
    width: 93,
    color: Color.colorWhite,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
  },
  wrapper: {
    left: 296,
  },
  rectangleParent: {
    left: "50%",
    position: "absolute",
    top: 0,
  },
  groupParent: {
    top: 824,
  },
  lunch: {
    marginLeft: -118.5,
    top: 17,
    height: 19,
    width: 93,
    color: Color.colorWhite,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
  },
  recommended0001: {
    marginLeft: -102.5,
    top: 48,
  },
  container: {
    left: 297,
  },
  rectangleGroup: {
    top: 623,
  },
  breakfast: {
    marginLeft: -104.5,
    top: 15,
  },
  recommended0002: {
    marginLeft: -100.5,
    top: 46,
  },
  sandwichIcon: {
    height: "56.42%",
    width: "13.68%",
    top: "18.52%",
    right: "82.62%",
    bottom: "25.06%",
    left: "3.7%",
    position: "absolute",
  },
  rectangleContainer: {
    top: 523,
  },
  seeMeals: {
    width: 81,
    height: 21,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    marginLeft: -45,
    color: Color.colorSnow,
    top: 0,
  },
  arrowIcon: {
    marginTop: -2.5,
    top: "50%",
    left: 80,
    width: 10,
    height: 5,
    position: "absolute",
  },
  seeMealsParent: {
    top: 352,
    width: 90,
    height: 21,
  },
  frameChild: {
    marginLeft: -93,
    top: 123,
    width: 185,
    height: 185,
  },
  nutrivision: {
    marginLeft: -144.5,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    width: 255,
    textAlign: "center",
    color: Color.colorSnow,
    top: 0,
  },
  icon3: {
    height: "100%",
    width: "100%",
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
    marginLeft: -128,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 289,
    top: 48,
  },
  maskGroupParent: {
    left: -14,
    height: 781,
  },
  homeScreen: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScreen;
