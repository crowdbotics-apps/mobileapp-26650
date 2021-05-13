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
      <View style={styles.View_45_118}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9254/1457/665c5ec8f36744050aa2202adf3ad946"
          }}
          style={styles.ImageBackground_I45_118_45_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/4c84/9b11a2905b6eced1dc0925b17ea2fde0"
          }}
          style={styles.ImageBackground_I45_118_45_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d3/9747/855133f645bb8703e6be88bb1c806caf"
          }}
          style={styles.ImageBackground_I45_118_45_283}
        />
        <View style={styles.View_I45_118_45_285}>
          <Text style={styles.Text_I45_118_45_285}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_45_119}>
        <Text style={styles.Text_45_119}>+30 Persons</Text>
      </View>
      <View style={styles.View_45_120}>
        <Text style={styles.Text_45_120}>
          We found 30 persons in your area,choose any one and your network.
        </Text>
      </View>
      <View style={styles.View_45_121}>
        <Text style={styles.Text_45_121}>
          Drag anyone here to start talking
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d302/eb4e/5cd324997ff2c4a9aadf6540a85666d8"
        }}
        style={styles.ImageBackground_45_122}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4216/708c/ae0784a272b06eb841447737c03657d2"
        }}
        style={styles.ImageBackground_45_123}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd78/7de9/b096367df2521167b148a9357b2cecf2"
        }}
        style={styles.ImageBackground_45_124}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab5f/e1d5/c975e29a93a90166699ea61879614dc0"
        }}
        style={styles.ImageBackground_45_125}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca7/38f7/3f7fc6cc88dec0843292ce8e291eaf23"
        }}
        style={styles.ImageBackground_45_126}
      />
      <View style={styles.View_45_127}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1371/0b74/f8f609f1cb762523631181c22e05ff76"
          }}
          style={styles.ImageBackground_45_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e25/f299/f40dbcb846c5ba05d4d3eaf9b173250f"
          }}
          style={styles.ImageBackground_45_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7992/9609/c6eba80b54752852172bfc9f288b85c1"
          }}
          style={styles.ImageBackground_45_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0f5/5706/24dc0aa522bc35bbc9c3a6baa9fae077"
          }}
          style={styles.ImageBackground_45_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/303b/9d82/ff2d8c47b3ae5c6e6fc9f4af7a4650e7"
          }}
          style={styles.ImageBackground_45_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3bd/e1a3/daf064797ebb404f765811e80b05e643"
          }}
          style={styles.ImageBackground_45_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecce/236e/7ddbd4013def96688732377b012e8727"
          }}
          style={styles.ImageBackground_45_134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa45/3fa4/bf9d68f39928962b0d9b75a4ec99e5ff"
          }}
          style={styles.ImageBackground_45_135}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed53/d9da/99f7f98886994a7ec5dd604243723b65"
          }}
          style={styles.ImageBackground_45_136}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_45_118: {
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
  ImageBackground_I45_118_45_279: {
    flexGrow: 1,
    width: wp("3.544449869791667%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.522216796875%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_118_45_281: {
    flexGrow: 1,
    width: wp("3.544441731770833%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.52478841145833%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_118_45_283: {
    flexGrow: 1,
    width: wp("3.2717936197916666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.15983072916666%"),
    top: hp("0.4098360655737707%")
  },
  View_I45_118_45_285: {
    flexGrow: 1,
    width: wp("8.452136739095053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I45_118_45_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_119: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("12.431694510204544%")
  },
  Text_45_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_120: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("18.715847515669026%")
  },
  Text_45_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_121: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("68.98907155938487%")
  },
  Text_45_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_122: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("60.38251418233569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333334%")
  },
  ImageBackground_45_123: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("74.4535524337018%")
  },
  ImageBackground_45_124: {
    width: wp("6.666666666666667%"),
    height: hp("22.814207650273225%"),
    top: hp("80.60109341730836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%")
  },
  ImageBackground_45_125: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("36.74863387978142%"),
    minHeight: hp("36.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("83.33333385446684%")
  },
  ImageBackground_45_126: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("91.2568311222264%")
  },
  View_45_127: {
    width: wp("111.20000000000002%"),
    minWidth: wp("111.20000000000002%"),
    height: hp("26.50273224043716%"),
    minHeight: hp("26.50273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("28.005465002007824%")
  },
  ImageBackground_45_128: {
    width: wp("20.266666666666666%"),
    height: hp("10.382513661202186%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%")
  },
  ImageBackground_45_129: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("6.557377049180332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%")
  },
  ImageBackground_45_130: {
    width: wp("15.466666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.46666666666667%")
  },
  ImageBackground_45_131: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%")
  },
  ImageBackground_45_132: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%")
  },
  ImageBackground_45_133: {
    width: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    top: hp("3.825136612021854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.73333333333333%")
  },
  ImageBackground_45_134: {
    width: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    top: hp("17.622950819672127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.86666666666667%")
  },
  ImageBackground_45_135: {
    width: wp("20.533333333333335%"),
    height: hp("10.51912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_136: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.400000000000006%"),
    top: hp("1.0928961748633874%")
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
