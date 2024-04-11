import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DataFilterContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={[styles.groupItem, styles.groupLayout]} />
      <View style={[styles.groupInner, styles.groupLayout]} />
      <View style={[styles.rectangleView, styles.groupLayout]} />
      <View style={[styles.groupChild1, styles.groupLayout]} />
      <Text style={[styles.dailyAverage, styles.keepItUpLayout]}>
        DAILY AVERAGE
      </Text>
      <Text style={[styles.keepItUp, styles.keepItUpLayout]}>Keep it up!</Text>
      <Text style={styles.withinTheLast}>Within the last 7 days</Text>
      <Text style={[styles.carbs, styles.fatTypo]}>CARBS</Text>
      <Text style={[styles.fat, styles.fatTypo]}>FAT</Text>
      <Text style={[styles.protein, styles.fatTypo]}>PROTEIN</Text>
      <Text style={[styles.cals, styles.fatTypo]}>CALS</Text>
      <Text style={[styles.cal, styles.gTypo]}>0/0000 CAL</Text>
      <Text style={[styles.g, styles.gTypo]}>0/000 G</Text>
      <Text style={[styles.g1, styles.gTypo]}>0/000 G</Text>
      <Text style={[styles.g2, styles.gTypo]}>0/000 G</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 318,
    width: 351,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 5,
    width: 284,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_6xl,
    marginLeft: -141.5,
    left: "50%",
    position: "absolute",
  },
  keepItUpLayout: {
    height: 31,
    width: 162,
    textAlign: "center",
    letterSpacing: -0.2,
    left: 94,
    position: "absolute",
  },
  fatTypo: {
    height: 24,
    width: 64,
    textAlign: "left",
    left: 34,
    color: Color.colorSilver,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  gTypo: {
    width: 105,
    textAlign: "right",
    left: 213,
    height: 24,
    color: Color.colorSilver,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -175.5,
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_400,
  },
  groupItem: {
    top: 107,
  },
  groupInner: {
    top: 162,
  },
  rectangleView: {
    top: 236,
  },
  groupChild1: {
    top: 197,
  },
  dailyAverage: {
    top: 18,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    width: 162,
    textAlign: "center",
    letterSpacing: -0.2,
    left: 94,
  },
  keepItUp: {
    top: 266,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.caladeaRegular,
    color: Color.colorForestgreen,
    width: 162,
    textAlign: "center",
    letterSpacing: -0.2,
    left: 94,
  },
  withinTheLast: {
    top: 49,
    color: Color.colorSilver,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    height: 31,
    width: 162,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: 94,
    position: "absolute",
  },
  carbs: {
    top: 142,
  },
  fat: {
    top: 211,
  },
  protein: {
    top: 178,
  },
  cals: {
    top: 88,
  },
  cal: {
    top: 86,
  },
  g: {
    top: 141,
  },
  g1: {
    top: 178,
  },
  g2: {
    top: 211,
  },
  rectangleParent: {
    marginLeft: -176,
    top: 941,
  },
});

export default DataFilterContainer;
