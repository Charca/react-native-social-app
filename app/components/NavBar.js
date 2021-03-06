'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text
} = React;

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#2B2836',
    shadowColor: '#111',
    shadowOpacity: .8,
    shadowRadius: 6
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
        {route.title}
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

module.exports = (
  <Navigator.NavigationBar
    style={styles.navBar}
    routeMapper={NavigationBarRouteMapper} />
);
