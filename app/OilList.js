'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    Image,
    View
} = React;

var OilList = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
              <Text>加油站</Text>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

module.exports = OilList;
