const path = require("path");

module.exports = {
    entry: "./src/index.js", // Entry point for your app
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    mode: "development", // Set mode to 'development' or 'production' as needed
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Process JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/, // Process CSS files
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("tailwindcss"), require("autoprefixer")],
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
};
