# React-Native-Material-TextInput

A simple TextInput wrapper for material styling in iOS and Android. Customizable styles :+1:. Animated label :+1:.

## Installation

`npm i --save rn-material-textinput`

## Usage

1. Minimalist Example

```
<CustomTextInput
    label="EMAIL"
    value={this.state.value}
    onChangeText={(value) => this.setState({ value })}
/>
```
 
2. Full example
```
import React from 'react';
import {
  View
} from 'react-native';
import CustomTextInput from 'rn-material-textinput';

export default class MyExample extends React.Component {

  state = {
    value: ""
  }
  
  render() {
    return (
      <View style = {{
        padding: 10
      }}>
        <CustomTextInput
          label="EMAIL"
          value={this.state.value}
          onChangeText={(value) => this.setState({ value })}
          labelStyle={{
              fontFamily: 'ProximaNova-SemiBold',
              color: '#9E9E9E',
              fontSize: 15,
          }}
          inputStyle={{
              fontFamily: 'ProximaNova-SemiBold',
              color: '#2196F3',
              fontSize: 18,
          }}
          focusedBorderBottomColor="#2196F3"
          unfocusedBorderBottomColor="#9E9E9E"
        />
      </View>
    )
  }
}
```

## Props
| Name  | Usage | Example Value |
| --- | --- | --- |
| label | define the placeholder label for the input which animated upwards when focused | "USERNAME" |
| value | provide value variable and set this with onChangeText | {this.state.value} |
| unfocusedBorderBottomColor | provide custom color for bottom border when not focused | "#DDDDDD" |
| focusedBorderBottomColor | provide custom color for bottom border when focused | "#DDFFFF" |
| labelStyle | give styling to label text | { fontSize: 15, color: "#dsdsdd", fontFamily: "Nunito-Bold"} |
| inputStyle | give styling to input text | { fontSize: 18, color: "#dsgfgd", fontFamily: "Nunito-Bold"} |
| handleFocus() | fuction to focus the input programmatically | `this._emailInputRef._inputRef.handleFocus()` |
| handleBlur() | fuction to unfocus the input programmatically | `this._emailInputRef._inputRef.handleBlur()` |

You can provide other props available to TextInput component. For example 
`secureTextEntry={true},
keyboardType="number-pad",
returnKeyLabel="next"`

### Programmatically focusing on input
In cases such as prefilled values in the input, you need to focus the inputs to animate the label upwards. To do this, save reference of the `CustomTextInput` component and use `handleFocus()` and `handleBlur()` functions. For example:
```
<CustomTextInput
    ref={(ref) => this._emailInputRef = ref}
    label="EMAIL"
    value={this.props.value}
    onChangeText={(value) => this.setState({ value })}
/>
```
Use reference to focus that input
```
componentDidMount() {
  this._emailInputRef._inputRef.handleFocus()
}
```
