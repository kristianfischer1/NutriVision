import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProteinContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={styles.fatWrapper}>
        <Text style={[styles.fat, styles.fatTypo]}>Fat</Text>
      </View>
      <Text style={[styles.carbs, styles.fatTypo]}>Carbs</Text>
      <Text style={[styles.g, styles.gTypo]}>0 / 000g</Text>
      <Text style={[styles.g1, styles.gTypo]}>0 / 00g</Text>
      <Text style={[styles.g2, styles.gTypo]}>0 / 000g</Text>
      <Text style={[styles.protein, styles.fatTypo]}>Protein</Text>
      <View style={[styles.groupItem, styles.groupLayout]} />
      <View style={[styles.groupInner, styles.groupLayout]} />
      <View style={[styles.rectangleView, styles.groupLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 81,
    width: 351,
    left: "50%",
    position: "absolute",
  },
  fatTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.1,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  gTypo: {
    fontSize: FontSize.size_xs,
    top: 54,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.1,
    position: "absolute",
  },
  groupLayout: {
    height: 7,
    width: 67,
    backgroundColor: Color.colorGray_500,
    borderRadius: Border.br_6xl,
    top: 41,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -175.5,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_400,
    top: 0,
  },
  fat: {
    left: 1,
    top: 0,
  },
  fatWrapper: {
    left: 288,
    width: 23,
    height: 20,
    top: 15,
    position: "absolute",
  },
  carbs: {
    left: 28,
    top: 15,
  },
  g: {
    left: 22,
  },
  g1: {
    left: 278,
  },
  g2: {
    marginLeft: -26.5,
    left: "50%",
  },
  protein: {
    marginLeft: -23.5,
    top: 15,
    left: "50%",
  },
  groupItem: {
    left: 16,
  },
  groupInner: {
    marginLeft: -33.5,
    left: "50%",
  },
  rectangleView: {
    left: 267,
  },
  rectangleParent: {
    marginLeft: -175,
    top: 381,
  },
});

export default ProteinContainer;
