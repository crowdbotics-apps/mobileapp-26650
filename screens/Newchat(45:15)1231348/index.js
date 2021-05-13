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
      <View style={styles.View_45_16}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9254/1457/665c5ec8f36744050aa2202adf3ad946"
          }}
          style={styles.ImageBackground_I45_16_45_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/4c84/9b11a2905b6eced1dc0925b17ea2fde0"
          }}
          style={styles.ImageBackground_I45_16_45_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d3/9747/855133f645bb8703e6be88bb1c806caf"
          }}
          style={styles.ImageBackground_I45_16_45_283}
        />
        <View style={styles.View_I45_16_45_285}>
          <Text style={styles.Text_I45_16_45_285}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_45_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6b/aee6/89262f1bcff2a826bb91f74c752cf063"
          }}
          style={styles.ImageBackground_45_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3f3/c151/d79b201524a049abed4917d85292ac40"
          }}
          style={styles.ImageBackground_45_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d8/4842/e94b6cefd16f0e0e32622ed15b995fc5"
          }}
          style={styles.ImageBackground_45_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ef4/22f0/124ea3c5bbece8f87976420d0a2167c6"
          }}
          style={styles.ImageBackground_45_21}
        />
        <View style={styles.View_45_22}>
          <Text style={styles.Text_45_22}>Adrezza conella</Text>
        </View>
        <View style={styles.View_45_23}>
          <Text style={styles.Text_45_23}>Active </Text>
        </View>
      </View>
      <View style={styles.View_45_24}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80b4/369e/13abd9a23f94a29650d9e3ccb6efadf7"
          }}
          style={styles.ImageBackground_45_25}
        />
        <View style={styles.View_45_26}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0fc/7c9e/a84a8f737a9e4f2fbf480ceeec902e4d"
            }}
            style={styles.ImageBackground_45_27}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ef/39f0/8bde1ae06d58d8a454aaf72544bf58c8"
            }}
            style={styles.ImageBackground_45_28}
          />
        </View>
        <View style={styles.View_45_31}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d7b/7f81/514e10e5032dbf31b2de065929af8dfb"
            }}
            style={styles.ImageBackground_45_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37db/a455/11500a69271dff7742f45f323d9d7030"
            }}
            style={styles.ImageBackground_45_33}
          />
        </View>
        <View style={styles.View_45_34} />
        <View style={styles.View_45_35}>
          <Text style={styles.Text_45_35}>HI</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd07/6603/289b5f7f3314eb1b8d47fc9b418a5fe7"
        }}
        style={styles.ImageBackground_45_36}
      />
      <View style={styles.View_45_114}>
        <Text style={styles.Text_45_114}>
          You are now connected with Adrezza
        </Text>
      </View>
      <View style={styles.View_45_115}>
        <Text style={styles.Text_45_115}>Why not saying Hi?</Text>
      </View>
      <View style={styles.View_45_116}>
        <Text style={styles.Text_45_116}>
          Swipe up so you can see more people
        </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_45_16: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("1.5027322404371584%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I45_16_45_279: {
    flexGrow: 1,
    width: wp("3.544449869791667%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.522216796875%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_16_45_281: {
    flexGrow: 1,
    width: wp("3.544441731770833%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.52478841145833%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_16_45_283: {
    flexGrow: 1,
    width: wp("3.2717936197916666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.15983072916666%"),
    top: hp("0.4098360655737707%")
  },
  View_I45_16_45_285: {
    flexGrow: 1,
    width: wp("8.452136739095053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I45_16_45_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_17: {
    width: wp("85.7750244140625%"),
    minWidth: wp("85.7750244140625%"),
    height: hp("5.007697454567165%"),
    minHeight: hp("5.007697454567165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("8.743169920040609%")
  },
  ImageBackground_45_18: {
    width: wp("9.775025431315104%"),
    minWidth: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    minHeight: hp("5.007697454567165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("0%")
  },
  ImageBackground_45_19: {
    width: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.73333333333334%")
  },
  ImageBackground_45_20: {
    width: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_21: {
    width: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_45_22: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("0.13661202185792476%")
  },
  Text_45_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_23: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("2.3224043715846996%")
  },
  Text_45_23: {
    color: "rgba(143, 206, 202, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_24: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.4535524337018%")
  },
  ImageBackground_45_25: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_26: {
    width: wp("10.826666259765624%"),
    minWidth: wp("10.826666259765624%"),
    height: hp("5.546447878978292%"),
    minHeight: hp("5.546447878978292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("2.732240437158495%")
  },
  ImageBackground_45_27: {
    width: wp("10.826666259765624%"),
    minWidth: wp("10.826666259765624%"),
    height: hp("5.546447878978292%"),
    minHeight: hp("5.546447878978292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_28: {
    width: wp("6.033977762858073%"),
    height: hp("3.0911771326117177%"),
    top: hp("1.3232621990266296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.316345214843751%")
  },
  View_45_31: {
    width: wp("10.826666259765624%"),
    minWidth: wp("10.826666259765624%"),
    height: hp("5.546447878978292%"),
    minHeight: hp("5.546447878978292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%"),
    top: hp("2.732240437158495%")
  },
  ImageBackground_45_32: {
    width: wp("10.826666259765624%"),
    minWidth: wp("10.826666259765624%"),
    height: hp("5.546447878978292%"),
    minHeight: hp("5.546447878978292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_33: {
    width: wp("2.666666666666667%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.6393442622950545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_45_34: {
    width: wp("57.599999999999994%"),
    minWidth: wp("57.599999999999994%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("2.732240437158495%"),
    backgroundColor: "rgba(232, 242, 243, 1)"
  },
  View_45_35: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("3.1420765027322517%")
  },
  Text_45_35: {
    color: "rgba(147, 140, 140, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_36: {
    width: wp("66.11443684895833%"),
    height: hp("27.349063477229553%"),
    top: hp("29.508197242444982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%")
  },
  View_45_114: {
    width: wp("57.86666666666667%"),
    minWidth: wp("57.86666666666667%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("61.47541035719908%")
  },
  Text_45_114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_115: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("69.94535571239034%")
  },
  Text_45_115: {
    color: "rgba(137, 128, 128, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_116: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("95.21857975610618%")
  },
  Text_45_116: {
    color: "rgba(163, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
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
