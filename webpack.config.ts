/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "path";
import { DefinePlugin, Configuration as WebpackConfiguration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import dotenv from 'dotenv';
dotenv.config();

const getConfig = (mode: "development" | "production") => {
  return {
    entry: {
      bundle: path.resolve(__dirname, "src/index.tsx"),
    },
    output: {
      path: path.join(__dirname, "build"),
      filename: "[name][contenthash].js",
      clean: true,
      assetModuleFilename: "[name][ext]",
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [mode === "development" && "react-refresh/babel"].filter(
                Boolean,
              ),
            },
          },
        },
        {
          test: /\.ts$/,
          include: [path.resolve(__dirname /* "src" */)],
          exclude: [
            path.resolve(__dirname, "node_modules"),
            /webpack.config.ts$/,
          ],
          loader: "ts-loader",
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },

        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          type: "asset/resource",
        },
      ],
    },
    devtool: mode === "development" ? "inline-source-map" : false,
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
      }),
      new ForkTsCheckerWebpackPlugin({ async: false }),
      mode === "development" && new ReactRefreshWebpackPlugin(),
      new DefinePlugin({
        'process.env.REACT_APP_MODE': JSON.stringify(process.env.REACT_APP_MODE)
      }),
      // new Dotenv({
      //   path: path.resolve(__dirname, ".env"),
      // }),
    ].filter(Boolean),
    stats: {
      logging: mode === "development" ? "error" : "none",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  } as Configuration;
};
module.exports = (env: any, argv: any) => {
  if (argv.mode === "development" || env.NODE_ENV === "development") {
    return getConfig("development");
  }
  if (argv.mode === "production" || env.NODE_ENV === "production") {
    return getConfig("production");
  }
  return getConfig("production");
};

interface Configuration extends WebpackConfiguration {
  devServer: any;
}
