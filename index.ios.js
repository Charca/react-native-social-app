/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5
  },
  loginContainer: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  loginHeader: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    width: 100,
    height: 100
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
    // fontFamily: 'Open Sans',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

var SocialApp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('./img/background.png')} />
        <View style={styles.loginContainer}>
          <View style={styles.loginHeader}>
            <Image
              style={styles.logoImage}
              source={require('./img/logo.png')} />
          </View>
          <View style={styles.loginButtons}>
            <TouchableHighlight
              style={styles.button}
              onPress={this.onLogin}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
});

AppRegistry.registerComponent('SocialApp', () => SocialApp);
