const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const toml = require('toml');
// const yaml = require('yamljs');
// const json5 = require('json5');

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    // entry: {
    //     index: './src/index.js',
    //     print: './src/print.js',
    // },
    entry: {
        index: './src/index.js',
        // another: './src/another-module.js',
        // index: {
        //     import: './src/index.js',
        //     dependOn: 'shared',
        // },
        // another: {
        //     import: './src/another-module.js',
        //     dependOn: 'shared',
        // },
        // shared: 'lodash',
    },
    devtool: 'inline-source-map',
    output: {
        // filename: 'bundle.js',
        // filename: '[name].bundle.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        // publicPath: '/',
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader'],
            // },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            // },
            // {
            //     test: /\.(csv|tsv)$/i,
            //     use: ['csv-loader'],
            // },
            // {
            //     test: /\.xml$/i,
            //     use: ['xml-loader'],
            // },
            // {
            //     test: /\.toml$/i,
            //     type: 'json',
            //     parser: {
            //         parse: toml.parse,
            //     },
            // },
            // {
            //     test: /\.yaml$/i,
            //     type: 'json',
            //     parser: {
            //         parse: yaml.parse,
            //     },
            // },
            // {
            //     test: /\.json5$/i,
            //     type: 'json',
            //     parser: {
            //         parse: json5.parse,
            //     },
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
    ],
    devServer: {
        contentBase: './dist',
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
};