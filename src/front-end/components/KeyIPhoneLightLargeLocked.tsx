import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type KeyIPhoneLightLargeLockedType = {
  symbol?: string;

  /** Style props */
  keyIPhoneLightLargeLockedPosition?: string;
  keyIPhoneLightLargeLockedBackgroundColor?: string;
  keyIPhoneLightLargeLockedHeight?: number | string;
  keyIPhoneLightLargeLockedWidth?: number | string;
  keyIPhoneLightLargeLockedTop?: number | string;
  keyIPhoneLightLargeLockedRight?: number | string;
  keyIPhoneLightLargeLockedBottom?: number | string;
  keyIPhoneLightLargeLockedLeft?: number | string;
  symbolFontFamily?: string;
  symbolWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const KeyIPhoneLightLargeLocked = ({
  symbol,
  keyIPhoneLightLargeLockedPosition,
  keyIPhoneLightLargeLockedBackgroundColor,
  keyIPhoneLightLargeLockedHeight,
  keyIPhoneLightLargeLockedWidth,
  keyIPhoneLightLargeLockedTop,
  keyIPhoneLightLargeLockedRight,
  keyIPhoneLightLargeLockedBottom,
  keyIPhoneLightLargeLockedLeft,
  symbolFontFamily,
  symbolWidth,
}: KeyIPhoneLightLargeLockedType) => {
  const keyIPhoneLightLargeLockedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", keyIPhoneLightLargeLockedPosition),
      ...getStyleValue(
        "backgroundColor",
        keyIPhoneLightLargeLockedBackgroundColor
      ),
      ...getStyleValue("height", keyIPhoneLightLargeLockedHeight),
      ...getStyleValue("width", keyIPhoneLightLargeLockedWidth),
      ...getStyleValue("top", keyIPhoneLightLargeLockedTop),
      ...getStyleValue("right", keyIPhoneLightLargeLockedRight),
      ...getStyleValue("bottom", keyIPhoneLightLargeLockedBottom),
      ...getStyleValue("left", keyIPhoneLightLargeLockedLeft),
    };
  }, [
    keyIPhoneLightLargeLockedPosition,
    keyIPhoneLightLargeLockedBackgroundColor,
    keyIPhoneLightLargeLockedHeight,
    keyIPhoneLightLargeLockedWidth,
    keyIPhoneLightLargeLockedTop,
    keyIPhoneLightLargeLockedRight,
    keyIPhoneLightLargeLockedBottom,
    keyIPhoneLightLargeLockedLeft,
  ]);

  const symbolStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", symbolFontFamily),
      ...getStyleValue("width", symbolWidth),
    };
  }, [symbolFontFamily, symbolWidth]);

  return (
    <View
      style={[styles.keyIphoneLightLargeLocked, keyIPhoneLightLargeLockedStyle]}
    >
      <View style={[styles.rectangle, styles.symbolPosition]} />
      <Text style={[styles.symbol, styles.symbolPosition, symbolStyle]}>
        {symbol}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  symbolPosition: {
    left: 0,
    position: "absolute",
  },
  rectangle: {
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: Border.br_8xs_6,
    backgroundColor: Color.colorGray_100,
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbol: {
    marginTop: -13,
    top: "50%",
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.sourceSansPro,
    color: Color.colorBlack,
    textAlign: "center",
    width: 32,
  },
  keyIphoneLightLargeLocked: {
    backgroundColor: Color.colorGray_200,
    height: 42,
    width: 32,
  },
});

export default KeyIPhoneLightLargeLocked;
