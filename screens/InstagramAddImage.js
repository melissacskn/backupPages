import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const InstagramAddImage = () => {
  return (
    <View style={styles.instagramAddImage}>
      <View style={[styles.recents, styles.recentsLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <Image
          style={[styles.rectangleIcon1, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle1.png")}
        />
        <Image
          style={[styles.rectangleIcon2, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle2.png")}
        />
        <Image
          style={[styles.rectangleIcon3, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle3.png")}
        />
        <Image
          style={[styles.rectangleIcon4, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle4.png")}
        />
        <Image
          style={[styles.rectangleIcon5, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle5.png")}
        />
        <Image
          style={[styles.rectangleIcon6, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle6.png")}
        />
        <Image
          style={[styles.rectangleIcon7, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle7.png")}
        />
        <Image
          style={[styles.rectangleIcon8, styles.rectangleIconPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle8.png")}
        />
        <Image
          style={[styles.rectangleIcon9, styles.rectangleIconPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle9.png")}
        />
        <Image
          style={[styles.rectangleIcon10, styles.rectangleIconPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle10.png")}
        />
        <Image
          style={[styles.rectangleIcon11, styles.rectangleIconPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle11.png")}
        />
        <Image
          style={[styles.rectangleIcon12, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle12.png")}
        />
        <Image
          style={[styles.rectangleIcon13, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle13.png")}
        />
        <Image
          style={[styles.rectangleIcon14, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle14.png")}
        />
        <View style={[styles.video, styles.rectangleIconPosition]}>
          <Image
            style={[styles.rectangleIcon15, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle15.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>06:23</Text>
        </View>
      </View>
      <View style={[styles.tabBar, styles.tabBarLayout]}>
        <View style={[styles.rectangle, styles.tabBarLayout]} />
        <View style={[styles.tab3, styles.tabPosition]}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.video1, styles.timeTypo]}>Video</Text>
        </View>
        <View style={[styles.tab2, styles.tabPosition]}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.photo, styles.timeTypo]}>Photo</Text>
        </View>
        <View style={[styles.tab1, styles.tabPosition]}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.library, styles.timeTypo]}>Library</Text>
        </View>
      </View>
      <View style={[styles.topBar, styles.barLayout]}>
        <View style={[styles.rectangle4, styles.rectanglePosition]} />
        <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
        <Text style={[styles.recents1, styles.nextLayout]}>Recents</Text>
        <Text style={[styles.next, styles.nextLayout]}>Next</Text>
        <Image
          style={[styles.otherAlbumsIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/other-albums.png")}
        />
      </View>
      <Image
        style={[styles.rectangleIcon16, styles.recentsLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle16.png")}
      />
      <View style={[styles.actions, styles.actionsLayout]}>
        <Image
          style={[styles.boomerangIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/boomerang.png")}
        />
        <Image
          style={[styles.combinePhotosIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/combine-photos.png")}
        />
        <View style={[styles.selectMultiple, styles.actionsLayout]}>
          <View style={[styles.rectangle5, styles.rectanglePosition]} />
          <Text style={[styles.selectMultiple1, styles.cancelTypo]}>
            Select multiple
          </Text>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
      <View style={[styles.bars5HomeIndicatorDar, styles.barLayout]}>
        <View style={[styles.background, styles.rectanglePosition]} />
        <View style={[styles.line, styles.lineBg]} />
      </View>
      <View style={[styles.bars1StatusBarIphone, styles.tabPosition]}>
        <View style={[styles.background, styles.rectanglePosition]} />
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.lineBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recentsLayout: {
    height: 375,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 93,
    width: 93,
  },
  iconPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  rectangleIconPosition1: {
    top: 94,
    height: 93,
    width: 93,
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 188,
    height: 93,
    width: 93,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.sFProText,
    top: "50%",
    position: "absolute",
  },
  tabBarLayout: {
    height: 78,
    width: 375,
    left: 0,
    position: "absolute",
  },
  tabPosition: {
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    top: "50%",
  },
  barLayout: {
    width: 375,
    left: 0,
  },
  cancelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    top: "50%",
    position: "absolute",
  },
  nextLayout: {
    lineHeight: 21,
    marginTop: 12,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
  },
  actionsLayout: {
    height: 32,
    position: "absolute",
  },
  iconLayout: {
    width: 32,
    height: 32,
    top: 0,
    position: "absolute",
  },
  lineBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  rectangleIcon: {
    top: 282,
    height: 93,
    width: 93,
    position: "absolute",
    left: 0,
  },
  rectangleIcon1: {
    left: 94,
    top: 282,
    height: 93,
    width: 93,
    position: "absolute",
  },
  rectangleIcon2: {
    left: 188,
    top: 282,
    height: 93,
    width: 93,
    position: "absolute",
  },
  rectangleIcon3: {
    left: 282,
    top: 282,
    height: 93,
    width: 93,
    position: "absolute",
  },
  rectangleIcon4: {
    top: 0,
    left: 188,
    position: "absolute",
  },
  rectangleIcon5: {
    top: 0,
    left: 282,
    position: "absolute",
  },
  rectangleIcon6: {
    top: 0,
    left: 94,
    position: "absolute",
  },
  rectangleIcon7: {
    top: 0,
    height: 93,
    width: 93,
    left: 0,
  },
  rectangleIcon8: {
    left: 188,
  },
  rectangleIcon9: {
    left: 282,
  },
  rectangleIcon10: {
    left: 94,
  },
  rectangleIcon11: {
    left: 0,
  },
  rectangleIcon12: {
    left: 0,
  },
  rectangleIcon13: {
    left: 94,
  },
  rectangleIcon14: {
    left: 282,
  },
  rectangleIcon15: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  text: {
    marginTop: 26,
    left: "57.53%",
    color: Color.colorWhite,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
    letterSpacing: 0,
  },
  video: {
    left: 188,
    overflow: "hidden",
  },
  recents: {
    top: 419,
  },
  rectangle: {
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  rectangle1: {
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  video1: {
    left: "32.4%",
    color: Color.colorGray_300,
    textAlign: "center",
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    letterSpacing: 0,
    position: "absolute",
  },
  tab3: {
    left: 250,
    width: 125,
    height: 44,
  },
  photo: {
    left: "32%",
    color: Color.colorGray_300,
    textAlign: "center",
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    letterSpacing: 0,
    position: "absolute",
  },
  tab2: {
    left: 125,
    width: 125,
    height: 44,
  },
  library: {
    left: "27.6%",
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  tab1: {
    width: 125,
    height: 44,
    left: 0,
  },
  tabBar: {
    top: 734,
  },
  rectangle4: {
    shadowColor: "#a6a6aa",
    shadowOffset: {
      width: 0,
      height: 0.33000001311302185,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  cancel: {
    left: "3.2%",
    lineHeight: 21,
    marginTop: 12,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    color: Color.colorWhitesmoke,
  },
  recents1: {
    left: "39.6%",
    color: Color.colorWhitesmoke,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    top: "50%",
    position: "absolute",
  },
  next: {
    left: "86.93%",
    color: Color.colorCornflowerblue,
    fontWeight: "600",
    textAlign: "right",
    fontFamily: FontFamily.sFProText,
    top: "50%",
    position: "absolute",
  },
  otherAlbumsIcon: {
    height: "7.95%",
    width: "2.93%",
    top: "71.59%",
    right: "39.73%",
    bottom: "20.45%",
    left: "57.33%",
  },
  topBar: {
    height: 88,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon16: {
    top: 88,
  },
  boomerangIcon: {
    left: 0,
  },
  combinePhotosIcon: {
    left: 42,
  },
  rectangle5: {
    borderRadius: 16,
    backgroundColor: "rgba(38, 38, 38, 0.8)",
    position: "absolute",
  },
  selectMultiple1: {
    marginTop: -6.5,
    left: "26.14%",
    textTransform: "uppercase",
    fontWeight: "600",
    color: Color.colorWhite,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
  },
  icon: {
    height: "53.13%",
    width: "11.11%",
    top: "24.38%",
    right: "81.18%",
    bottom: "22.5%",
    left: "7.71%",
  },
  selectMultiple: {
    left: 84,
    width: 153,
    top: 0,
    overflow: "hidden",
  },
  actions: {
    top: 421,
    left: 128,
    width: 237,
  },
  background: {
    position: "absolute",
  },
  line: {
    marginLeft: -66.5,
    bottom: 9,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  bars5HomeIndicatorDar: {
    top: 778,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    top: "50%",
    color: Color.colorWhite,
    letterSpacing: 0,
    left: 0,
  },
  timeStyle: {
    top: 14,
    left: 21,
    height: 18,
    overflow: "hidden",
  },
  bars1StatusBarIphone: {
    width: 375,
    left: 0,
  },
  instagramAddImage: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
});

export default InstagramAddImage;
