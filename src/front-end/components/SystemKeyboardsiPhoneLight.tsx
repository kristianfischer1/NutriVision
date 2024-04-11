import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import BarsHomeIndicatorsiPhoneLi from "./BarsHomeIndicatorsiPhoneLi";
import KeyIPhoneLightGrayLocked from "./KeyIPhoneLightGrayLocked";
import KeyIPhoneLightLargeLocked from "./KeyIPhoneLightLargeLocked";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type SystemKeyboardsiPhoneLightType = {
  onClose?: () => void;
};

const SystemKeyboardsiPhoneLight = ({
  onClose,
}: SystemKeyboardsiPhoneLightType) => {
  const [messageTextVisible, setMessageTextVisible] = useState(false);

  const openMessageText = useCallback(() => {
    setMessageTextVisible(true);
  }, []);

  const closeMessageText = useCallback(() => {
    setMessageTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.systemkeyboardsiphonelight}>
        <View style={styles.background}>
          <View style={styles.background1} />
        </View>
        <BarsHomeIndicatorsiPhoneLi
          barsHomeIndicatorsiPhoneLPosition="absolute"
          barsHomeIndicatorsiPhoneLBackgroundColor="unset"
          barsHomeIndicatorsiPhoneLHeight="11.68%"
          barsHomeIndicatorsiPhoneLWidth="100%"
          barsHomeIndicatorsiPhoneLTop="88.32%"
          barsHomeIndicatorsiPhoneLRight="0%"
          barsHomeIndicatorsiPhoneLBottom="0%"
          barsHomeIndicatorsiPhoneLLeft="0%"
        />
        <Text style={[styles.text, styles.textTypo]}>􀊰</Text>
        <Text style={[styles.text1, styles.textTypo]}>􀜬</Text>
        <View
          style={[
            styles.systemkeyboardsiphonelightInner,
            styles.groupChildLayout,
          ]}
        >
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Pressable style={styles.message} onPress={openMessageText}>
              <Text style={styles.message1}>Message</Text>
            </Pressable>
            <Image
              style={[styles.groupItem, styles.keysPosition]}
              contentFit="cover"
              source={require("../../../assets/group-45.png")}
            />
          </View>
        </View>
        <View style={[styles.keys, styles.keysPosition]}>
          <View style={[styles.return, styles.pLayout]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../../../assets/rectangle.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>return</Text>
          </View>
          <View style={[styles.space, styles.spaceLayout]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../../../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.spaceLayout]}>space</Text>
          </View>
          <View style={[styles.view, styles.pLayout]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../../../assets/rectangle.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <KeyIPhoneLightGrayLocked
              rectangle={require("../../../assets/rectangle2.png")}
              label=" "
              keyIPhoneLightGrayLockedPosition="absolute"
              keyIPhoneLightGrayLockedBackgroundColor="unset"
              keyIPhoneLightGrayLockedHeight="100%"
              keyIPhoneLightGrayLockedWidth="100%"
              keyIPhoneLightGrayLockedTop="0%"
              keyIPhoneLightGrayLockedRight="0%"
              keyIPhoneLightGrayLockedBottom="0%"
              keyIPhoneLightGrayLockedLeft="0%"
              labelFontFamily="Poppins-Regular"
              labelWidth={44}
            />
            <Image
              style={styles.deleteButtonIcon}
              contentFit="cover"
              source={require("../../../assets/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <KeyIPhoneLightLargeLocked
              symbol=" "
              keyIPhoneLightLargeLockedPosition="absolute"
              keyIPhoneLightLargeLockedBackgroundColor="unset"
              keyIPhoneLightLargeLockedHeight="100%"
              keyIPhoneLightLargeLockedWidth="100%"
              keyIPhoneLightLargeLockedTop="0%"
              keyIPhoneLightLargeLockedRight="0%"
              keyIPhoneLightLargeLockedBottom="0%"
              keyIPhoneLightLargeLockedLeft="0%"
              symbolFontFamily="Poppins-Regular"
              symbolWidth={44}
            />
            <Image
              style={styles.shiftIcon}
              contentFit="cover"
              source={require("../../../assets/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol6, styles.zLayout]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.uLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.uLayout]}>U</Text>
          </View>
          <View style={[styles.y, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.mLayout]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol, styles.symbolTypo]}>Q</Text>
          </View>
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
  textTypo: {
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_8xl,
    bottom: 15,
    position: "absolute",
  },
  groupChildLayout: {
    height: 53,
    left: 0,
    position: "absolute",
    width: 390,
  },
  keysPosition: {
    top: 9,
    position: "absolute",
  },
  pLayout: {
    height: 42,
    left: "50%",
  },
  labelTypo: {
    textAlign: "center",
    lineHeight: 21,
    marginTop: -10,
    top: "50%",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  spaceLayout: {
    width: 190,
    position: "absolute",
  },
  shiftPosition: {
    width: 44,
    top: 108,
    overflow: "hidden",
    height: 42,
    left: "50%",
    position: "absolute",
  },
  mLayout: {
    width: 33,
    position: "absolute",
  },
  symbolTypo: {
    fontSize: FontSize.size_3xl,
    marginTop: -13,
    textAlign: "center",
    top: "50%",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  zLayout: {
    width: 34,
    position: "absolute",
  },
  lPosition: {
    top: 54,
    width: 33,
    height: 42,
    left: "50%",
    position: "absolute",
  },
  uLayout: {
    width: 32,
    position: "absolute",
  },
  background1: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  background: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  text: {
    right: 40,
  },
  text1: {
    left: 26,
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_200,
    top: 0,
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
    marginLeft: -182.5,
    letterSpacing: 0.2,
    width: 362,
    height: 31,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  message: {
    top: 12,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    left: 339,
    width: 37,
    height: 37,
  },
  rectangleParent: {
    top: 0,
  },
  systemkeyboardsiphonelightInner: {
    top: -53,
  },
  rectangleIcon: {
    overflow: "hidden",
    borderRadius: Border.br_8xs_6,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  label: {
    width: 91,
    position: "absolute",
  },
  return: {
    marginLeft: 101,
    width: 91,
    position: "absolute",
    top: 162,
    height: 42,
  },
  label1: {
    textAlign: "center",
    lineHeight: 21,
    marginTop: -10,
    top: "50%",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  space: {
    marginLeft: -95,
    height: 42,
    left: "50%",
    top: 162,
  },
  view: {
    width: 91,
    position: "absolute",
    top: 162,
    height: 42,
    marginLeft: -192,
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    marginLeft: 148,
  },
  shiftIcon: {
    marginTop: -8,
    marginLeft: -10,
    width: 20,
    height: 16,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  shift: {
    marginLeft: -192,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_8xs_6,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  symbol: {
    width: 33,
    position: "absolute",
  },
  m: {
    marginLeft: 100.5,
    top: 108,
    height: 42,
    left: "50%",
  },
  n: {
    marginLeft: 61.5,
    top: 108,
    height: 42,
    left: "50%",
  },
  b: {
    marginLeft: 22.5,
    top: 108,
    height: 42,
    left: "50%",
  },
  v: {
    marginLeft: -16.5,
    top: 108,
    height: 42,
    left: "50%",
  },
  c: {
    marginLeft: -56,
    top: 108,
    height: 42,
    left: "50%",
  },
  x: {
    top: 108,
    height: 42,
    left: "50%",
    marginLeft: -95,
  },
  symbol6: {
    fontSize: FontSize.size_3xl,
    marginTop: -13,
    textAlign: "center",
    top: "50%",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  z: {
    marginLeft: -134,
    top: 108,
    height: 42,
    left: "50%",
  },
  l: {
    marginLeft: 139.5,
  },
  k: {
    marginLeft: 100.5,
  },
  j: {
    marginLeft: 61.5,
  },
  h: {
    marginLeft: 22.5,
  },
  g: {
    marginLeft: -16.5,
  },
  f: {
    marginLeft: -55.5,
  },
  d: {
    marginLeft: -94.5,
  },
  s: {
    marginLeft: -133.5,
  },
  a: {
    marginLeft: -172.5,
  },
  p: {
    marginLeft: 159,
    height: 42,
    left: "50%",
    top: 0,
  },
  o: {
    marginLeft: 120,
    height: 42,
    left: "50%",
    top: 0,
  },
  i: {
    marginLeft: 81,
    height: 42,
    left: "50%",
    top: 0,
  },
  symbol19: {
    fontSize: FontSize.size_3xl,
    marginTop: -13,
    textAlign: "center",
    top: "50%",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
  },
  u: {
    marginLeft: 43,
    height: 42,
    left: "50%",
    top: 0,
  },
  y: {
    marginLeft: 3,
    height: 42,
    left: "50%",
    top: 0,
  },
  t: {
    marginLeft: -36,
    height: 42,
    left: "50%",
    top: 0,
  },
  r: {
    marginLeft: -75,
    height: 42,
    left: "50%",
    top: 0,
  },
  e: {
    marginLeft: -114,
    height: 42,
    left: "50%",
    top: 0,
  },
  w: {
    marginLeft: -153,
    height: 42,
    left: "50%",
    top: 0,
  },
  q: {
    height: 42,
    left: "50%",
    marginLeft: -192,
    top: 0,
  },
  keys: {
    width: 384,
    height: 204,
    marginLeft: -192,
    left: "50%",
  },
  systemkeyboardsiphonelight: {
    backgroundColor: "#ccced3",
    height: 291,
    maxHeight: "100%",
    maxWidth: "100%",
    width: 390,
  },
});

export default SystemKeyboardsiPhoneLight;
