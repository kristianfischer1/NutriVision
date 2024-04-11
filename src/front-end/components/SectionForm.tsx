import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const SectionForm = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.groupParent}
      onPress={() => navigation.navigate("ClickedOnMeal")}
    >
      <View style={[styles.rectangleParent, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupChild, styles.groupPosition]} />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
      </View>
      <Pressable
        style={[styles.groupContainer, styles.groupPosition]}
        onPress={() => navigation.navigate("ClickedOnMeal")}
      >
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={styles.rectangleContainer}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <View style={[styles.groupChild, styles.groupPosition]} />
          </View>
        </View>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 99,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    width: 227,
    left: 128,
    height: 99,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGray_500,
    top: 0,
    width: 99,
    height: 99,
    left: 0,
  },
  rectangleParent: {
    width: 99,
    height: 99,
    left: 0,
    top: 121,
  },
  rectangleContainer: {
    left: 128,
    top: 0,
    height: 99,
    width: 99,
    position: "absolute",
  },
  rectangleGroup: {
    top: 121,
  },
  groupView: {
    top: 0,
    width: 99,
    height: 99,
    left: 0,
  },
  rectangleParent1: {
    top: 0,
  },
  groupContainer: {
    top: 0,
    height: 99,
    left: 0,
    width: 355,
  },
  groupParent: {
    top: 438,
    left: 18,
    height: 220,
    width: 355,
    position: "absolute",
  },
});

export default SectionForm;
