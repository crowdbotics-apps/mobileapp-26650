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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/588d/e33e/b413fe1c5edfe2dedec1fd6cff78669b"
        }}
        style={styles.ImageBackground_45_505}
      />
      <View style={styles.View_45_206}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9254/1457/665c5ec8f36744050aa2202adf3ad946"
          }}
          style={styles.ImageBackground_I45_206_45_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/4c84/9b11a2905b6eced1dc0925b17ea2fde0"
          }}
          style={styles.ImageBackground_I45_206_45_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d3/9747/855133f645bb8703e6be88bb1c806caf"
          }}
          style={styles.ImageBackground_I45_206_45_283}
        />
        <View style={styles.View_I45_206_45_285}>
          <Text style={styles.Text_I45_206_45_285}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_45_207}>
        <View style={styles.View_45_218}>
          <Text style={styles.Text_45_218}>Punk T </Text>
        </View>
        <View style={styles.View_45_219}>
          <Text style={styles.Text_45_219}>Active </Text>
        </View>
      </View>
      <View style={styles.View_45_514}>
        <Text style={styles.Text_45_514}>R&amp;B</Text>
      </View>
      <View style={styles.View_45_220}>
        <View style={styles.View_45_221} />
        <View style={styles.View_45_222}>
          <Text style={styles.Text_45_222}>TODAY</Text>
        </View>
      </View>
      <View style={styles.View_45_232}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6b/aee6/89262f1bcff2a826bb91f74c752cf063"
          }}
          style={styles.ImageBackground_45_233}
        />
        <View style={styles.View_45_234}>
          <Text style={styles.Text_45_234}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_45_241}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b7a/2619/1880c9b7f34cd484aa16846517992ed3"
          }}
          style={styles.ImageBackground_45_242}
        />
        <View style={styles.View_45_243}>
          <Text style={styles.Text_45_243}>9:31</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f84/b943/797a6a1f4f447744ced76dda9c9f9c95"
          }}
          style={styles.ImageBackground_45_247}
        />
      </View>
      <View style={styles.View_45_266} />
      <View style={styles.View_45_190}>
        <View style={styles.View_45_191}>
          <Text style={styles.Text_45_191}>Anne</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c7c/9e44/2b2548eb165ecbb1b1d746c535c5cbdc"
          }}
          style={styles.ImageBackground_45_192}
        />
      </View>
      <View style={styles.View_45_193}>
        <View style={styles.View_45_194}>
          <Text style={styles.Text_45_194}>John</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8f9/c24d/6de552abcf9aa078e1d83af929c2cca8"
          }}
          style={styles.ImageBackground_45_195}
        />
      </View>
      <View style={styles.View_45_196}>
        <View style={styles.View_45_197}>
          <Text style={styles.Text_45_197}>Anie</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e060/c335/5e11b1d9b3e98a082cb1248ae7d53df5"
          }}
          style={styles.ImageBackground_45_198}
        />
      </View>
      <View style={styles.View_45_199}>
        <View style={styles.View_45_200}>
          <Text style={styles.Text_45_200}>Mark</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc9/f4fe/7fa78a70841249a8e7690a4259bd477b"
          }}
          style={styles.ImageBackground_45_201}
        />
      </View>
      <View style={styles.View_45_498}>
        <View style={styles.View_45_499}>
          <Text style={styles.Text_45_499}>Mark</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc9/f4fe/7fa78a70841249a8e7690a4259bd477b"
          }}
          style={styles.ImageBackground_45_500}
        />
      </View>
      <View style={styles.View_45_202}>
        <View style={styles.View_45_203}>
          <Text style={styles.Text_45_203}>stella</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea63/4b5a/96d0f15f07d3d20e2241a18472082a31"
          }}
          style={styles.ImageBackground_45_204}
        />
      </View>
      <View style={styles.View_45_481}>
        <Text style={styles.Text_45_481}>Band Members</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_45_505: {
    width: wp("23.733335367838542%"),
    minWidth: wp("23.733335367838542%"),
    height: hp("11.763071362438097%"),
    minHeight: hp("11.763071362438097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.644807942708333%"),
    top: hp("5.845800514429645%")
  },
  View_45_206: {
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
  ImageBackground_I45_206_45_279: {
    flexGrow: 1,
    width: wp("3.544449869791667%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.522216796875%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_206_45_281: {
    flexGrow: 1,
    width: wp("3.544441731770833%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.52478841145833%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_206_45_283: {
    flexGrow: 1,
    width: wp("3.2717936197916666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.15983072916666%"),
    top: hp("0.4098360655737707%")
  },
  View_I45_206_45_285: {
    flexGrow: 1,
    width: wp("8.452136739095053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I45_206_45_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_207: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.466666666666665%"),
    top: hp("8.879781420765028%")
  },
  View_45_218: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_45_218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_219: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%")
  },
  Text_45_219: {
    color: "rgba(143, 206, 202, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_514: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.911474609374999%"),
    top: hp("9.807549148309427%")
  },
  Text_45_514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_220: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("17.349726775956285%")
  },
  View_45_221: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderColor: "rgba(207, 203, 203, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19
  },
  View_45_222: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0.6830601092896167%")
  },
  Text_45_222: {
    color: "rgba(207, 203, 203, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_232: {
    width: wp("9.775025431315104%"),
    minWidth: wp("9.775025431315104%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("24.316939890710383%")
  },
  ImageBackground_45_233: {
    width: wp("9.775025431315104%"),
    minWidth: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    minHeight: hp("5.007697454567165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_234: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("5.737704918032787%")
  },
  Text_45_234: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_241: {
    width: wp("12.708360799153645%"),
    minWidth: wp("12.708360799153645%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("34.97267759562842%")
  },
  ImageBackground_45_242: {
    width: wp("9.775025431315104%"),
    minWidth: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    minHeight: hp("5.007697454567165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0%")
  },
  View_45_243: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666677%"),
    top: hp("6.010928961748633%")
  },
  Text_45_243: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_247: {
    width: wp("3.996079508463542%"),
    height: hp("2.311012132571695%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_45_266: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.31693989071039%"),
    backgroundColor: "rgba(237, 245, 246, 1)"
  },
  View_45_190: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.911474609375%"),
    top: hp("88.08623767289959%")
  },
  View_45_191: {
    width: wp("10.372649129231771%"),
    minWidth: wp("10.372649129231771%"),
    minHeight: hp("3.015973138027504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9623942057291668%"),
    top: hp("8.186213175455734%")
  },
  Text_45_191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.717948913574219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_192: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("7.180888274979721%"),
    minHeight: hp("7.180888274979721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_193: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.376432291666667%"),
    top: hp("88.08623767289959%")
  },
  View_45_194: {
    width: wp("10.372649129231771%"),
    minWidth: wp("10.372649129231771%"),
    minHeight: hp("3.015973138027504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.962394205729165%"),
    top: hp("8.186213175455734%")
  },
  Text_45_194: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_195: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("7.180888274979721%"),
    minHeight: hp("7.180888274979721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_196: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.841389973958336%"),
    top: hp("88.08623767289959%")
  },
  View_45_197: {
    width: wp("10.372649129231771%"),
    minWidth: wp("10.372649129231771%"),
    minHeight: hp("3.015973138027504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9623942057291615%"),
    top: hp("8.186213175455734%")
  },
  Text_45_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.717948913574219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_198: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("7.180888274979721%"),
    minHeight: hp("7.180888274979721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_199: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.30634765625%"),
    top: hp("88.08623767289959%")
  },
  View_45_200: {
    width: wp("10.372649129231771%"),
    minWidth: wp("10.372649129231771%"),
    minHeight: hp("3.015973138027504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9623901367187528%"),
    top: hp("8.186213175455734%")
  },
  Text_45_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.717948913574219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_201: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("7.180888274979721%"),
    minHeight: hp("7.180888274979721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_498: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.30634765625%"),
    top: hp("88.08623767289959%")
  },
  View_45_499: {
    width: wp("10.372649129231771%"),
    minWidth: wp("10.372649129231771%"),
    minHeight: hp("3.015973138027504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9623901367187528%"),
    top: hp("8.186213175455734%")
  },
  Text_45_499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.717948913574219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_500: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("7.180888274979721%"),
    minHeight: hp("7.180888274979721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_202: {
    width: wp("14.673502604166666%"),
    minWidth: wp("14.673502604166666%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.77130533854167%"),
    top: hp("88.08623767289959%")
  },
  View_45_203: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6068359374999943%"),
    top: hp("8.196721311475414%")
  },
  Text_45_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.717948913574219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_204: {
    width: wp("14.017093912760417%"),
    minWidth: wp("14.017093912760417%"),
    height: hp("7.180888274979721%"),
    minHeight: hp("7.180888274979721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_481: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.644807942708333%"),
    top: hp("80.29935242699796%")
  },
  Text_45_481: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
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
