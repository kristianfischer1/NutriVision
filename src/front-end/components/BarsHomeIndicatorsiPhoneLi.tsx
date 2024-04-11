import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

export type BarsHomeIndicatorsiPhoneLiType = {
  /** Style props */
  barsHomeIndicatorsiPhoneLPosition?: string;
  barsHomeIndicatorsiPhoneLBackgroundColor?: string;
  barsHomeIndicatorsiPhoneLHeight?: number | string;
  barsHomeIndicatorsiPhoneLWidth?: number | string;
  barsHomeIndicatorsiPhoneLTop?: number | string;
  barsHomeIndicatorsiPhoneLRight?: number | string;
  barsHomeIndicatorsiPhoneLBottom?: number | string;
  barsHomeIndicatorsiPhoneLLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BarsHomeIndicatorsiPhoneLi = ({
  barsHomeIndicatorsiPhoneLPosition,
  barsHomeIndicatorsiPhoneLBackgroundColor,
  barsHomeIndicatorsiPhoneLHeight,
  barsHomeIndicatorsiPhoneLWidth,
  barsHomeIndicatorsiPhoneLTop,
  barsHomeIndicatorsiPhoneLRight,
  barsHomeIndicatorsiPhoneLBottom,
  barsHomeIndicatorsiPhoneLLeft,
}: BarsHomeIndicatorsiPhoneLiType) => {
  const barsHomeIndicatorsiPhoneLiStyle = useMemo(() => {
    return {
      ...getStyleValue("position", barsHomeIndicatorsiPhoneLPosition),
      ...getStyleValue(
        "backgroundColor",
        barsHomeIndicatorsiPhoneLBackgroundColor
      ),
      ...getStyleValue("height", barsHomeIndicatorsiPhoneLHeight),
      ...getStyleValue("width", barsHomeIndicatorsiPhoneLWidth),
      ...getStyleValue("top", barsHomeIndicatorsiPhoneLTop),
      ...getStyleValue("right", barsHomeIndicatorsiPhoneLRight),
      ...getStyleValue("bottom", barsHomeIndicatorsiPhoneLBottom),
      ...getStyleValue("left", barsHomeIndicatorsiPhoneLLeft),
    };
  }, [
    barsHomeIndicatorsiPhoneLPosition,
    barsHomeIndicatorsiPhoneLBackgroundColor,
    barsHomeIndicatorsiPhoneLHeight,
    barsHomeIndicatorsiPhoneLWidth,
    barsHomeIndicatorsiPhoneLTop,
    barsHomeIndicatorsiPhoneLRight,
    barsHomeIndicatorsiPhoneLBottom,
    barsHomeIndicatorsiPhoneLLeft,
  ]);

  return (
    <View
      style={[
        styles.barshomeIndicatorsiphoneli,
        barsHomeIndicatorsiPhoneLiStyle,
      ]}
    >
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    height: 5,
    width: 134,
  },
  barshomeIndicatorsiphoneli: {
    backgroundColor: Color.colorWhite,
    height: 34,
    width: 134,
  },
});

export default BarsHomeIndicatorsiPhoneLi;
