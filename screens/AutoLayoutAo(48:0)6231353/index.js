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
      <View style={styles.View_52_30}>
        <View style={styles.View_52_27}>
          <View style={styles.View_50_510} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2522/8eea/a6a8e79c0b1ae9a63c0b75d5248c895b"
            }}
            style={styles.ImageBackground_52_26}
          />
        </View>
      </View>
      <View style={styles.View_50_520}>
        <Text style={styles.Text_50_520}>Welcome to OnRecord</Text>
      </View>
      <View style={styles.View_52_36}>
        <View style={styles.View_45_521}>
          <View style={styles.View_48_84}>
            <Text style={styles.Text_48_84}>Sign In</Text>
          </View>
        </View>
        <View style={styles.View_50_508}>
          <View style={styles.View_50_509}>
            <Text style={styles.Text_50_509}>Sign Up</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_52_30: {
    width: wp("41.42857869466146%"),
    minWidth: wp("41.42857869466146%"),
    height: hp("29.145728643216078%"),
    minHeight: hp("29.145728643216078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.28571428571429%"),
    top: hp("32.1608040201005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_52_27: {
    flexGrow: 1,
    width: wp("41.42857869466146%"),
    height: hp("29.145728643216078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_50_510: {
    width: wp("41.42857869466146%"),
    height: hp("29.145728643216078%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 480,
    borderTopRightRadius: 480,
    borderBottomLeftRadius: 480,
    borderBottomRightRadius: 480
  },
  ImageBackground_52_26: {
    width: wp("39.285714285714285%"),
    minWidth: wp("39.285714285714285%"),
    height: hp("27.63819095477387%"),
    minHeight: hp("27.63819095477387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1904761904761898%"),
    top: hp("0.8375209380234523%"),
    resizeMode: "cover"
  },
  View_50_520: {
    width: wp("78.80952380952381%"),
    minHeight: hp("11.390284757118927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.714285714285714%"),
    top: hp("18.76046901172529%")
  },
  Text_50_520: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_36: {
    width: wp("62.38095238095238%"),
    minWidth: wp("62.38095238095238%"),
    height: hp("24.120603015075375%"),
    minHeight: hp("24.120603015075375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.80952380952381%"),
    top: hp("71.69179229480737%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_45_521: {
    width: wp("60.238095238095234%"),
    minWidth: wp("60.238095238095234%"),
    height: hp("10.050251256281408%"),
    minHeight: hp("10.050251256281408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(227, 227, 227, 0.30000001192092896)",
    overflow: "hidden"
  },
  View_48_84: {
    width: wp("16.428571428571427%"),
    minWidth: wp("16.428571428571427%"),
    minHeight: hp("5.025125628140704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.904761904761905%"),
    top: hp("2.5125628140703498%")
  },
  Text_48_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_50_508: {
    width: wp("62.38095238095238%"),
    minWidth: wp("62.38095238095238%"),
    height: hp("10.050251256281408%"),
    minHeight: hp("10.050251256281408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.070351758793976%"),
    backgroundColor: "rgba(227, 227, 227, 0.30000001192092896)",
    overflow: "hidden"
  },
  View_50_509: {
    width: wp("18.571428571428573%"),
    minWidth: wp("18.571428571428573%"),
    minHeight: hp("5.025125628140704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.904761904761905%"),
    top: hp("2.5125628140703498%")
  },
  Text_50_509: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 597 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
