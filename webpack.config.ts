// TODO: Types
import { resolve } from 'path';

import Dotenv from 'dotenv-webpack';
import TerserPlugin from 'terser-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

import HtmlWebpackPlugin from 'html-webpack-plugin';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import packageJSON from './package.json';

import type { Configuration as WebpackConfiguration } from 'webpack';
import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

const isDev = process.env.NODE_ENV !== 'production';

const DotenvPluginInstance = new Dotenv({
	path: isDev ? './.env.development' : './.env.production',
	safe: true
});

const HtmlWebpackPluginInstance = new HtmlWebpackPlugin({
	favicon: resolve(__dirname, './public/favicon.ico'),
	filename: 'index.html',
	inject: true,
	title: 'Active sales',
	meta: {
		description: packageJSON.description,
		keywords: Array.isArray(packageJSON.keywords) && packageJSON.keywords.join(','),
		robots: 'noindex, nofollow',
		'theme-color': '#fab600',
		viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
	},
	minify: {
		collapseWhitespace: true,
		collapseInlineTagWhitespace: true,
		minifyCSS: true,
		minifyJS: true,
		removeComments: true,
		useShortDoctype: true
	},
	template: resolve(__dirname, './public/index.html')
});

const MiniCssExtractPluginInstance = new MiniCssExtractPlugin({
	filename: '[name].[fullhash:8].css'
});

const ESLintPluginInstance = new ESLintPlugin({
	extensions: ['js', 'jsx', 'ts', 'tsx'],
	failOnError: isDev,
	failOnWarning: false,
	context: resolve(__dirname, 'src'),
	cache: true,
	cacheLocation: resolve(__dirname, 'node_modules/.cache/.eslintcache'),
	cwd: resolve(__dirname, '.'),
	resolvePluginsRelativeTo: __dirname
});

const stats: WebpackConfiguration['stats'] = {
	colors: {
		green: '\u001b[32m'
	},
	assets: false,
	modules: false,
	timings: false,
	version: false,
	entrypoints: false,
	warnings: true
};

const devServer: WebpackDevServerConfiguration = {
	allowedHosts: 'auto',
	client: {
		overlay: {
			errors: true
		}
	},
	compress: true,
	historyApiFallback: true,
	host: 'local-ip',
	open: true,
	port: 3000
};

const config: WebpackConfiguration = {
	mode: isDev ? 'development' : 'production',

	devtool: 'source-map',

	devServer,

	bail: true,

	stats,

	entry: {
		main: resolve('./src/index.tsx')
	},

	output: {
		path: resolve(__dirname, './build'),
		publicPath: `${isDev ? '' : '.'}/`,
		filename: `js/[name]${isDev ? '' : '.[contenthash]'}.js`,
		assetModuleFilename: 'assets/[name].[fullhash:8][ext]'
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				enforce: 'pre'
			},
			{
				test: /\.css$/,
				exclude: /\.module\.css$/,
				use: [
					{ loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options: { importLoaders: 1, sourceMap: isDev } },
					{ loader: 'postcss-loader', options: { sourceMap: isDev } }
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /\.module\.(sa|sc|c)ss$/,
				use: [
					{ loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options: { importLoaders: 3, sourceMap: isDev } },
					{ loader: 'postcss-loader', options: { sourceMap: isDev } },
					{ loader: 'resolve-url-loader', options: { sourceMap: isDev, root: resolve(__dirname, 'src') } },
					{ loader: 'sass-loader', options: { sourceMap: true } }
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				include: resolve(__dirname, 'src'),
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 8192
					}
				},
				generator: {
					filename: 'assets/images/[name].[hash:8][ext]'
				}
			},
			{
				test: /\.(ttf|otf|woff(2)?|eot)$/,
				type: 'asset/resource',
				parser: {
					dataUrlCondition: {
						maxSize: 8192
					}
				},
				generator: {
					filename: 'assets/fonts/[name].[hash:8][ext]'
				}
			}
		]
	},

	performance: {
		maxEntrypointSize: 300000,
		hints: !isDev ? 'warning' : false
	},

	optimization: {
		minimize: !isDev,
		minimizer: [
			'...',
			new TerserPlugin({
				parallel: true
			}),
			new CssMinimizerPlugin()
		],
		runtimeChunk: 'single'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass']
	},

	plugins: [DotenvPluginInstance, HtmlWebpackPluginInstance, MiniCssExtractPluginInstance, ESLintPluginInstance]
};

module.exports = config;
