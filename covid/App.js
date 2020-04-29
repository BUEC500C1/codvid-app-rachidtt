import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'; //new
import {Dimensions} from 'react-native';//new
import axios from 'axios';//for apicalls
import {fetchData} from './src/api';
import {StackNavigator} from 'react-navigation';


/*
//Step2: Hello world:
export default function App() {

  var test= 5
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD COVIDAPP RACHIDTT</Text>
    </View>
  );
}
*/


//step 3: Map display
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


//Step4: API:
export default function App() {

  var test= 5;
  

  return (
    <View style={styles.container}>
      <Text>Hello {test}</Text>
    </View>
  );
}


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
