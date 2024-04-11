import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import CarolinaContainer from "../components/CarolinaContainer";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import LogoutFormContainer from "../components/LogoutFormContainer";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={styles.profileChild} />
      <View style={[styles.nutrivisionWrapper, styles.nutrivisionLayout]}>
        <Text style={[styles.nutrivision, styles.nutrivisionLayout]}>
          NutriVision
        </Text>
      </View>
      <CarolinaContainer />
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../../../assets/arrow1.png")}
        />
      </Pressable>
      <LogoutFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  nutrivisionLayout: {
    height: 56,
    width: 255,
    left: "50%",
    position: "absolute",
  },
  profileChild: {
    marginLeft: -195,
    backgroundColor: Color.colorGray_400,
    width: 390,
    height: 103,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  nutrivision: {
    marginLeft: -127.5,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorSnow,
    textAlign: "center",
    top: 0,
    width: 255,
  },
  nutrivisionWrapper: {
    marginLeft: -127,
    top: 47,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  icon: {
    marginTop: -366,
    height: "100%",
    width: "100%",
  },
  arrow: {
    left: 21,
    top: "50%",
    width: 12,
    height: 20,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
