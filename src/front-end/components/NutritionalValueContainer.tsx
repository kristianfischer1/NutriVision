import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const NutritionalValueContainer = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.cals, styles.calLayout]}>CALS</Text>
        <Text style={[styles.cal, styles.calLayout]}>0/0000 cal</Text>
      </View>
      <View style={[styles.frame1, styles.framePosition]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.carbs, styles.calLayout]}>CARBS</Text>
        <Text style={[styles.cal, styles.calLayout]}>0/000 g</Text>
      </View>
      <View style={[styles.frame2, styles.calLayout]}>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.protein, styles.calLayout]}>PROTEIN</Text>
        <Text style={[styles.cal, styles.calLayout]}>0/000 g</Text>
      </View>
      <View style={[styles.rectangleView, styles.frameLayout]} />
      <View style={[styles.frame3, styles.framePosition]}>
        <Text style={[styles.fat, styles.g2Typo]}>FAT</Text>
        <Text style={[styles.g2, styles.g2Typo]}>0/000 g</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    overflow: "hidden",
    left: 0,
    width: 284,
  },
  frameLayout: {
    height: 5,
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_6xl,
    left: "50%",
    marginLeft: -142,
    width: 284,
    position: "absolute",
  },
  calLayout: {
    height: 24,
    position: "absolute",
  },
  g2Typo: {
    flex: 1,
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
  },
  frameChild: {
    top: 21,
  },
  cals: {
    top: 2,
    width: 64,
    height: 24,
    textAlign: "left",
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    left: 0,
  },
  cal: {
    left: 179,
    width: 105,
    textAlign: "right",
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    height: 24,
    top: 0,
  },
  frame: {
    height: 26,
    overflow: "hidden",
    left: 0,
    position: "absolute",
    top: 0,
  },
  carbs: {
    top: 1,
    width: 64,
    height: 24,
    textAlign: "left",
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    left: 0,
  },
  frame1: {
    top: 55,
    height: 26,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  frameInner: {
    top: 19,
  },
  protein: {
    width: 64,
    height: 24,
    textAlign: "left",
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    left: 0,
    top: 0,
  },
  frame2: {
    top: 92,
    overflow: "hidden",
    left: 0,
    width: 284,
  },
  rectangleView: {
    top: 150,
  },
  fat: {
    textAlign: "left",
    flex: 1,
  },
  g2: {
    marginLeft: 115,
    textAlign: "right",
  },
  frame3: {
    top: 125,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  frameParent: {
    top: 445,
    left: 53,
    height: 155,
    width: 284,
    position: "absolute",
  },
});

export default NutritionalValueContainer;
