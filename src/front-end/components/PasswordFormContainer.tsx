import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type PasswordFormContainerType = {
  userInputText?: string;

  /** Style props */
  ageTop?: number | string;
  propMarginLeft?: number | string;
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordFormContainer = ({
  userInputText,
  ageTop,
  propMarginLeft,
  propTop,
}: PasswordFormContainerType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", ageTop),
    };
  }, [ageTop]);

  const ageStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("top", propTop),
    };
  }, [propMarginLeft, propTop]);

  return (
    <View
      style={[styles.frameParent, styles.frameParentLayout, groupViewStyle]}
    >
      <View style={[styles.rectangleWrapper, styles.agePosition]}>
        <View style={styles.frameChild} />
      </View>
      <Text style={[styles.age, styles.agePosition, ageStyle]}>
        {userInputText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    width: 194,
    height: 41,
  },
  agePosition: {
    top: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 191,
    height: 41,
  },
  rectangleWrapper: {
    left: 0,
    alignItems: "flex-end",
    height: 41,
    width: 194,
  },
  age: {
    marginLeft: -81,
    left: "50%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorGray_300,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 170,
    height: 40,
  },
  frameParent: {
    top: 555,
    left: 96,
    height: 41,
    position: "absolute",
    width: 194,
  },
});

export default PasswordFormContainer;
