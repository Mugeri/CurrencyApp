import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { APP_ID } from 'react-native-dotenv';

export default class HomePage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      curBase: 'KSh',
      isLoading: false,
    }
  }
  _onChoose = (event) => {
    console.log('NIMEFINYWA');
    this.setState({
      curBase: event.nativeEvent.text
    });
    console.log('SASA NI: ', this.state.curBase);
  }

  _executeQuery = (base) => {
    console.log('The query is: ', base);
    this.setState({ isLoading: true });
  }

  _onGoPress = () => {
    const query = `https://openexchangerates.org/api/latest.json?app_id=` + APP_ID
    this._executeQuery(query)
  }

  _onStopPress = () => {
    this.setState({ isLoading: false });
  }

  render() {
    console.log('HomePage.render');
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}> Maybe Ksh can be the base </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.curBase}
            onChange={this._onChoose}
            placeholder='Choose a currency'
          />
          <Button
            onPress={this._onGoPress}
            color='#00ff00'
            title='Go'
          />
        </View>
        {spinner}
        <Button
          onPress={this._onStopPress}
          color='#ff0000'
          title='Stop'
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  instructions: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

AppRegistry.registerComponent('CurrencyApp', HomePage);
