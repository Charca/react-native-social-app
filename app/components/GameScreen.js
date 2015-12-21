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
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class GameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the game screen</Text>
      </View>
    );
  }
};

module.exports = GameScreen;
