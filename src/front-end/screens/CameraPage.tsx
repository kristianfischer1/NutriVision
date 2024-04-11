import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CameraPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.cameraPage, styles.iconLayout]}>
      <View style={[styles.cameraPageChild, styles.cameraPosition]} />
      <Image
        style={[styles.frameIcon, styles.frameIconPosition1]}
        contentFit="cover"
        source={require("../../../assets/frame.png")}
      />
      <View style={[styles.frame, styles.frameLayout]}>
        <Pressable
          style={styles.user}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../../assets/user.png")}
          />
        </Pressable>
        <View
          style={[styles.nutrivisionWrapper, styles.cameraPageItemShadowBox]}
        >
          <Text style={styles.nutrivision}>NutriVision</Text>
        </View>
      </View>
      <Image
        style={[styles.frameIcon1, styles.frameIconPosition1]}
        contentFit="cover"
        source={require("../../../assets/frame1.png")}
      />
      <View style={[styles.cameraPageItem, styles.cameraPageItemShadowBox]} />
      <Image
        style={[styles.frameIcon2, styles.frameIconPosition1]}
        contentFit="cover"
        source={require("../../../assets/frame2.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../../../assets/frame3.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../../../assets/frame4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  cameraPosition: {
    width: 390,
    backgroundColor: Color.colorGray_400,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  frameIconPosition1: {
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    width: 302,
    left: 44,
  },
  cameraPageItemShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameIconPosition: {
    height: 44,
    top: 751,
    position: "absolute",
    overflow: "hidden",
  },
  cameraPageChild: {
    top: 0,
    height: 103,
  },
  frameIcon: {
    top: 56,
    left: 21,
    width: 348,
    height: 20,
  },
  icon: {
    height: "100%",
  },
  user: {
    width: 34,
    height: 33,
  },
  nutrivision: {
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorSnow,
    textAlign: "center",
    width: 255,
    height: 56,
  },
  nutrivisionWrapper: {
    width: 289,
    justifyContent: "flex-end",
    paddingTop: 4,
    height: 56,
  },
  frame: {
    top: 47,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon1: {
    top: 103,
    left: -27,
    width: 444,
    height: 612,
  },
  cameraPageItem: {
    top: 701,
    height: 143,
    width: 390,
    backgroundColor: Color.colorGray_400,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  frameIcon2: {
    top: 720,
    left: 142,
    width: 106,
    height: 105,
  },
  frameIcon3: {
    left: 43,
    width: 304,
  },
  frameIcon4: {
    width: 302,
    left: 44,
  },
  cameraPage: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 844,
  },
});

export default CameraPage;
