import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'; //new
import {Dimensions} from 'react-native';//new
import axios from 'axios';//for apicalls
import {fetchData} from './src/api';
import {StackNavigator} from 'react-navigation';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD COVIDAPP RACHIDTT</Text>
    </View>
  );
}




/*export default class App extends React.Component {
  async componentDidMount(){
    const data = await fetchData();
    console.log()
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
