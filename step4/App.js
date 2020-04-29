import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}*/


export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			isLoading: true,
			dataSource: null,

		}
	}

	componentDidMount () {
		return fetch('https://api.covid19api.com/summary')
			.then ( (response) => response.json())
			.then ( (responseJson) => {

				this.setState({
					isLoading: false,
					dataSource: responseJson.Countries,
				})

			})

		.catch((error) => {
			console.log(error)


		});
	}


	render(){

		if (this.state.isLoading){
			return (
				<View style={styles.container}>
					<ActivityIndicator/>
				</View>
			)
		} else{ 

			let Countries = this.state.dataSource.map((val, key) => {
				return <View key = {key} style={styles.container}>
							<Text>{val.Country}     {val.NewDeaths}</Text>
							</View>
			});

			return (
				<View style={styles.item}>
					{Countries}

				</View>
			);

		}

	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
  	flex:1,
  	alignSelf: 'stretch',
  	margin:10,
  	alignItems: 'center',
  	justifyContent: 'center',

  }


});
