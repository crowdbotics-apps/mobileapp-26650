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
      <View style={styles.View_45_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9254/1457/665c5ec8f36744050aa2202adf3ad946"
          }}
          style={styles.ImageBackground_I45_1_45_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/4c84/9b11a2905b6eced1dc0925b17ea2fde0"
          }}
          style={styles.ImageBackground_I45_1_45_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d3/9747/855133f645bb8703e6be88bb1c806caf"
          }}
          style={styles.ImageBackground_I45_1_45_283}
        />
        <View style={styles.View_I45_1_45_285}>
          <Text style={styles.Text_I45_1_45_285}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_45_2}>
        <Text style={styles.Text_45_2}>+30 Persons</Text>
      </View>
      <View style={styles.View_45_3}>
        <Text style={styles.Text_45_3}>
          We found 30 persons in your area,choose any one and your network.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09be/8c8e/bb0ffe7cac7cbd8cb7cffc0847694ee3"
        }}
        style={styles.ImageBackground_45_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9314/1e12/3d9aeaaf258ed4473f02f75c47f12025"
        }}
        style={styles.ImageBackground_45_5}
      />
      <View style={styles.View_45_9} />
      <View style={styles.View_45_10}>
        <Text style={styles.Text_45_10}>Drag to find you mate</Text>
      </View>
      <View style={styles.View_45_11}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45b4/4229/812e4fac7a9a17280cec93a9217acf11"
          }}
          style={styles.ImageBackground_45_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a6/b89f/6942d1db1c3ce8552650cd70bf6ab4b3"
          }}
          style={styles.ImageBackground_45_13}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_45_1: {
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
  ImageBackground_I45_1_45_279: {
    flexGrow: 1,
    width: wp("3.544449869791667%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.52222086588543%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_1_45_281: {
    flexGrow: 1,
    width: wp("3.544441731770833%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.52479248046876%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_1_45_283: {
    flexGrow: 1,
    width: wp("3.2717936197916666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.15983479817709%"),
    top: hp("0.4098360655737707%")
  },
  View_I45_1_45_285: {
    flexGrow: 1,
    width: wp("8.452136739095053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I45_1_45_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_2: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333740234375%"),
    top: hp("18.44262347195318%")
  },
  Text_45_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_3: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("24.72677647741766%")
  },
  Text_45_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_4: {
    width: wp("6.666666666666667%"),
    height: hp("22.814207650273225%"),
    top: hp("44.53551964681657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66667073567709%")
  },
  ImageBackground_45_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("40.16393494736302%")
  },
  View_45_9: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("95.49180379982202%"),
    backgroundColor: "rgba(118, 19, 197, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_45_10: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333329264322916%"),
    top: hp("98.49726828069635%")
  },
  Text_45_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_11: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("96.17486390911165%")
  },
  ImageBackground_45_12: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_13: {
    width: wp("5.866666666666666%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%")
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
