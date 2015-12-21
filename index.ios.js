'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  StatusBarIOS
} = React;

var LoginScreen = require('./app/components/LoginScreen');
var Main = require('./app/components/Main');

class SocialApp extends React.Component {
  componentDidMount() {
    StatusBarIOS.setStyle('light-content', true);
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'login'}}
        renderScene={this.renderScene} />
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'login') {
      return <LoginScreen navigator={navigator} />
    } else if(route.name === 'main') {
      return <Main navigator={navigator} />
    }
  }
}

AppRegistry.registerComponent('SocialApp', () => SocialApp);
