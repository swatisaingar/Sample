import React from 'react';
import styles from './Styles';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  state = {
    enable: true,
    text: '',
  };

  onPressButton = () => {
    this.setState({enable: false});
    this.props.navigation.navigate('SecondPage');
  };

  fetchData(text) {
    this.setState({text});
    const api = 'https://restcountries.eu/rest/v2/name/';
    // console.log(api + '${this.state.text}');
    fetch(api + text)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <TextInput
          style={styles.sectionContainer}
          placeholder="Enter the value"
          onChangeText={text => {
            this.fetchData(text);
          }}
        />
        <View style={styles.sectionContainer}>
          <View>
            <Button title="click" onPress={this.onPressButton} />
          </View>
        </View>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SecondPage', item)
              }>
              <Text>{item.capital}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
