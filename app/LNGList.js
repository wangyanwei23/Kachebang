'use strict';

var React = require('react-native');
var img = require('../img/nav_map_gas.png');
var img_mark = require('../img/location_mark.png');

var {
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
    PickerIOS
} = React;

var LNGList = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['row0', 'row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8', 'row9', 'row10']),
            loaded: false
        };
    },
    render: function() {
        return (
            <View style={{flex: 1, position: 'relative', marginTop: 65}}>
              <View style={{padding: 5}}>
                <Text>你好</Text>
              </View>
              <ListView
                 dataSource={this.state.dataSource}
                 renderRow={this.renderLNG}
                 initialListSize={10}
                 style={{flex: 1}}
                 automaticallyAdjustContentInsets={false}
                 />
            </View>
        );
    },

    renderLNG: function() {
        return (
            <View style={{flexDirection: 'row', borderTopWidth: 0.5, height: 60, borderColor: '#616161'}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={img}/>
              </View>
              <View style={{flex: 4, justifyContent: 'center'}}>
                <Text style={{fontSize: 12, marginBottom: 3, color: '#616161'}}>河北 张家口</Text>
                <Text style={{fontSize: 15}}>LNG加注站</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
                <Image source={img_mark}/>
                <Text style={{fontSize: 11, color: 'green', marginLeft: 5}}>100km</Text>
              </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

module.exports = LNGList;
