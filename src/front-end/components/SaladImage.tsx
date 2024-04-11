import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

export type SaladImageType = {
  saladImageSalad?: ImageSourcePropType;

  /** Style props */
  saladIconPosition?: string;
  saladIconWidth?: number | string;
  saladIconHeight?: number | string;
  saladIconTop?: number | string;
  saladIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SaladImage = ({
  saladImageSalad,
  saladIconPosition,
  saladIconWidth,
  saladIconHeight,
  saladIconTop,
  saladIconLeft,
}: SaladImageType) => {
  const saladIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", saladIconPosition),
      ...getStyleValue("width", saladIconWidth),
      ...getStyleValue("height", saladIconHeight),
      ...getStyleValue("top", saladIconTop),
      ...getStyleValue("left", saladIconLeft),
    };
  }, [
    saladIconPosition,
    saladIconWidth,
    saladIconHeight,
    saladIconTop,
    saladIconLeft,
  ]);

  return (
    <Image
      style={[styles.saladIcon, saladIconStyle]}
      contentFit="cover"
      source={saladImageSalad}
    />
  );
};

const styles = StyleSheet.create({
  saladIcon: {
    width: 180,
    height: 177,
  },
});

export default SaladImage;
