import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const InstagramMain = () => {
  return (
    <View style={styles.instagramMain}>
      <View style={[styles.post, styles.postIconPosition]}>
        <View style={[styles.postTop, styles.postIconPosition]}>
          <View style={[styles.rectangle, styles.maskShadowBox]} />
          <Text style={[styles.tokyoJapan, styles.tokyoJapanTypo]}>
            Tokyo, Japan
          </Text>
          <Text style={[styles.joshuaL, styles.joshuaTypo]}>joshua_l</Text>
          <Image
            style={[styles.officialIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/official-icon.png")}
          />
          <Image
            style={[styles.ovalIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/oval1.png")}
          />
          <Image
            style={[styles.moreIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/more-icon.png")}
          />
        </View>
        <Image
          style={[styles.rectangleIcon, styles.postIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle17.png")}
        />
        <View style={styles.photoNumber}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={styles.text}>1/3</Text>
        </View>
        <View style={[styles.postBottom, styles.postIconPosition]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.september19, styles.likesInfoPosition]}>
            September 19
          </Text>
          <Text
            style={[styles.joshuaLTheGameContainer, styles.likesInfoPosition]}
          >
            <Text style={styles.joshuaL1}>
              <Text style={styles.joshuaTypo}>joshua_l</Text>
            </Text>
            <Text style={styles.theGameInJapanWasAmazing}>
              <Text style={styles.joshuaL1}>{` `}</Text>
              <Text style={styles.joshuaL1}>
                The game in Japan was amazing and I want to share some photos
              </Text>
            </Text>
          </Text>
          <View style={[styles.likesInfo, styles.likesInfoPosition]}>
            <Text
              style={[
                styles.likedByCraigLoveContainer,
                styles.joshuaContainerTypo,
              ]}
            >
              <Text style={styles.theGameInJapanWasAmazing}>{`Liked by `}</Text>
              <Text style={styles.joshuaTypo}>craig_love</Text>
              <Text style={styles.theGameInJapanWasAmazing}>{` and `}</Text>
              <Text style={styles.joshuaTypo}>44,686 others</Text>
            </Text>
            <Image
              style={[styles.ovalIcon1, styles.ovalIconLayout]}
              resizeMode="cover"
              source={require("../assets/oval2.png")}
            />
          </View>
          <Image
            style={[styles.messangerIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/messanger.png")}
          />
          <Image
            style={[styles.commentIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/comment.png")}
          />
          <Image
            style={[styles.likeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/like.png")}
          />
          <Image
            style={[styles.saveIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/save.png")}
          />
          <Image
            style={[styles.paginationIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/pagination.png")}
          />
        </View>
      </View>
      <View style={[styles.stories, styles.maskLayout]}>
        <View style={[styles.mask, styles.maskLayout]} />
        <View style={[styles.yourStory, styles.storyPosition]}>
          <Image
            style={[styles.profileImageIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/profile-image.png")}
          />
          <Text style={[styles.yourStory1, styles.live2Position]}>
            Your Story
          </Text>
        </View>
        <View style={[styles.story, styles.storyPosition]}>
          <Image
            style={[styles.profileImageIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/profile-image1.png")}
          />
          <Text style={[styles.zackjohn, styles.live2Position]}>zackjohn</Text>
        </View>
        <View style={[styles.story1, styles.storyPosition]}>
          <Image
            style={[styles.profileImageIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/profile-image2.png")}
          />
          <Text style={[styles.kieronD, styles.live2Position]}>kieron_d</Text>
        </View>
        <View style={[styles.story2, styles.storyPosition]}>
          <Image
            style={[styles.profileImageIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/profile-image3.png")}
          />
          <Text style={[styles.craigLove1, styles.live2Position]}>
            craig_love
          </Text>
        </View>
        <View style={[styles.live, styles.storyPosition]}>
          <Image
            style={[styles.profileImageIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/oval-copy.png")}
          />
          <Image
            style={[styles.innerOvalIcon, styles.ovalIconLayout]}
            resizeMode="cover"
            source={require("../assets/inner-oval.png")}
          />
          <Text style={[styles.karennne, styles.live2Position]}>karennne</Text>
          <View style={styles.live1}>
            <LinearGradient
              style={[styles.rectangle3, styles.rectanglePosition]}
              locations={[0, 0.22, 1]}
              colors={["#c90083", "#d22463", "#e10038"]}
              useAngle={true}
              angle={125.85}
            />
            <Text style={[styles.live2, styles.live2Position]}>LIVE</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.tabBarIcon, styles.postIconPosition]}
        resizeMode="cover"
        source={require("../assets/tab-bar.png")}
      />
      <Image
        style={[styles.topBarIcon, styles.postIconPosition]}
        resizeMode="cover"
        source={require("../assets/top-bar.png")}
      />
      <View style={[styles.barsStatusBarIphoneX, styles.postIconPosition]}>
        <View style={[styles.background, styles.rectanglePosition]} />
        <Image
          style={styles.batteryIcon}
          resizeMode="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.mobileSignalIcon}
          resizeMode="cover"
          source={require("../assets/mobile-signal.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.text2, styles.live2Position]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.barsHomeIndicator, styles.postIconPosition]}>
        <View style={[styles.background, styles.rectanglePosition]} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postIconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  maskShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0.33000001311302185,
    },
    shadowColor: "rgba(60, 60, 67, 0.29)",
    backgroundColor: Color.colorWhite,
  },
  tokyoJapanTypo: {
    textAlign: "left",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    top: "50%",
  },
  joshuaTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
  },
  ovalIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    left: "0%",
    top: "0%",
  },
  likesInfoPosition: {
    left: "4%",
    position: "absolute",
  },
  joshuaContainerTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray_200,
    top: "50%",
  },
  iconPosition: {
    top: "9.18%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  maskLayout: {
    height: 98,
    width: 375,
    left: 0,
    position: "absolute",
  },
  storyPosition: {
    bottom: "8.16%",
    width: "16.53%",
    height: "82.65%",
    top: "9.18%",
    position: "absolute",
  },
  live2Position: {
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  tokyoJapan: {
    marginTop: 3,
    color: Color.colorGray_200,
    textAlign: "left",
    fontSize: FontSize.size_2xs,
    left: "13.87%",
    position: "absolute",
  },
  joshuaL: {
    marginTop: -16,
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray_200,
    top: "50%",
    letterSpacing: 0,
    left: "13.87%",
    fontWeight: "600",
    position: "absolute",
  },
  officialIcon: {
    height: "18.52%",
    width: "2.67%",
    top: "29.63%",
    right: "68.53%",
    bottom: "51.85%",
    left: "28.8%",
  },
  ovalIcon: {
    height: "59.26%",
    width: "8.53%",
    top: "20.37%",
    right: "88.8%",
    bottom: "20.37%",
    left: "2.67%",
  },
  moreIcon: {
    height: "5.56%",
    width: "3.73%",
    top: "47.22%",
    right: "4%",
    bottom: "47.22%",
    left: "92.27%",
  },
  postTop: {
    height: 54,
    top: 0,
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 54,
    height: 375,
  },
  rectangle1: {
    borderRadius: 13,
    backgroundColor: "rgba(18, 18, 18, 0.7)",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text: {
    marginTop: -7,
    left: "23.53%",
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    top: "50%",
    position: "absolute",
  },
  photoNumber: {
    top: 68,
    left: 327,
    width: 34,
    height: 26,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle2: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  september19: {
    marginTop: 47.5,
    color: "rgba(0, 0, 0, 0.4)",
    textAlign: "left",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    top: "50%",
    left: "4%",
  },
  joshuaL1: {
    letterSpacing: 0,
  },
  theGameInJapanWasAmazing: {
    fontFamily: FontFamily.sFProText,
  },
  joshuaLTheGameContainer: {
    marginTop: -1.5,
    width: "92%",
    lineHeight: 18,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorGray_200,
    top: "50%",
  },
  likedByCraigLoveContainer: {
    marginTop: -9.5,
    left: "9.13%",
    letterSpacing: 0,
    position: "absolute",
  },
  ovalIcon1: {
    height: "89.47%",
    width: "6.46%",
    top: "10.53%",
    right: "93.35%",
    left: "0.19%",
    bottom: "0%",
  },
  likesInfo: {
    height: "12.93%",
    width: "70.13%",
    top: "32.65%",
    right: "25.87%",
    bottom: "54.42%",
    overflow: "hidden",
  },
  messangerIcon: {
    height: "13.61%",
    width: "6.13%",
    right: "68.67%",
    bottom: "77.21%",
    left: "25.2%",
  },
  commentIcon: {
    height: "15.65%",
    width: "5.87%",
    right: "79.47%",
    bottom: "75.17%",
    left: "14.67%",
  },
  likeIcon: {
    height: "14.29%",
    width: "6.4%",
    right: "89.87%",
    bottom: "76.53%",
    left: "3.73%",
  },
  saveIcon: {
    height: "16.33%",
    width: "5.6%",
    top: "8.64%",
    right: "4.03%",
    bottom: "75.03%",
    left: "90.37%",
  },
  paginationIcon: {
    height: "4.08%",
    width: "6.93%",
    top: "14.29%",
    right: "46.53%",
    bottom: "81.63%",
    left: "46.53%",
  },
  postBottom: {
    top: 429,
    height: 147,
    overflow: "hidden",
  },
  post: {
    top: 186,
    height: 576,
  },
  mask: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 0.33000001311302185,
    },
    shadowColor: "rgba(60, 60, 67, 0.29)",
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  profileImageIcon: {
    height: "76.54%",
    bottom: "23.46%",
    left: "0%",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  yourStory1: {
    left: "2.42%",
    marginTop: 26.5,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
  },
  yourStory: {
    right: "80.8%",
    left: "2.67%",
  },
  zackjohn: {
    left: "8.87%",
    marginTop: 26.5,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
  },
  story: {
    right: "37.07%",
    left: "46.4%",
  },
  kieronD: {
    left: "11.29%",
    marginTop: 26.5,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
  },
  story1: {
    right: "15.2%",
    left: "68.27%",
  },
  craigLove1: {
    left: "4.03%",
    marginTop: 26.5,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
  },
  story2: {
    right: "-6.67%",
    left: "90.13%",
  },
  innerOvalIcon: {
    height: "69.14%",
    width: "90.32%",
    top: "3.7%",
    right: "4.84%",
    bottom: "27.16%",
    left: "4.84%",
  },
  karennne: {
    left: "8.06%",
    marginTop: 26.5,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
  },
  rectangle3: {
    height: "112.5%",
    width: "107.69%",
    right: "-7.69%",
    bottom: "-12.5%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 2,
    backgroundColor: "transparent",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  live2: {
    marginTop: -5,
    left: "15.38%",
    fontSize: 8,
    letterSpacing: 1,
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.colorGray_100,
  },
  live1: {
    height: "19.75%",
    width: "41.94%",
    top: "62.96%",
    right: "29.03%",
    bottom: "17.28%",
    left: "29.03%",
    position: "absolute",
  },
  live: {
    right: "58.93%",
    left: "24.53%",
  },
  stories: {
    top: 88,
  },
  tabBarIcon: {
    top: 733,
    height: 79,
  },
  topBarIcon: {
    height: 88,
    top: 0,
  },
  background: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -4,
    right: 14,
    width: 25,
    height: 11,
    top: "50%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  text2: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    color: "#171717",
    width: 54,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    left: 0,
    textAlign: "center",
  },
  timeStyle: {
    height: "40.91%",
    width: "14.4%",
    top: "31.82%",
    right: "80%",
    bottom: "27.27%",
    left: "5.6%",
    position: "absolute",
    overflow: "hidden",
  },
  barsStatusBarIphoneX: {
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  line: {
    marginLeft: -66.5,
    bottom: 9,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: "#060606",
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicator: {
    top: 778,
    height: 34,
    overflow: "hidden",
  },
  instagramMain: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default InstagramMain;
