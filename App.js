import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity , FlatList} from 'react-native';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {num1: '', num2: '', result: '', data:[]};
  }



buttonPressedPlus = () => {

  const sum = parseInt(this.state.num1) + parseInt(this.state.num2);

  this.setState({ result: sum})
  this.setState({data:[...this.state.data,
    {key: this.state.num1 + '+' + this.state.num2 + '=' + sum}]})
  };



  buttonPressedMinus = () => {

    const deduction = parseInt(this.state.num1) - parseInt(this.state.num2);

    this.setState({ result: deduction})
    this.setState({data:[...this.state.data, {key: this.state.num1 + '-' + this.state.num2 + '=' + sum}]})
  };



  render() {
    return (

      <View style={styles.container}>

        <Text>Result: {this.state.result}</Text>

        <TextInput style = {{width: 200, borderColor: 'gray', borderWidth: 1}}
        keyboardType = 'numeric'
        onChangeText = {(num1) => this.setState({num1})}
        value = {this.state.num1}
      />

      <TextInput  style = {{width: 200, borderColor: 'gray', borderWidth: 1}}
      keyboardType = 'phone-pad'
        onChangeText = {(num2) => this.setState({num2})}
        value = {this.state.num2}
      />

      <View style = {styles.rowButton}>
      <Button onPress = {this.buttonPressedPlus} title = "+" style = {styles.buttonPlus}  color = '#0066ff'/>
      <Button onPress = {this.buttonPressedMinus} title = "-" style = {styles.buttonMinus}  color = '#0066ff'/>
      </View>
      <Text>History</Text>
      <FlatList data={this.state.data}
      renderItem={({item}) =>
      <Text>{item.key}</Text>}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowButton: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonPlus: {
    width: '50%'
  },

  buttonMinus: {
    width: '50%'
  }
});
