'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#21C064',
    borderRadius: 28,
    width: 200,
    padding: 16
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPlay.bind(this)}>
          <Text style={styles.buttonText}>Play a Game</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onPlay() {
    this.props.navigator.push({name: 'game'});
  }
};

module.exports = HomeScreen;
