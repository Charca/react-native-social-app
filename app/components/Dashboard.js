'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text
} = React;

var HomeScreen = require('./HomeScreen');
var GameScreen = require('./GameScreen');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  navBar: {
    backgroundColor: '#2B2836'
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#FFF',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  }
});

var NavigationBarRouteMapper = {
  Title(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        App Name
      </Text>
    );
  },
  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    // var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton() {}
};

class Dashboard extends React.Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBar}
            routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'home') {
      return <HomeScreen navigator={navigator} />
    } else if(route.name === 'game') {
      return <GameScreen navigator={navigator} />
    }
  }
};

module.exports = Dashboard;
