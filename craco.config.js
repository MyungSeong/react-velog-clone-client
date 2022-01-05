const cracoAliasPlugin = require('craco-alias');
const sassSourcemapsPlugin = require('./plugins/sass-sourcemap');
const imageOptimizerPlugin = require('craco-image-optimizer-plugin');

module.exports = {
    style: {
        css: {
            loaderOptions: () => {
                return {
                    url: false,
                };
            },
        },
    },
    plugins: [
        { plugin: sassSourcemapsPlugin },
        {
            plugin: cracoAliasPlugin,
            options: {
                source: 'jsconfig',
                baseUrl: './src',
                // debug: true,
            },
        },
        {
            plugin: imageOptimizerPlugin,
            // 제공된 모든 옵션은 image-webpack-plugin에 전달됩니다.
            // 참고: https://github.com/tcoopman/image-webpack-loader#usage
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 65,
                },
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                },
                gifsicle: {
                    interlaced: false,
                },
                webp: {
                    quality: 75,
                },
            },
        },
    ],
};
