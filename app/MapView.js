
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

    PropTypes,
    requireNativeComponent
} = React;


var NATIVE_BAIDUMAP_REF = 'NARIVEBAIDUMAP';
var BAIDUMAP_REF = 'BAIDUMAP';

var BaiduMap = React.createClass({
    propTypes: {
        
    },
    addPinAnnotation: function(lat, lng, title) {
        var handle = React.findNodeHandle(this);
        NativeBaiduMapManager.addPointAnnotation(handle, lat, lng, title);
    },
    render: function () {
        return <NativeBaiduMap ref={NATIVE_BAIDUMAP_REF} {...this.props}/>;
    },
    componentDidMount: function() {
        //var self = this;
        //setTimeout(function(){this.addPinAnnotation(33.312796, 111.514143, "桂花树");}, 0);
    }
});
var NativeBaiduMap = requireNativeComponent('BaiduMap', BaiduMap);
var NativeBaiduMapManager = require('NativeModules').BaiduMapManager;

var MapView = React.createClass({
    render: function() {
        return (
            <BaiduMap style={{flex: 1, marginTop: 65, marginBottom: 50}} />
        );
    }

    //  componentDidMount: function() {
    //    // AsyncStorage.getItem('some-identifier').then(value => {
    //    //     this.setState({
    //    //         isPresent: value !== null
    //    //     });
    //    // });
    //  },

});

var styles = StyleSheet.create({
    container: {
    },
});
module.exports = MapView;

