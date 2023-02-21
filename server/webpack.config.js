const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    target:"node",
    entry:["./src/server"],
    output:{
        filename:"server.js",
        path:path.resolve(__dirname,"dist"),
        libraryTarget: "commonjs2"
    },
    watch: true,
    externals: {
        express: 'express',
    },
    plugins:[
        new NodemonPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:"ts-loader",           
                }
            }
        ]
    },
    resolve:{
        extensions:[".ts",".js"]
    },
    mode:"development",
    devtool:"eval-cheap-source-map"
}