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
      <View style={styles.View_45_138}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9254/1457/665c5ec8f36744050aa2202adf3ad946"
          }}
          style={styles.ImageBackground_I45_138_45_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/4c84/9b11a2905b6eced1dc0925b17ea2fde0"
          }}
          style={styles.ImageBackground_I45_138_45_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d3/9747/855133f645bb8703e6be88bb1c806caf"
          }}
          style={styles.ImageBackground_I45_138_45_283}
        />
        <View style={styles.View_I45_138_45_285}>
          <Text style={styles.Text_I45_138_45_285}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_45_139}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6b/aee6/89262f1bcff2a826bb91f74c752cf063"
          }}
          style={styles.ImageBackground_45_140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3f3/c151/d79b201524a049abed4917d85292ac40"
          }}
          style={styles.ImageBackground_45_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d8/4842/e94b6cefd16f0e0e32622ed15b995fc5"
          }}
          style={styles.ImageBackground_45_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ef4/22f0/124ea3c5bbece8f87976420d0a2167c6"
          }}
          style={styles.ImageBackground_45_143}
        />
        <View style={styles.View_45_144}>
          <Text style={styles.Text_45_144}>Adrezza conella</Text>
        </View>
        <View style={styles.View_45_145}>
          <Text style={styles.Text_45_145}>Active </Text>
        </View>
      </View>
      <View style={styles.View_45_146}>
        <View style={styles.View_45_147} />
        <View style={styles.View_45_148}>
          <Text style={styles.Text_45_148}>TODAY</Text>
        </View>
      </View>
      <View style={styles.View_45_149}>
        <View style={styles.View_45_150}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb45/b0d0/f3dc984eff08c0cbc21bbf9bca1c67ec"
            }}
            style={styles.ImageBackground_45_151}
          />
          <View style={styles.View_45_152}>
            <Text style={styles.Text_45_152}>
              WHat is your plan for the weekend, Will we go to the same place
            </Text>
          </View>
        </View>
        <View style={styles.View_45_153}>
          <Text style={styles.Text_45_153}>9:30</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6b/aee6/89262f1bcff2a826bb91f74c752cf063"
          }}
          style={styles.ImageBackground_45_154}
        />
        <View style={styles.View_45_155}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f293/824c/371be3320c9e05526c58d54de52c43af"
            }}
            style={styles.ImageBackground_45_156}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b58e/80e0/d07cbd42dcc87e027078f7969460f9ba"
            }}
            style={styles.ImageBackground_45_157}
          />
        </View>
      </View>
      <View style={styles.View_45_158}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad6b/aee6/89262f1bcff2a826bb91f74c752cf063"
          }}
          style={styles.ImageBackground_45_159}
        />
        <View style={styles.View_45_160}>
          <Text style={styles.Text_45_160}>9:30</Text>
        </View>
        <View style={styles.View_45_161}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eaf/2c52/4e8b19b7f4af6d43ed5c6b6d66bcb676"
            }}
            style={styles.ImageBackground_45_162}
          />
          <View style={styles.View_45_163}>
            <Text style={styles.Text_45_163}>Hey Elliot, How is it Going?</Text>
          </View>
        </View>
        <View style={styles.View_45_164}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f293/824c/371be3320c9e05526c58d54de52c43af"
            }}
            style={styles.ImageBackground_45_165}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b58e/80e0/d07cbd42dcc87e027078f7969460f9ba"
            }}
            style={styles.ImageBackground_45_166}
          />
        </View>
      </View>
      <View style={styles.View_45_167}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b7a/2619/1880c9b7f34cd484aa16846517992ed3"
          }}
          style={styles.ImageBackground_45_168}
        />
        <View style={styles.View_45_169}>
          <Text style={styles.Text_45_169}>9:31</Text>
        </View>
        <View style={styles.View_45_170}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a706/8e10/ab80c0a462c7579f704147f1079ad655"
            }}
            style={styles.ImageBackground_45_171}
          />
          <View style={styles.View_45_172}>
            <Text style={styles.Text_45_172}>Hey Adrezza, All Good😊</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f84/b943/797a6a1f4f447744ced76dda9c9f9c95"
          }}
          style={styles.ImageBackground_45_173}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e834/528a/cdd6707bb73787fb37d7abdcff88bac3"
        }}
        style={styles.ImageBackground_45_174}
      />
      <View style={styles.View_45_177} />
      <View style={styles.View_45_178}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80b4/369e/13abd9a23f94a29650d9e3ccb6efadf7"
          }}
          style={styles.ImageBackground_45_179}
        />
        <View style={styles.View_45_180}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0fc/7c9e/a84a8f737a9e4f2fbf480ceeec902e4d"
            }}
            style={styles.ImageBackground_45_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ef/39f0/8bde1ae06d58d8a454aaf72544bf58c8"
            }}
            style={styles.ImageBackground_45_182}
          />
        </View>
        <View style={styles.View_45_185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d7b/7f81/514e10e5032dbf31b2de065929af8dfb"
            }}
            style={styles.ImageBackground_45_186}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37db/a455/11500a69271dff7742f45f323d9d7030"
            }}
            style={styles.ImageBackground_45_187}
          />
        </View>
        <View style={styles.View_45_188} />
        <View style={styles.View_45_189}>
          <Text style={styles.Text_45_189}>HI</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_45_138: {
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
  ImageBackground_I45_138_45_279: {
    flexGrow: 1,
    width: wp("3.544449869791667%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.52220052083334%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_138_45_281: {
    flexGrow: 1,
    width: wp("3.544441731770833%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.5248046875%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_I45_138_45_283: {
    flexGrow: 1,
    width: wp("3.2717936197916666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.15983072916666%"),
    top: hp("0.4098360655737707%")
  },
  View_I45_138_45_285: {
    flexGrow: 1,
    width: wp("8.452136739095053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I45_138_45_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_139: {
    width: wp("85.7750244140625%"),
    minWidth: wp("85.7750244140625%"),
    height: hp("5.007697454567165%"),
    minHeight: hp("5.007697454567165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("8.743169398907105%")
  },
  ImageBackground_45_140: {
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
  ImageBackground_45_141: {
    width: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.73333333333334%")
  },
  ImageBackground_45_142: {
    width: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_143: {
    width: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_45_144: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("0.13661202185792298%")
  },
  Text_45_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_145: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("2.322404371584698%")
  },
  Text_45_145: {
    color: "rgba(143, 206, 202, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_146: {
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
  View_45_147: {
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
  View_45_148: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    top: hp("0.6830601092896167%")
  },
  Text_45_148: {
    color: "rgba(207, 203, 203, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_149: {
    width: wp("84.96000162760417%"),
    minWidth: wp("84.96000162760417%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("45.76502732240437%")
  },
  View_45_150: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_45_151: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_152: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.8%"),
    top: hp("2.0491803278688536%")
  },
  Text_45_152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_153: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333333%"),
    top: hp("5.601092896174862%")
  },
  Text_45_153: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_154: {
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
  View_45_155: {
    width: wp("7.626666259765626%"),
    minWidth: wp("7.626666259765626%"),
    height: hp("3.907103616683209%"),
    minHeight: hp("3.907103616683209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("0.9562841530054698%")
  },
  ImageBackground_45_156: {
    width: wp("7.626666259765626%"),
    minWidth: wp("7.626666259765626%"),
    height: hp("3.907103616683209%"),
    minHeight: hp("3.907103616683209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_157: {
    width: wp("4.5843353271484375%"),
    height: hp("2.481971542691924%"),
    top: hp("0.7472595881894577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4586588541666572%")
  },
  View_45_158: {
    width: wp("84.96000162760417%"),
    minWidth: wp("84.96000162760417%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("24.316939890710383%")
  },
  ImageBackground_45_159: {
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
  View_45_160: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("5.737704918032787%")
  },
  Text_45_160: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_161: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_45_162: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_163: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666662%"),
    top: hp("1.366120218579237%")
  },
  Text_45_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_164: {
    width: wp("7.626666259765626%"),
    minWidth: wp("7.626666259765626%"),
    height: hp("3.907103616683209%"),
    minHeight: hp("3.907103616683209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("1.0928961748633874%")
  },
  ImageBackground_45_165: {
    width: wp("7.626666259765626%"),
    minWidth: wp("7.626666259765626%"),
    height: hp("3.907103616683209%"),
    minHeight: hp("3.907103616683209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_166: {
    width: wp("4.5843353271484375%"),
    height: hp("2.481971542691924%"),
    top: hp("0.7472595881894648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4586588541666572%")
  },
  View_45_167: {
    width: wp("58.30835774739583%"),
    minWidth: wp("58.30835774739583%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("34.97267759562842%")
  },
  ImageBackground_45_168: {
    width: wp("9.775025431315104%"),
    minWidth: wp("9.775025431315104%"),
    height: hp("5.007697454567165%"),
    minHeight: hp("5.007697454567165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.53333333333333%"),
    top: hp("0%")
  },
  View_45_169: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.66666666666667%"),
    top: hp("6.010928961748633%")
  },
  Text_45_169: {
    color: "rgba(210, 210, 210, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_170: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_45_171: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_172: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    top: hp("1.3661202185792334%")
  },
  Text_45_172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_45_173: {
    width: wp("3.996079508463542%"),
    height: hp("2.311012132571695%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.599999999999994%")
  },
  ImageBackground_45_174: {
    width: wp("24.9750244140625%"),
    minWidth: wp("24.9750244140625%"),
    height: hp("5.007697454567165%"),
    minHeight: hp("5.007697454567165%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("68.98907103825137%")
  },
  View_45_177: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.546448087431695%"),
    minHeight: hp("25.546448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85.92896174863388%"),
    backgroundColor: "rgba(118, 19, 197, 1)"
  },
  View_45_178: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.01092896174863%")
  },
  ImageBackground_45_179: {
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
  View_45_180: {
    width: wp("10.826666259765624%"),
    minWidth: wp("10.826666259765624%"),
    height: hp("5.546447878978292%"),
    minHeight: hp("5.546447878978292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("2.7322404371584668%")
  },
  ImageBackground_45_181: {
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
  ImageBackground_45_182: {
    width: wp("6.033977762858073%"),
    height: hp("3.0911771326117177%"),
    top: hp("1.3232621990266438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3163411458333334%")
  },
  View_45_185: {
    width: wp("10.826666259765624%"),
    minWidth: wp("10.826666259765624%"),
    height: hp("5.546447878978292%"),
    minHeight: hp("5.546447878978292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%"),
    top: hp("2.7322404371584668%")
  },
  ImageBackground_45_186: {
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
  ImageBackground_45_187: {
    width: wp("2.666666666666667%"),
    height: hp("2.0491803278688523%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_45_188: {
    width: wp("57.599999999999994%"),
    minWidth: wp("57.599999999999994%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(237, 245, 246, 1)"
  },
  View_45_189: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("3.1420765027322517%")
  },
  Text_45_189: {
    color: "rgba(147, 140, 140, 1)",
    fontSize: 10,
    fontWeight: "400",
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
