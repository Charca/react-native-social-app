'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text
} = React;

var Dashboard = require('./Dashboard');

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

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'dashboard'
    }
  }
  render() {
    return (
      <TabBarIOS
        tintColor="black"
        barTintColor="white">
        <TabBarIOS.Item
          title="Friends"
          icon={require('../../img/icons/friends.png')}
          selected={(this.state.selectedTab === 'friends')}
          onPress={() => this.setState({selectedTab: 'friends'})}>
          <Dashboard />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Dashboard"
          icon={require('../../img/icons/dashboard.png')}
          selected={(this.state.selectedTab === 'dashboard')}
          onPress={() => this.setState({selectedTab: 'dashboard'})}>
          <Dashboard />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Ranking"
          icon={require('../../img/icons/ranking.png')}
          selected={(this.state.selectedTab === 'ranking')}
          onPress={() => this.setState({selectedTab: 'ranking'})}>
          <Dashboard />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

module.exports = MainScreen;
