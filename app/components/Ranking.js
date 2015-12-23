'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text
} = React;

var NavBar = require('./NavBar');
var RankingList = require('./RankingList');
var Profile = require('./Profile');

var routes = require('../routes');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

class Ranking extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={routes.ranking.list}
        renderScene={this.renderScene}
        navigationBar={NavBar} />
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'list') {
      return <RankingList navigator={navigator} />
    } else if(route.name === 'profile') {
      return <Profile navigator={navigator} userInfo={route.userInfo} />
    }
  }
};

module.exports = Ranking;
