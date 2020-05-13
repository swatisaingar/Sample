import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './Styles';

export default class SecondPage extends React.Component {
  state = {
    isOn: false,
    refreshig: false,
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      refreshing: !this.state.refreshing,
    });
  }
  render() {
    const {navigation} = this.props;
    const user_name = navigation.getParam('name');
    console.log(user_name);
    const user_name1 = navigation.getParam('url');
    console.log(user_name1);
    const backToHome = () => {
      this.props.navigation.navigate('Home');
    };

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Test Page Navigation</Text>
        <Text style={styles.sectionDescription} />
        <Button title="click" onPress={backToHome} />
      </View>
    );
  }
}
