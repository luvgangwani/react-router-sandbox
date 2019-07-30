module.exports = {
    "entry": "./src/index.js",
    "output": {
        "path":__dirname + "/public",
        "filename": "bundle.min.js",
        "publicPath": "/"
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "loader": "babel-loader"
            },
            {
                "test": /\.(gif|jpe?g|png|svg)$/,
                "loader": "url-loader"
            }
        ]
    },
    "devServer": {
        "historyApiFallback": true
    }
}