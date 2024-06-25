import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const InstagramProfileEdit = () => {
  return (
    <View style={styles.instagramProfileEdit}>
      <View style={[styles.profilePhoto, styles.barPosition]}>
        <View style={[styles.rectangle, styles.rectanglePosition1]} />
        <Text style={[styles.changeProfilePhoto, styles.profileTypo]}>
          Change Profile Photo
        </Text>
        <Image
          style={[styles.ovalIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Image
          style={[styles.seperatorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/seperator.png")}
        />
      </View>
      <View style={[styles.commonInfo, styles.barPosition]}>
        <View style={[styles.rectangle1, styles.rectanglePosition1]} />
        <Text style={[styles.privateInformation, styles.bioTypo]}>
          Private Information
        </Text>
        <View style={[styles.field, styles.fieldPosition]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.email, styles.timePosition]}>Email</Text>
          <View style={[styles.input, styles.rectanglePosition]}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={[styles.jacobwestgmailcom, styles.website1Position]}>
              jacob.west@gmail.com
            </Text>
          </View>
        </View>
        <View style={[styles.field1, styles.fieldPosition]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.email, styles.timePosition]}>Phone</Text>
          <View style={[styles.input, styles.rectanglePosition]}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={[styles.jacobwestgmailcom, styles.website1Position]}>
              +1 202 555 0147
            </Text>
          </View>
        </View>
        <View style={[styles.field2, styles.fieldPosition]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.email, styles.timePosition]}>Gender</Text>
          <View style={[styles.input, styles.rectanglePosition]}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={[styles.jacobwestgmailcom, styles.website1Position]}>
              Male
            </Text>
          </View>
        </View>
        <Image
          style={[styles.seperatorIcon1, styles.seperatorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/seperator1.png")}
        />
        <Image
          style={[styles.seperatorIcon2, styles.seperatorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/seperator1.png")}
        />
        <Image
          style={[styles.seperatorIcon3, styles.seperatorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/seperator1.png")}
        />
      </View>
      <View style={[styles.professionalAccount, styles.barPosition]}>
        <View style={[styles.rectangle8, styles.rectangleShadowBox]} />
        <Text style={[styles.switchToProfession, styles.bioTypo]}>
          Switch to Professional Account
        </Text>
      </View>
      <View style={[styles.commonInfo1, styles.rectangle9Layout]}>
        <View style={[styles.rectangle9, styles.rectangle9Layout]} />
        <View style={[styles.field3, styles.fieldLayout]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.email, styles.timePosition]}>Name</Text>
          <View style={[styles.input, styles.rectanglePosition]}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={[styles.jacobwestgmailcom, styles.website1Position]}>
              Jacob West
            </Text>
          </View>
        </View>
        <View style={[styles.field4, styles.fieldLayout]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.email, styles.timePosition]}>Username</Text>
          <View style={[styles.input, styles.rectanglePosition]}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={[styles.jacobwestgmailcom, styles.website1Position]}>
              jacob_w
            </Text>
          </View>
        </View>
        <View style={[styles.field5, styles.fieldLayout]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.email, styles.timePosition]}>Website</Text>
          <View style={[styles.input, styles.rectanglePosition]}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={[styles.website1, styles.website1Position]}>
              Website
            </Text>
          </View>
        </View>
        <View style={[styles.field6, styles.barPosition]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.bio, styles.bioTypo]}>Bio</Text>
          <View style={[styles.input, styles.rectanglePosition]}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={[styles.digitalGoodiesDesiContainer, styles.bioTypo]}>
              <Text
                style={styles.digitalGoodiesDesigner}
              >{`Digital goodies designer `}</Text>
              <Text style={styles.pixsellz}>@pixsellz</Text>
              <Text style={styles.digitalGoodiesDesigner}>{` 
Everything is designed.`}</Text>
            </Text>
          </View>
        </View>
        <Image
          style={[styles.seperatorIcon4, styles.seperatorIconLayout]}
          resizeMode="cover"
          source={require("../assets/seperator1.png")}
        />
        <Image
          style={[styles.seperatorIcon5, styles.seperatorIconLayout]}
          resizeMode="cover"
          source={require("../assets/seperator1.png")}
        />
        <Image
          style={[styles.seperatorIcon6, styles.seperatorIconLayout]}
          resizeMode="cover"
          source={require("../assets/seperator1.png")}
        />
      </View>
      <View style={[styles.topBar, styles.barPosition]}>
        <View style={[styles.rectangle18, styles.rectangleShadowBox]} />
        <Text style={[styles.cancel, styles.donePosition]}>Cancel</Text>
        <Text style={[styles.editProfile, styles.donePosition]}>
          Edit Profile
        </Text>
        <Text style={[styles.done, styles.donePosition]}>Done</Text>
      </View>
      <View style={[styles.bars5HomeIndicatorDar, styles.barPosition]}>
        <View style={[styles.background, styles.rectanglePosition]} />
        <View style={[styles.line, styles.lineBg]} />
      </View>
      <View style={[styles.bars1StatusBarIphone, styles.barPosition]}>
        <View style={[styles.background, styles.rectanglePosition]} />
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
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
  barPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition1: {
    left: "0%",
    width: "100%",
  },
  profileTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bioTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  fieldPosition: {
    height: "24.87%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  rectanglePosition: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  timePosition: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    top: "50%",
  },
  website1Position: {
    fontSize: FontSize.size_base,
    left: "5.73%",
    width: "88.53%",
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  seperatorIconLayout1: {
    left: "29.87%",
    right: "4.27%",
    width: "65.87%",
    height: "0.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0.33000001311302185,
    },
    shadowColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: Color.colorBlack,
  },
  rectangle9Layout: {
    height: 208,
    width: 375,
    left: 0,
    position: "absolute",
  },
  fieldLayout: {
    height: 48,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  seperatorIconLayout: {
    height: 1,
    width: 247,
    left: 112,
    position: "absolute",
  },
  donePosition: {
    marginTop: 12,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sFProText,
    lineHeight: 21,
    letterSpacing: 0,
    top: "50%",
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
  rectangle: {
    height: "99.38%",
    bottom: "0.62%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  changeProfilePhoto: {
    marginTop: 45.5,
    left: "32%",
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.sFProText,
    lineHeight: 21,
    letterSpacing: 0,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  ovalIcon: {
    height: "59.01%",
    width: "25.33%",
    top: "11.49%",
    right: "37.33%",
    bottom: "29.5%",
    left: "37.33%",
  },
  seperatorIcon: {
    height: "0.62%",
    top: "99.07%",
    bottom: "0.31%",
    left: "0%",
    width: "100%",
    right: "0%",
  },
  profilePhoto: {
    top: 88,
    height: 161,
  },
  rectangle1: {
    height: "99.48%",
    bottom: "0.52%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  privateInformation: {
    marginTop: -82.5,
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorWhitesmoke,
    left: "4.27%",
    fontWeight: "600",
  },
  rectangle2: {
    left: "0%",
    width: "100%",
    backgroundColor: Color.colorBlack,
    height: "100%",
  },
  email: {
    textAlign: "left",
    color: Color.colorWhitesmoke,
    left: "4.27%",
    position: "absolute",
  },
  jacobwestgmailcom: {
    color: Color.colorWhitesmoke,
  },
  input: {
    width: "74.4%",
    left: "25.6%",
    overflow: "hidden",
  },
  field: {
    top: "24.87%",
    bottom: "50.26%",
  },
  field1: {
    top: "49.74%",
    bottom: "25.39%",
  },
  field2: {
    top: "74.61%",
    bottom: "0.52%",
  },
  seperatorIcon1: {
    top: "49.48%",
    bottom: "50%",
  },
  seperatorIcon2: {
    top: "74.35%",
    bottom: "25.13%",
  },
  seperatorIcon3: {
    top: "99.22%",
    bottom: "0.26%",
  },
  commonInfo: {
    top: 505,
    height: 193,
  },
  rectangle8: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  switchToProfession: {
    marginTop: -8.5,
    textAlign: "left",
    left: "4.27%",
    color: Color.colorCornflowerblue,
  },
  professionalAccount: {
    top: 456,
    height: 49,
  },
  rectangle9: {
    top: 0,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0.33000001311302185,
    },
    shadowColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: Color.colorBlack,
  },
  field3: {
    top: 0,
  },
  field4: {
    top: 48,
  },
  website1: {
    color: "#ebebf5",
  },
  field5: {
    top: 96,
  },
  bio: {
    marginTop: -18,
    textAlign: "left",
    color: Color.colorWhitesmoke,
    left: "4.27%",
  },
  digitalGoodiesDesigner: {
    color: Color.colorWhitesmoke,
  },
  pixsellz: {
    color: "#cdd7e1",
  },
  digitalGoodiesDesiContainer: {
    marginTop: -19,
    width: "88.89%",
    left: "5.38%",
    textAlign: "left",
  },
  field6: {
    height: 64,
    top: 144,
  },
  seperatorIcon4: {
    top: 48,
  },
  seperatorIcon5: {
    top: 96,
  },
  seperatorIcon6: {
    top: 144,
  },
  commonInfo1: {
    top: 248,
  },
  rectangle18: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  cancel: {
    left: "3.2%",
    textAlign: "left",
    color: Color.colorWhitesmoke,
  },
  editProfile: {
    left: "39.07%",
    color: Color.colorWhitesmoke,
    textAlign: "center",
    fontWeight: "600",
  },
  done: {
    left: "85.87%",
    textAlign: "right",
    color: Color.colorCornflowerblue,
    fontWeight: "600",
  },
  topBar: {
    height: 88,
    top: 0,
  },
  background: {
    left: "0%",
    width: "100%",
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
    opacity: 0.4,
    position: "absolute",
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
    color: Color.colorWhite,
    marginTop: -9,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    top: "50%",
    textAlign: "center",
    fontWeight: "600",
    left: 0,
    width: 54,
  },
  timeStyle: {
    top: 14,
    left: 21,
    height: 18,
    overflow: "hidden",
  },
  bars1StatusBarIphone: {
    height: 44,
    top: 0,
  },
  instagramProfileEdit: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: '#ffffff',
  },
});

export default InstagramProfileEdit;
