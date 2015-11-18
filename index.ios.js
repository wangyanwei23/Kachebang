/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Home = require('./app/Home');
var MapView = require('./app/MapView');
//var LNGList = require('./app/LNGList');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TabBarIOS,
    Image
} = React;

var Kachebang = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'home',
        };
    },

    changeTab: function(TabName) {
        this.setState({
            selectedTab: TabName,
        });
    },

    addNavigator: function(component, title) {
        return (
            <NavigatorIOS
               style={styles.tabContent}
               initialRoute={{
                   title: title,
                   component: component,
               }}
               />
        );
    },

    render: function() {
        return (
            <TabBarIOS>
              <TabBarIOS.Item
                 title="帮"
                 icon={require('./img/nav_home.png')}
                 onPress={this.changeTab.bind(this, 'home')}
                 selected={this.state.selectedTab === 'home'}
                 >
                {this.addNavigator(Home, '卡车帮')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                 title="附近"
                 badge="2"
                 icon={require('./img/nav_nearby.png')}
                 onPress={this.changeTab.bind(this, 'nearby')}
                 selected={this.state.selectedTab === 'nearby'}
                 >
                {this.addNavigator(MapView, '附近')}
              </TabBarIOS.Item>
            </TabBarIOS>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabContent: {
        flex: 1,
        //backgroundColor: '#fff232',
    }
});

AppRegistry.registerComponent('Kachebang', () => Kachebang);
