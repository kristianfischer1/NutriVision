import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.loginScreen}
      locations={[0, 0.6, 0.71, 1]}
      colors={["#145923", "#25ac58", "#0ca42d", "#1e6e22"]}
    >
      <Text style={styles.nutrivision}>NutriVision</Text>
      <Text style={styles.pictureYourPlate}>{`Picture your plate.
Power your health.`}</Text>
      <View style={styles.loginScreenChild} />
      <Pressable
        style={styles.newUserSignContainer}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.text}>
          <Text style={styles.newUser}>{`New user? `}</Text>
          <Text style={styles.signUp}>Sign up!</Text>
        </Text>
      </Pressable>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.frameItem} />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/rectangle-5.png")}
        />
      </Pressable>
      <Text style={styles.logIn}>Log In</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.emailAddress, styles.passwordTypo]}>
        Email Address
      </Text>
      <Image
        style={styles.loginScreenItem}
        contentFit="cover"
        source={require("../../../assets/line-1.png")}
      />
      <Image
        style={styles.six1fc4ec7124ed4bf1B75732Icon}
        contentFit="cover"
        source={require("../../../assets/six-1fc4ec7124ed4bf1b757324bf9d038e7-3.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    color: Color.colorGray_300,
    width: 170,
    alignItems: "center",
    display: "flex",
    height: 40,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  nutrivision: {
    top: 110,
    fontSize: FontSize.size_29xl,
    color: "#dce4d5",
    width: 254,
    height: 44,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    marginLeft: -127,
    position: "absolute",
  },
  pictureYourPlate: {
    marginLeft: -150,
    top: 356,
    fontSize: FontSize.size_9xl,
    color: "#e7dfca",
    width: 299,
    height: 73,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  loginScreenChild: {
    top: 476,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSeagreen,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 253,
    height: 255,
    left: "50%",
    marginLeft: -127,
    position: "absolute",
  },
  newUser: {
    color: Color.colorWhite,
  },
  signUp: {
    color: "#213f32",
  },
  text: {
    marginLeft: -64,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  newUserSignContainer: {
    top: 689,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    width: 191,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_8xs,
    height: 41,
  },
  frameItem: {
    marginTop: 16,
    height: 40,
    width: 191,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_8xs,
  },
  rectangleParent: {
    top: 498,
    left: 98,
    width: 194,
    alignItems: "flex-end",
    height: 41,
    position: "absolute",
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_8xs,
    width: "100%",
  },
  wrapper: {
    left: 101,
    top: 611,
    height: 40,
    width: 191,
    position: "absolute",
  },
  logIn: {
    justifyContent: "center",
    width: 170,
    alignItems: "center",
    display: "flex",
    marginLeft: -85,
    top: 611,
    height: 40,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  password: {
    marginLeft: -82,
    top: 555,
    left: "50%",
  },
  emailAddress: {
    top: 499,
    left: 113,
  },
  loginScreenItem: {
    top: 666,
    left: 99,
    height: 0,
    width: 191,
    position: "absolute",
  },
  six1fc4ec7124ed4bf1B75732Icon: {
    top: 186,
    borderRadius: Border.br_125xl,
    width: 169,
    height: 157,
    marginLeft: -85,
    left: "50%",
    position: "absolute",
  },
  loginScreen: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
    width: "100%",
  },
});

export default LoginScreen;
