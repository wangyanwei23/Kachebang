'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    ListView
} = React;

var LNGList = require('./LNGList');
var OilList = require('./OilList');
var MapView = require('./MapView');

var Buttons = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
    },

    loadPage: function(title1, title2, component1, component2) {
        this.props.navigator.push({
            title: title1,
            component: component1,
            rightButtonIcon: require('../img/icon_map_data_list.png'),
            onRightButtonPress: () => this.props.navigator.push({
                title: title2,
                component: component2
            }),
        });
    },

    render: function() {
        return (
            <View style={styles.buttons}>
              <View style={{flex: 1, flexDirection: 'row'}}>

                <TouchableHighlight onPress={() => this.loadPage('oil', 'Map', OilList, MapView)} underlayColor={'#F5F5F5'} style={{flex: 1}}>
                  <View style={{flex: 1, borderRightWidth: 0.5, borderBottomWidth: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 70, height: 70,}} source={require('../img/dashboard_fuel.png')}/>
                    <Text style={{fontSize: 20, marginTop: 10}}>加油站</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                  <View style={{flex: 1, borderBottomWidth: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 70, height: 70,}} source={require('../img/dashboard_trader.png')}/>
                    <Text style={{fontSize: 20, marginTop: 10}}>汽贸</Text>

                  </View>
                </TouchableHighlight>

              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>

                <TouchableHighlight onPress={() => this.loadPage('LNG', 'Map', LNGList, MapView)} style={{flex: 1}} underlayColor={'#F5F5F5'}>
                  <View style={{flex: 1, borderRightWidth: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 70, height: 70,}} source={require('../img/dashboard_lng.png')}/>
                    <Text style={{fontSize: 20, marginTop: 10}}>加气站</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor={'#F5F5F5'} style={{flex: 1}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 70, height: 70,}} source={require('../img/dashboard_repair.png')}/>
                    <Text style={{fontSize: 20, marginTop: 10}}>维修救援</Text>
                  </View>
                </TouchableHighlight>

              </View>
            </View>
        );
    },

});

var Home = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Buttons navigator={this.props.navigator}/>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flex: 1,
        marginTop: 65,
        marginBottom: 50,
    },
});

module.exports = Home;
