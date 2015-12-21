'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView
} = React;

var friends = [
  { name: 'Brad Frost', nick: 'brad_frost', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg' },
  { name: 'Adham Dannaway', nick: 'adhamdannaway', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' },
  { name: 'Sarah Whinnem', nick: 'madysondesigns', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg' },
  { name: 'Eric Hoffman', nick: 'kolage', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg' }
];

var styles = StyleSheet.create({
  list: {
    marginTop: 44
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFF'
  },
  separator: {
    height: 1,
    backgroundColor: '#DDD',
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10
  },
  text: {
    flex: 1
  },
  name: {
    fontWeight: '500'
  },
  nick: {
    color: '#AAA',
    fontSize: 12
  }
});

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(friends)
    }
  }
  render() {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow} />
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={{uri: rowData.avatar}} />
            <View style={styles.text}>
              <Text style={styles.name}>{rowData.name}</Text>
              <Text style={styles.nick}>@{rowData.nick}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
};

module.exports = FriendsList;
