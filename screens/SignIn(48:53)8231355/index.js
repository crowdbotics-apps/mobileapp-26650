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
      <View style={styles.View_48_54}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9254/1457/665c5ec8f36744050aa2202adf3ad946"
          }}
          style={styles.ImageBackground_I48_54_45_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/4c84/9b11a2905b6eced1dc0925b17ea2fde0"
          }}
          style={styles.ImageBackground_I48_54_45_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d3/9747/855133f645bb8703e6be88bb1c806caf"
          }}
          style={styles.ImageBackground_I48_54_45_283}
        />
        <View style={styles.View_I48_54_45_285}>
          <Text style={styles.Text_I48_54_45_285}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_48_55} />
      <View style={styles.View_48_79}>
        <View style={styles.View_48_67}>
          <Text style={styles.Text_48_67}>Email</Text>
        </View>
        <View style={styles.View_48_68}>
          <Text style={styles.Text_48_68}>Mot de passe</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef1e/0681/11363f6cd6728303c566cd15df468bf7"
          }}
          style={styles.ImageBackground_48_69}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef1e/0681/11363f6cd6728303c566cd15df468bf7"
          }}
          style={styles.ImageBackground_48_70}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e48b/af4f/622c425e22b5a0ab59f454c897da6f4f"
          }}
          style={styles.ImageBackground_48_72}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9be/430e/347efdfc93518655b407568769378d52"
          }}
          style={styles.ImageBackground_48_74}
        />
        <View style={styles.View_48_75}>
          <Text style={styles.Text_48_75}>stevenkejjad@gmail.com</Text>
        </View>
        <View style={styles.View_48_76}>
          <Text style={styles.Text_48_76}>••••••••••</Text>
        </View>
      </View>
      <View style={styles.View_48_78} />
      <View style={styles.View_48_80}>
        <Text style={styles.Text_48_80}>Sign In</Text>
      </View>
      <View style={styles.View_48_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9254/1457/665c5ec8f36744050aa2202adf3ad946"
          }}
          style={styles.ImageBackground_I48_1_45_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/4c84/9b11a2905b6eced1dc0925b17ea2fde0"
          }}
          style={styles.ImageBackground_I48_1_45_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d3/9747/855133f645bb8703e6be88bb1c806caf"
          }}
          style={styles.ImageBackground_I48_1_45_283}
        />
        <View style={styles.View_I48_1_45_285}>
          <Text style={styles.Text_I48_1_45_285}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_48_54: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.821907552083333%"),
    top: hp("1.5481083770918715%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I48_54_45_279: {
    flexGrow: 1,
    width: wp("3.544449869791667%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.52223307291668%"),
    top: hp("0.4098360655737705%")
  },
  ImageBackground_I48_54_45_281: {
    flexGrow: 1,
    width: wp("3.544441731770833%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.52477213541667%"),
    top: hp("0.4098360655737705%")
  },
  ImageBackground_I48_54_45_283: {
    flexGrow: 1,
    width: wp("3.2717936197916666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.15983072916667%"),
    top: hp("0.4098360655737705%")
  },
  View_I48_54_45_285: {
    flexGrow: 1,
    width: wp("8.452136739095053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I48_54_45_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_55: {
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
  View_48_79: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("19.91120218579235%"),
    minHeight: hp("19.91120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("66.80327868852459%")
  },
  View_48_67: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_48_67: {
    color: "rgba(204, 190, 227, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_68: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.51912568306011%")
  },
  Text_48_68: {
    color: "rgba(204, 190, 227, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_69: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("1.6536216476271846e-8%"),
    minHeight: hp("1.6536216476271846e-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.579234972677597%")
  },
  ImageBackground_48_70: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("1.6536216476271846e-8%"),
    minHeight: hp("1.6536216476271846e-8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759572%")
  },
  ImageBackground_48_72: {
    width: wp("5.2%"),
    height: hp("1.8442622950819672%"),
    top: hp("4.2691256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6000000000000014%")
  },
  ImageBackground_48_74: {
    width: wp("5.2%"),
    height: hp("2.663934426229508%"),
    top: hp("17.247267759562845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0666666666666682%")
  },
  View_48_75: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333335%"),
    top: hp("3.6885245901639365%")
  },
  Text_48_75: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_76: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333335%"),
    top: hp("14.48087431693989%")
  },
  Text_48_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_78: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("93.5792349726776%"),
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38
  },
  View_48_80: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("95.21857923497268%")
  },
  Text_48_80: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("10.382513661202186%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I48_1_45_279: {
    flexGrow: 1,
    width: wp("3.544449869791667%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.52220052083334%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I48_1_45_281: {
    flexGrow: 1,
    width: wp("3.544441731770833%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5248046875%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I48_1_45_283: {
    flexGrow: 1,
    width: wp("3.2717936197916666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.15983072916666%"),
    top: hp("0.4098360655737707%")
  },
  View_I48_1_45_285: {
    flexGrow: 1,
    width: wp("8.452136739095053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I48_1_45_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
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
