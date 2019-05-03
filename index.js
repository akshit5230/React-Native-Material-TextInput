import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,

} from 'react-native';
import global_images from "@assets/images";
import strings from '../constants/strings';

export default class CustomTextField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      animation: new Animated.Value(20)
    };
  }

  handleBlur = () => {
    this.setState({
      isFocused: false
    }, () => {
      if (this.props.value == '') {
        Animated.timing(
          this.state.animation,
          {
            toValue: 20,
            duration: 200,
          }
        ).start();
      }
    })
  }

  handleFocus = () => {
    this.setState({
      isFocused: true
    }, () => {
      // if (this.props.value != '') {
      Animated.timing(
        this.state.animation,
        {
          toValue: 0,
          duration: 200,
        }
      ).start();
      // }
    })
  }

  render() {
    const { label, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this.state.animation,
      fontSize: 15,
      color: '#626262',
      fontFamily: 'ProximaNova-Regular'
    };
    return (
      <View style={{
        marginVertical: 5,
        paddingTop: 18,
        borderBottomWidth: 1,
        borderBottomColor: this.state.isFocused ? '#44B3FD' : '#E3E3E3'
      }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <TextInput
            {...props}
            ref={(ref) => this._inputRef = ref}
            style={{
              flex: 1,
              height: 26,
              fontSize: 18,
              color: '#000',
              fontFamily: 'ProximaNova-SemiBold',
              padding: 0
            }}
            //placeholder={strings.password}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            underlineColorAndroid={'transparent'}
          />
          {this.props.hasIcon ?
            <View style={{
              justifyContent: 'center'
            }}>
              <Image source={this.props.icon} style={{ height: 15, width: 15 }} />
            </View>
            : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollview: {
    paddingHorizontal: 10,
    paddingTop: 50
  },
  image: {
    width: Dimensions.get('window').width
  }
})
