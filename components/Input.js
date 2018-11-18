import React, { Component } from "react";
import { AppRegistry, Picker, Text, TextInput, View } from "react-native";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      consultType: ""
    };
  }
  render() {
    return (
      <View
        style={{
          padding: 15,
          backgroundColor: "pink",
          borderColor: "black",
          borderWidth: 1
        }}
      >
        <TextInput
          placeholder="Name"
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
        />
        <Picker
          selectedValue={this.state.consultType}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ consultType: itemValue })
          }
        >
          <Picker.Item label="Taxes" value="Taxes" />
          <Picker.Item label="BizDev" value="BizDev" />
          <Picker.Item label="SEO" value="SEO" />
          <Picker.Item label="Social Media" value="Social Media" />
        </Picker>
        <Text>Let's connect you with someone re: {this.state.consultType}</Text>
      </View>
    );
  }
}

export default Input;
AppRegistry.registerComponent("scroll_app", () => Input);
