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

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Profile Screen of { this.props.userInfo.name }</Text>
      </View>
    );
  }
};

module.exports = Profile;
