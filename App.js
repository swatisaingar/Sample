import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home';
import SecondPage from './SecondPage';
import {createAppContainer} from 'react-navigation';
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  SecondPage: {screen: SecondPage},
});

const App = createAppContainer(MainNavigator);

export default App;
