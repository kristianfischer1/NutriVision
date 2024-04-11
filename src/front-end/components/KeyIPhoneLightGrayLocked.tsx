import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

export type KeyIPhoneLightGrayLockedType = {
  rectangle?: ImageSourcePropType;
  label?: string;

  /** Style props */
  keyIPhoneLightGrayLockedPosition?: string;
  keyIPhoneLightGrayLockedBackgroundColor?: string;
  keyIPhoneLightGrayLockedHeight?: number | string;
  keyIPhoneLightGrayLockedWidth?: number | string;
  keyIPhoneLightGrayLockedTop?: number | string;
  keyIPhoneLightGrayLockedRight?: number | string;
  keyIPhoneLightGrayLockedBottom?: number | string;
  keyIPhoneLightGrayLockedLeft?: number | string;
  labelFontFamily?: string;
  labelWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const KeyIPhoneLightGrayLocked = ({
  rectangle,
  label,
  keyIPhoneLightGrayLockedPosition,
  keyIPhoneLightGrayLockedBackgroundColor,
  keyIPhoneLightGrayLockedHeight,
  keyIPhoneLightGrayLockedWidth,
  keyIPhoneLightGrayLockedTop,
  keyIPhoneLightGrayLockedRight,
  keyIPhoneLightGrayLockedBottom,
  keyIPhoneLightGrayLockedLeft,
  labelFontFamily,
  labelWidth,
}: KeyIPhoneLightGrayLockedType) => {
  const keyIPhoneLightGrayLockedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", keyIPhoneLightGrayLockedPosition),
      ...getStyleValue(
        "backgroundColor",
        keyIPhoneLightGrayLockedBackgroundColor
      ),
      ...getStyleValue("height", keyIPhoneLightGrayLockedHeight),
      ...getStyleValue("width", keyIPhoneLightGrayLockedWidth),
      ...getStyleValue("top", keyIPhoneLightGrayLockedTop),
      ...getStyleValue("right", keyIPhoneLightGrayLockedRight),
      ...getStyleValue("bottom", keyIPhoneLightGrayLockedBottom),
      ...getStyleValue("left", keyIPhoneLightGrayLockedLeft),
    };
  }, [
    keyIPhoneLightGrayLockedPosition,
    keyIPhoneLightGrayLockedBackgroundColor,
    keyIPhoneLightGrayLockedHeight,
    keyIPhoneLightGrayLockedWidth,
    keyIPhoneLightGrayLockedTop,
    keyIPhoneLightGrayLockedRight,
    keyIPhoneLightGrayLockedBottom,
    keyIPhoneLightGrayLockedLeft,
  ]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", labelFontFamily),
      ...getStyleValue("width", labelWidth),
    };
  }, [labelFontFamily, labelWidth]);

  return (
    <View
      style={[styles.keyIphoneLightGrayLocked, keyIPhoneLightGrayLockedStyle]}
    >
      <Image
        style={[styles.rectangleIcon, styles.labelPosition]}
        contentFit="cover"
        source={rectangle}
      />
      <Text style={[styles.label, styles.labelPosition, labelStyle]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelPosition: {
    left: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: Border.br_8xs_6,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  label: {
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorBlack,
    textAlign: "center",
    width: 32,
  },
  keyIphoneLightGrayLocked: {
    backgroundColor: Color.colorGray_200,
    height: 42,
    width: 32,
  },
});

export default KeyIPhoneLightGrayLocked;
