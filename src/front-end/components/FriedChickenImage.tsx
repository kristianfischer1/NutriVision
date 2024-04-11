import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

export type FriedChickenImageType = {
  friedChickenImageFriedChi?: ImageSourcePropType;

  /** Style props */
  friedChickenIconPosition?: string;
  friedChickenIconWidth?: number | string;
  friedChickenIconTop?: number | string;
  friedChickenIconLeft?: number | string;
  friedChickenIconHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FriedChickenImage = ({
  friedChickenImageFriedChi,
  friedChickenIconPosition,
  friedChickenIconWidth,
  friedChickenIconTop,
  friedChickenIconLeft,
  friedChickenIconHeight,
}: FriedChickenImageType) => {
  const friedChickenIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", friedChickenIconPosition),
      ...getStyleValue("width", friedChickenIconWidth),
      ...getStyleValue("top", friedChickenIconTop),
      ...getStyleValue("left", friedChickenIconLeft),
      ...getStyleValue("height", friedChickenIconHeight),
    };
  }, [
    friedChickenIconPosition,
    friedChickenIconWidth,
    friedChickenIconTop,
    friedChickenIconLeft,
    friedChickenIconHeight,
  ]);

  return (
    <Image
      style={[styles.friedChickenIcon, friedChickenIconStyle]}
      contentFit="cover"
      source={friedChickenImageFriedChi}
    />
  );
};

const styles = StyleSheet.create({
  friedChickenIcon: {
    width: 180,
    height: 180,
  },
});

export default FriedChickenImage;
