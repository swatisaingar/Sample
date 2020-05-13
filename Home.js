import React from 'react';
import styles from './Styles';
import {View, Text, Button, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Home extends React.Component {
  static navigationOptions = {
    titile: 'Welcome',
  };
  state = {
    data: [],
  };

  // componentDidMount() {
  //   this.sendGet();
  // }

  // sendGet = async () => {
  //   console.log('called');
  //   // var finaldata = [];
  //   const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
  //   const pokemon = await pokemonApiCall.json();
  //   console.log(pokemon);
  //   this.setState({pokeList: pokemon.results, loading: false});
  // };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const json = await response.json();
    console.log(json);
    this.setState({data: json.results});
  };
  render() {
    // const moveToSecondPage = () => {
    //   console.log('page navigate to secondpage');
    //   this.props.navigation.navigate('SecondPage', {sendGet});
    // };
    // const {pokeList, loading} = this.state;
    // if (!loading) {
    //   return (
    //     <FlatList
    //       data={pokeList}
    //       renderItem={this.renderItem}
    //       keyExtractor={item => item.name}
    //     />
    //   );
    // }
    return (
      <View style={styles.sectionContainer}>
        {/* <Text style={styles.sectionTitle}>Test Page Navigation</Text>
        <Text style={styles.sectionDescription}>
          Click Button to Navigate to Second page.
        </Text>
        <View>
          <Button
            title="click"
            onPress={() => {
              this.props.navigation.navigate('SecondPage', {
                pokeList: this.setState.pokeList,
              });
            }}
          />
        </View> */}
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('SecondPage', item)
              }>
              <Text>{`${item.name} ${item.url}`}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
