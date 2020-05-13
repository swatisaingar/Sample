import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './Styles';

export default class SecondPage extends React.Component {
  state = {
    isOn: false,
    refreshig: false,
  };

  onPressButton = () => {
    this.props.navigation.navigate('Home');
  };

  fetchData2(text) {
    this.setState({text});
    const api = 'https://api.weatherstack.com/current?';
    const apikey = '89d07a891858caeaca9d725aef1839f9';
    // console.log(api + '${this.state.text}');
    fetch(api + text + apikey)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.capital);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const {navigation} = this.props;
    const user_name = navigation.getParam('capital');
    //console.log(user_name);
    const user_name1 = navigation.getParam('population');
    const user_name2 = navigation.getParam('latlng');
    const user_name3 = navigation.getParam('flag');
    // console.log(user_name1);
    const backToHome = () => {
      this.props.navigation.navigate('Home');
    };

    return (
      <View style={styles.sectionContainer}>
        <TextInput
          style={styles.sectionContainer}
          placeholder="Enter the value"
          onChangeText={text => {
            this.fetchData2(text);
          }}
        />
        <View style={styles.sectionContainer}>
          <View>
            <Button title="click" onPress={this.onPressButton} />
          </View>
        </View>
      </View>
    );
  }
}
