import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Hotpot from "./Hotpot";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const DinnerFormContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={[styles.recommended000, styles.dinnerTypo]}>
        Recommended: 000 - 000 cal
      </Text>
      <Text style={[styles.dinner, styles.dinnerTypo]}>Dinner</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("CameraPage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/group-5.png")}
        />
      </Pressable>
      <Hotpot
        layer2={require("../../../assets/layer-2.png")}
        hotpotPosition="absolute"
        hotpotWidth={68}
        hotpotHeight={70}
        hotpotTop={6}
        hotpotLeft={3}
        layer2IconHeight="51.71%"
        layer2IconWidth="78.38%"
        layer2IconTop="24.43%"
        layer2IconRight="10.44%"
        layer2IconBottom="23.86%"
        layer2IconLeft="11.18%"
        frameViewTop="98.29%"
        frameViewRight="-10.59%"
        frameViewBottom="-98.29%"
        frameViewLeft="10.59%"
      />
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
  dinnerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -175.5,
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_400,
  },
  recommended000: {
    marginLeft: -103.5,
    top: 53,
    fontSize: FontSize.size_2xs,
    letterSpacing: 0.1,
    color: Color.colorSilver,
    width: 179,
  },
  dinner: {
    marginLeft: -116.5,
    top: 22,
    fontSize: FontSize.size_base,
    letterSpacing: 0.2,
    color: Color.colorWhite,
    width: 93,
    height: 19,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 297,
    top: 24,
    width: 34,
    height: 34,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -176,
    top: 723,
  },
});

export default DinnerFormContainer;
