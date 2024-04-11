import * as React from "react";
import { StyleSheet, View, Text, Pressable, Linking } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LogoutFormContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <View style={[styles.vectorParent, styles.groupPosition]}>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../../../assets/rectangle-6.png")}
        />
        <Pressable
          style={styles.logOutPosition}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.logOut1Typo}>Log out</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.vectorGroup, styles.groupPosition]}
        onPress={() => Linking.openURL("https://forms.gle/uZLdepR8xNM4anrh6")}
      >
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../../../assets/rectangle-6.png")}
        />
        <Text style={[styles.feedback, styles.logOut1Typo]}>Feedback</Text>
        <Image
          style={styles.fiSsRedoIcon}
          contentFit="cover"
          source={require("../../../assets/fissredo.png")}
        />
      </Pressable>
      <Image
        style={styles.six1fc4ec7124ed4bf1B75732Icon}
        contentFit="cover"
        source={require("../../../assets/six-1fc4ec7124ed4bf1b757324bf9d038e7-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 45,
    width: 268,
    marginLeft: -134,
    left: "50%",
    position: "absolute",
  },
  logOut1Typo: {
    height: 30,
    width: 118,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xl,
    marginLeft: -59,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_400,
    top: 0,
    height: 364,
    width: 348,
    left: "50%",
    marginLeft: -174,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    width: 268,
    marginLeft: -134,
    top: 0,
  },
  logOutPosition: {
    top: 8,
    left: "50%",
    position: "absolute",
  },
  vectorParent: {
    top: 36,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 268,
    marginLeft: -134,
  },
  feedback: {
    top: 8,
    left: "50%",
    position: "absolute",
  },
  fiSsRedoIcon: {
    top: 15,
    left: 199,
    width: 15,
    height: 15,
    overflow: "hidden",
    position: "absolute",
  },
  vectorGroup: {
    top: 104,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 268,
    marginLeft: -134,
  },
  six1fc4ec7124ed4bf1B75732Icon: {
    marginLeft: -84,
    top: 175,
    borderRadius: Border.br_125xl,
    width: 169,
    height: 157,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 447,
    height: 364,
    width: 348,
    marginLeft: -174,
    left: "50%",
    position: "absolute",
  },
});

export default LogoutFormContainer;
