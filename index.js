var exports = {
    ScrollView: require('./src/react/ScrollView/ScrollView'),
    ScrollViewDelegate: require('./src/react/ScrollView/ScrollViewDelegate'),
    Enums: {
        ScrollDirectionType: require("./src/react/Enums/ScrollDirectionType"),
        ScrollPositionType: require("./src/react/Enums/ScrollPositionType")
    },
    JSCoreGraphics: require("JSCoreGraphics"),
    React: require("react"),
    //Not sure what to do with this for now but this is using different version that is causing react errors
    "tcomb-react": require("./src/react/tcomb-react")
};

module.exports = exports;

