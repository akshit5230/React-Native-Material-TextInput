import React from 'react';
import {
  View,
  Image,
  TextInput,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';

class CustomTextField extends React.Component {

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
    const { label, unfocusedBorderBottomColor, focusedBorderBottomColor, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this.state.animation,
      ...this.props.labelStyle
      // fontFamily: 'ProximaNova-Regular'
    };
    return (
      <View style={{
        marginVertical: 5,
        paddingTop: 18,
        borderBottomWidth: 1,
        borderBottomColor: this.state.isFocused ? focusedBorderBottomColor : unfocusedBorderBottomColor
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
              padding: 0,
              ...this.props.inputStyle
            }}
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

CustomTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  unfocusedBorderBottomColor: PropTypes.string,
  focusedBorderBottomColor: PropTypes.string,
  labelStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string
  }),
  inputStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    fontFamily: PropTypes.string
  })
};

CustomTextField.defaultProps = {
  label: 'Label',
  value: "",
  unfocusedBorderBottomColor: '#E3E3E3',
  focusedBorderBottomColor: '#44B3FD',
  labelStyle: PropTypes.shape({
    color: '#626262',
    fontSize: 15
  }),
  inputStyle: PropTypes.shape({
    fontSize: 18,
    color: '#000000'
  })
};

module.exports = CustomTextField;
