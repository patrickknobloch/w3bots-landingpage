const webpack = require("webpack");

module.exports = function override(config, env) {
    // Fügen Sie die Asset-Konfiguration hinzu
    config.module.rules.push({
        exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx|cjs)$/, /\.html$/, /\.json$/],
        type: 'asset/resource',
    });

    // Weitere Änderungen an der Webpack-Konfiguration...
    config.resolve.fallback = {
        ...config.resolve.fallback,
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
    }
    config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    ]
    
    return config;
}
