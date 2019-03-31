const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConf = (_path) => {
    // NEW pages should be added here i.g. if you need to create
    // contacts page you need add folder to src,
    // and add path and name to entry array
    const VENDORS_NAME = 'vendors';
    const entry = {
        index: ['babel-polyfill', './src/index/index.js'],
        'packman': ['./src/packman/packman.js'],
        'sea_battle': ['./src/sea_battle/sea_battle.js'],
        'hw_1': ['./src/hw_1/hw_1.js'],
        'hw_2-3': ['./src/hw_2-3/hw_2-3.js'],
        'page2': ['./src/hw_2-3/pages/page2.js'],
        'page3': ['./src/hw_2-3/pages/page3.js'],
        'hw_5_part_1': ['./src/hw_5_part_1/hw_5_part_1.js'],
        'hw_5_part_2': ['./src/hw_5_part_2/hw_5_part_2.js'],
        'hw_5_part_3': ['./src/hw_5_part_3/hw_5_part_3.js'],
        'hw_5_part_4': ['./src/hw_5_part_4/hw_5_part_4.js'],
        'hw_6': ['./src/hw_6/hw_6.js'],
        'lesson_11': ['./src/lesson_11/lesson_11.js'],
        'hw_11': ['./src/hw_11/hw_11.js'],
        'practice_5': ['./src/practice_5/practice_5.js'],
        'lesson_12': ['./src/lesson_12/lesson_12.js'],
        'hw_12': ['./src/hw_12/hw_12.js'],
        'lesson_13': ['./src/lesson_13/lesson_13.js'],
        'lesson_14': ['./src/lesson_14/lesson_14.js'],
        'hw_14': ['./src/hw_14/hw_14.js'],
        'lesson_15': ['./src/lesson_15/lesson_15.js'],
        'hw_16': ['./src/hw_16/hw_16.js'],
        'lesson_17': ['./src/lesson_17/lesson_17.js'],
        'hw_17': ['./src/hw_17/hw_17.js'],
        'spa': ['./src/spa/spa.js'],

    };

    const plugins = Object.keys(entry).reduce((acc, name) => {
        acc.push(new HtmlWebpackPlugin({
            chunksSortMode: 'manual',
            title: `${name}`,
            template: `./src/${name}/${name}.html`,
            chunks: [VENDORS_NAME, name],
            filename: `./${name}.html`,
        }));
        acc.push(new ExtractTextPlugin({
            filename: `[name].css`,
            allChunks: false
        }));

        return acc;
    }, []);

    plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: VENDORS_NAME,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            'typeof window': JSON.stringify('object')
        })
    ]);

    entry.vendors = `./src/common/scripts/${VENDORS_NAME}.js`;

    return {
        entry,
        output: {
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.js/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    ]
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
                    })
                },
                {

                    /**
                     * ASSET LOADER
                     * Reference: https://github.com/webpack/file-loader
                     * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                     * Rename the file using the asset hash
                     * Pass along the updated reference to your code
                     * You can add here any file extension you want to get copied to your output
                     */
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    loader: 'file-loader?publicPath=./&name=assets/images/[name].[ext]'
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader?publicPath=./&name=assets/fonts/[name].[ext]'
                }
            ]
        },
        plugins
    };
};

module.exports = baseConf;