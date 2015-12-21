'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text
} = React;

var NavBar = require('./NavBar');
var FriendsList = require('./FriendsList');
var Profile = require('./Profile');

var routes = require('../routes');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

class Friends extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={routes.friends.list}
        renderScene={this.renderScene}
        navigationBar={NavBar} />
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'list') {
      return <FriendsList navigator={navigator} />
    } else if(route.name === 'profile') {
      return <Profile navigator={navigator} userInfo={route.userInfo} />
    }
  }
};

module.exports = Friends;
