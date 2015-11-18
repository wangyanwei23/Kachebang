'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
} = React;

var Nearby = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>ljklk</Text>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
    },
});

module.exports = Nearby;
