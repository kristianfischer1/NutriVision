import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SystemKeyboardsiPhoneLight from "../components/SystemKeyboardsiPhoneLight";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Chatbot = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [messageTextVisible, setMessageTextVisible] = useState(false);

  const openMessageText = useCallback(() => {
    setMessageTextVisible(true);
  }, []);

  const closeMessageText = useCallback(() => {
    setMessageTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.chatbot}>
        <View style={styles.chatbotChild} />
        <View style={styles.nutrivisionParent}>
          <Text style={styles.nutrivision}>NutriVision</Text>
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
        </View>
        <View style={[styles.chatbotInner, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <Text style={[styles.you, styles.youTypo]}>You</Text>
        <Text style={[styles.hiCanYou, styles.okTypo]}>
          Hi, can you please give me some healthy recipes?
        </Text>
        <Text style={[styles.ok, styles.okTypo]}>Ok.</Text>
        <Text style={[styles.healthAssistant, styles.youTypo]}>
          Health Assistant
        </Text>
        <View style={styles.groupParent}>
          <View style={styles.groupPosition}>
            <View style={[styles.groupInner, styles.groupPosition]} />
            <Pressable
              style={[styles.message, styles.wrapperPosition]}
              onPress={openMessageText}
            >
              <Text style={styles.message1}>Message</Text>
            </Pressable>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../../../assets/group-44.png")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={messageTextVisible}>
        <View style={styles.messageTextOverlay}>
          <Pressable style={styles.messageTextBg} onPress={closeMessageText} />
          <SystemKeyboardsiPhoneLight onClose={closeMessageText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChildPosition: {
    height: 676,
    width: 390,
    left: "50%",
    marginLeft: -195,
    position: "absolute",
  },
  groupItemLayout: {
    width: 418,
    marginLeft: -209,
  },
  wrapperPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    width: 20,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    height: 16,
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0.1,
    fontSize: FontSize.size_2xs,
    marginLeft: -26.5,
    width: 53,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  groupIconLayout: {
    height: 37,
    position: "absolute",
  },
  youTypo: {
    height: 30,
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    left: 30,
    fontWeight: "700",
    position: "absolute",
  },
  okTypo: {
    height: 53,
    width: 315,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    width: 352,
    height: 53,
    top: 0,
    position: "absolute",
  },
  chatbotChild: {
    height: 103,
    width: 390,
    marginLeft: -195,
    backgroundColor: Color.colorGray_400,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  nutrivision: {
    marginLeft: -144.5,
    fontSize: FontSize.size_9xl,
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorSnow,
    width: 255,
    textAlign: "center",
    fontWeight: "700",
    height: 56,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  user: {
    left: "88.24%",
    top: "7.14%",
    right: "0%",
    bottom: "33.93%",
    width: "11.76%",
    height: "58.93%",
    position: "absolute",
  },
  nutrivisionParent: {
    marginLeft: -145,
    top: 47,
    width: 289,
    height: 56,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorSnow,
    top: 0,
    height: 676,
  },
  chatbotInner: {
    top: 103,
  },
  you: {
    top: 130,
    width: 93,
  },
  hiCanYou: {
    top: 160,
    left: 30,
    width: 315,
  },
  ok: {
    top: 246,
    left: 32,
  },
  healthAssistant: {
    top: 216,
    width: 164,
  },
  groupInner: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGainsboro_200,
  },
  messageTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  messageTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  message1: {
    marginLeft: -164.7,
    width: 327,
    height: 31,
    textAlign: "left",
    color: Color.colorBlack,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
  },
  message: {
    top: 12,
  },
  groupIcon: {
    top: 8,
    left: 306,
    width: 37,
  },
  groupParent: {
    top: 707,
    left: 19,
    width: 352,
    height: 53,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  chatbot: {
    backgroundColor: Color.colorGray_500,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Chatbot;
