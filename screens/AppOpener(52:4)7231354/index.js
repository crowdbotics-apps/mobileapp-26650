import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_52_5} />
      <View style={styles.View_52_6}>
        <View style={styles.View_52_7}>
          <View style={styles.View_52_8}>
            <Text style={styles.Text_52_8}>Sign In</Text>
          </View>
        </View>
        <View style={styles.View_52_9}>
          <View style={styles.View_52_10}>
            <Text style={styles.Text_52_10}>Sign Up</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbb2/4322/e6b2b8457816aada90e45c5753fe16cf"
        }}
        style={styles.ImageBackground_52_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88ef/029c/7093640b2f381d36ebfa6a7a678591b0"
        }}
        style={styles.ImageBackground_52_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7202/ffa7/ffcb50b572215e64b389627891129949"
        }}
        style={styles.ImageBackground_52_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9614/73c5/530fb4754900bdc692098100381097f4"
        }}
        style={styles.ImageBackground_52_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a6/eada/f5ec08748c1452329d38c8139dda087a"
        }}
        style={styles.ImageBackground_52_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2956/03e7/c4df10a750385eb378c987e690aecf6c"
        }}
        style={styles.ImageBackground_52_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2123/84b7/ead6f64e58ac544c6766402c6d7fffd4"
        }}
        style={styles.ImageBackground_52_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b265/da6d/9c57e30894691979322c475ceecee90b"
        }}
        style={styles.ImageBackground_52_18}
      />
      <View style={styles.View_52_19}>
        <View style={styles.View_52_20}>
          <Text style={styles.Text_52_20}>Welcome to OnRecord</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2269/0c48/7c5cb531a8cd9b0d30d2db0104c9ea32"
          }}
          style={styles.ImageBackground_52_21}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_52_5: {
    width: wp("112.00000000000001%"),
    minWidth: wp("112.00000000000001%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.133333333333333%"),
    top: hp("37.84153005464481%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_52_6: {
    width: wp("69.86666666666666%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("83.06010928961749%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_52_7: {
    width: wp("67.46666666666667%"),
    minWidth: wp("67.46666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1999999999999975%"),
    top: hp("0%"),
    backgroundColor: "rgba(227, 227, 227, 0.30000001192092896)",
    overflow: "hidden"
  },
  View_52_8: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("2.0491803278688536%")
  },
  Text_52_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_9: {
    width: wp("69.86666666666666%"),
    minWidth: wp("69.86666666666666%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.065573770491795%"),
    backgroundColor: "rgba(227, 227, 227, 0.30000001192092896)",
    overflow: "hidden"
  },
  View_52_10: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("2.0491803278688536%")
  },
  Text_52_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_52_11: {
    width: wp("36.266666666666666%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333334%"),
    top: hp("50.54644808743169%")
  },
  ImageBackground_52_12: {
    width: wp("35.199999999999996%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.4%"),
    top: hp("52.595628415300546%")
  },
  ImageBackground_52_13: {
    width: wp("42.59554443359375%"),
    height: hp("23.349859935989798%"),
    minHeight: hp("23.349859935989798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("19.53551912568306%")
  },
  ImageBackground_52_14: {
    width: wp("34.88934326171875%"),
    height: hp("21.12973322633837%"),
    minHeight: hp("21.12973322633837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%"),
    top: hp("21.721311475409834%")
  },
  ImageBackground_52_15: {
    width: wp("41.33208414713542%"),
    height: hp("22.9454228135406%"),
    minHeight: hp("22.9454228135406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.133333333333333%"),
    top: hp("46.72131147540984%")
  },
  ImageBackground_52_16: {
    width: wp("33.49812825520833%"),
    height: hp("20.934351936715547%"),
    minHeight: hp("20.934351936715547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.8963541666666668%"),
    top: hp("46.964268085083674%")
  },
  ImageBackground_52_17: {
    width: wp("39.84278564453125%"),
    height: hp("17.699642910983393%"),
    minHeight: hp("17.699642910983393%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("21.584699453551913%")
  },
  ImageBackground_52_18: {
    width: wp("37.75552164713542%"),
    height: hp("13.565037419887188%"),
    minHeight: hp("13.565037419887188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.1163411458333337%"),
    top: hp("23.90530278773907%")
  },
  View_52_19: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("38.9344262295082%"),
    minHeight: hp("38.9344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("17.076502732240435%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_52_20: {
    width: wp("88.26666666666667%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_52_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_52_21: {
    width: wp("46.40000813802083%"),
    height: hp("23.770491803278688%"),
    top: hp("15.16393442622951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.93333333333333%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 480,
    borderTopRightRadius: 480,
    borderBottomLeftRadius: 480,
    borderBottomRightRadius: 480
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
