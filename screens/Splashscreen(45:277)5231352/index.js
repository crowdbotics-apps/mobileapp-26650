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
      <View style={styles.View_45_278}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9254/1457/665c5ec8f36744050aa2202adf3ad946"
          }}
          style={styles.ImageBackground_45_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0be/4c84/9b11a2905b6eced1dc0925b17ea2fde0"
          }}
          style={styles.ImageBackground_45_281}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d3/9747/855133f645bb8703e6be88bb1c806caf"
          }}
          style={styles.ImageBackground_45_283}
        />
        <View style={styles.View_45_285}>
          <Text style={styles.Text_45_285}>9:30</Text>
        </View>
      </View>
      <View style={styles.View_45_286}>
        <Text style={styles.Text_45_286}>Your Active Bands</Text>
      </View>
      <View style={styles.View_45_287}>
        <Text style={styles.Text_45_287}>Click on A Node to Chat</Text>
      </View>
      <View style={styles.View_45_288}>
        <Text style={styles.Text_45_288}>Drag &amp; Drop a A Band To Chat</Text>
      </View>
      <View style={styles.View_45_289} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4216/708c/ae0784a272b06eb841447737c03657d2"
        }}
        style={styles.ImageBackground_45_298}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab5f/e1d5/c975e29a93a90166699ea61879614dc0"
        }}
        style={styles.ImageBackground_45_302}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ca7/38f7/3f7fc6cc88dec0843292ce8e291eaf23"
        }}
        style={styles.ImageBackground_45_303}
      />
      <View style={styles.View_45_397}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aea4/d1af/eb58ac8aadffd908dd4f131312cbd585"
          }}
          style={styles.ImageBackground_45_398}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56db/edde/d43e01ae387c0188c6132ceb1389208b"
          }}
          style={styles.ImageBackground_45_399}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfac/ea5a/8b4d7f7fdf4d5d2d21be38d2f33c7651"
          }}
          style={styles.ImageBackground_45_400}
        />
        <View style={styles.View_45_401}>
          <Text style={styles.Text_45_401}>Punk T R&amp;B</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d302/eb4e/5cd324997ff2c4a9aadf6540a85666d8"
        }}
        style={styles.ImageBackground_45_295}
      />
      <View style={styles.View_45_396}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b48/0c3b/5c5f422a9d1c8cd2e9d21647e4a47c4f"
          }}
          style={styles.ImageBackground_45_359}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c170/e697/81e8f410ae1ba032fe0e8fc3dd906bdb"
          }}
          style={styles.ImageBackground_45_360}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec97/f0a2/26a2e08281a179469ea0e5e2f66c794e"
          }}
          style={styles.ImageBackground_45_361}
        />
        <View style={styles.View_45_362}>
          <Text style={styles.Text_45_362}>Sunny boys (pop)</Text>
        </View>
      </View>
      <View style={styles.View_45_463}>
        <View style={styles.View_45_452}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88b6/85e0/a97ce80f6fc518bb39ca89ba803ea376"
            }}
            style={styles.ImageBackground_45_453}
          />
          <View style={styles.View_45_455}>
            <View style={styles.View_45_456}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa09/aff5/c26723e09cfb55c530356abdce91734b"
                }}
                style={styles.ImageBackground_45_457}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_45_462}>
          <Text style={styles.Text_45_462}>1</Text>
        </View>
      </View>
      <View style={styles.View_45_469}>
        <View style={styles.View_45_470}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88b6/85e0/a97ce80f6fc518bb39ca89ba803ea376"
            }}
            style={styles.ImageBackground_45_471}
          />
          <View style={styles.View_45_473}>
            <View style={styles.View_45_474}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa09/aff5/c26723e09cfb55c530356abdce91734b"
                }}
                style={styles.ImageBackground_45_475}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_45_480}>
          <Text style={styles.Text_45_480}>3</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_45_278: {
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
  ImageBackground_45_279: {
    flexGrow: 1,
    width: wp("3.544449869791667%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.522216796875%"),
    top: hp("0.4098360655737705%")
  },
  ImageBackground_45_281: {
    flexGrow: 1,
    width: wp("3.544441731770833%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.52478841145835%"),
    top: hp("0.4098360655737705%")
  },
  ImageBackground_45_283: {
    flexGrow: 1,
    width: wp("3.2717936197916666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.15983072916667%"),
    top: hp("0.4098360655737705%")
  },
  View_45_285: {
    flexGrow: 1,
    width: wp("8.452136739095053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_45_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_286: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.221907552083334%"),
    top: hp("19.03783245816257%")
  },
  Text_45_286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_287: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.421907552083335%"),
    top: hp("24.726775956284154%")
  },
  Text_45_287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_288: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.421907552083335%"),
    top: hp("69.85411930605362%")
  },
  Text_45_288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_289: {
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
  ImageBackground_45_298: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("51.229508196721305%"),
    minHeight: hp("51.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("74.4535519125683%")
  },
  ImageBackground_45_302: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    height: hp("36.74863387978142%"),
    minHeight: hp("36.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("83.33333333333334%")
  },
  ImageBackground_45_303: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.400000000000002%"),
    top: hp("91.2568306010929%")
  },
  View_45_397: {
    width: wp("32.800000000000004%"),
    minWidth: wp("32.800000000000004%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.888574218749994%"),
    top: hp("36.24756192900444%")
  },
  ImageBackground_45_398: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.1366120218579212%")
  },
  ImageBackground_45_399: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%"),
    top: hp("0%")
  },
  ImageBackground_45_400: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  View_45_401: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("5.191256830601091%")
  },
  Text_45_401: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_45_295: {
    width: wp("9.333333333333334%"),
    height: hp("4.781420765027322%"),
    top: hp("61.11094990714652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.888574218749994%")
  },
  View_45_396: {
    width: wp("32.96480712890625%"),
    minWidth: wp("32.96480712890625%"),
    height: hp("16.344114209784834%"),
    minHeight: hp("16.344114209784834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.539485677083334%"),
    top: hp("36.24756192900444%")
  },
  ImageBackground_45_359: {
    width: wp("30.556508382161457%"),
    minWidth: wp("30.556508382161457%"),
    height: hp("15.518049855049842%"),
    minHeight: hp("15.518049855049842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5402669270833318%"),
    top: hp("0.13802950499487565%")
  },
  ImageBackground_45_360: {
    width: wp("31.089833577473957%"),
    minWidth: wp("31.089833577473957%"),
    height: hp("15.519472549521856%"),
    minHeight: hp("15.519472549521856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8749674479166654%"),
    top: hp("0.004977867251540147%")
  },
  ImageBackground_45_361: {
    width: wp("31.089833577473957%"),
    minWidth: wp("31.089833577473957%"),
    height: hp("15.519472549521856%"),
    minHeight: hp("15.519472549521856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196637930114363%")
  },
  View_45_362: {
    width: wp("20.59554646809896%"),
    minWidth: wp("20.59554646809896%"),
    minHeight: hp("6.202236029619727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.131103515625%"),
    top: hp("3.7785180930882873%")
  },
  Text_45_362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_45_463: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.68857421875%"),
    top: hp("35.15466575414105%")
  },
  View_45_452: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_453: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_455: {
    width: wp("1.991111119588216%"),
    height: hp("1.0200364342152748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6592610677083357%"),
    top: hp("1.4450490148992472%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_45_456: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3925944010416664%"),
    top: hp("-0.5109192895107597%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_45_457: {
    width: wp("3.2%"),
    height: hp("1.7304189869614899%"),
    top: hp("0.17490074282787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0499999999999936%")
  },
  View_45_462: {
    width: wp("1.3231163024902344%"),
    top: hp("0.3624754525273204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.286946614583336%")
  },
  Text_45_462: {
    color: "rgba(255, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_45_469: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.35524088541666%"),
    top: hp("35.15466575414105%")
  },
  View_45_470: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_45_471: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_45_473: {
    width: wp("1.991111119588216%"),
    height: hp("1.0200364342152748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6592610677083286%"),
    top: hp("1.4450490148992472%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_45_474: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3925944010416487%"),
    top: hp("-0.5109192895107597%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_45_475: {
    width: wp("3.2%"),
    height: hp("1.7304189869614899%"),
    top: hp("0.17490074282787305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.049999999999983%")
  },
  View_45_480: {
    width: wp("1.3231163024902344%"),
    top: hp("0.3624754525273204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.286946614583329%")
  },
  Text_45_480: {
    color: "rgba(255, 251, 251, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
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
