import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CarolinaContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={styles.groupItem} />
      <Text style={[styles.carolina, styles.carolinaTypo]}>Carolina</Text>
      <Text style={[styles.aranguizDias, styles.carolinaTypo]}>
        Aranguiz Dias
      </Text>
      <Text style={styles.years}>20 years</Text>
      <Text style={[styles.currentWeight, styles.emailAddressTypo]}>
        Current weight
      </Text>
      <Text style={[styles.emailAddress, styles.emailAddressTypo]}>
        Email address
      </Text>
      <Text style={[styles.dailyCalories, styles.emailAddressTypo]}>
        Daily calories
      </Text>
      <Text style={[styles.lbs, styles.lbsTypo]}>130 lbs</Text>
      <Text style={[styles.carolinagmailcom, styles.lbsTypo]}>
        carolina@gmail.com
      </Text>
      <Text style={[styles.cal, styles.lbsTypo]}>0000 cal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 277,
    width: 348,
    marginLeft: -174,
    left: "50%",
    position: "absolute",
  },
  carolinaTypo: {
    height: 28,
    textAlign: "left",
    color: Color.colorSnow,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1.4,
    fontSize: FontSize.size_5xl,
    marginLeft: -144,
    left: "50%",
    position: "absolute",
  },
  emailAddressTypo: {
    height: 23,
    width: 125,
    color: Color.colorWhite,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    left: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  lbsTypo: {
    textAlign: "right",
    height: 23,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_400,
  },
  groupItem: {
    marginLeft: -152,
    top: 119,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDarkslategray_100,
    width: 304,
    height: 2,
    left: "50%",
    position: "absolute",
  },
  carolina: {
    top: 20,
    width: 262,
  },
  aranguizDias: {
    top: 49,
    width: 265,
  },
  years: {
    top: 88,
    height: 18,
    width: 125,
    color: Color.colorWhite,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    left: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  currentWeight: {
    top: 183,
  },
  emailAddress: {
    top: 147,
  },
  dailyCalories: {
    top: 221,
  },
  lbs: {
    top: 186,
    left: 201,
    textAlign: "right",
    width: 125,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
  },
  carolinagmailcom: {
    top: 152,
    left: 129,
    fontSize: FontSize.size_4xs,
    letterSpacing: 0.5,
    width: 197,
  },
  cal: {
    left: 201,
    textAlign: "right",
    width: 125,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mini,
    top: 221,
  },
  rectangleParent: {
    top: 136,
  },
});

export default CarolinaContainer;
