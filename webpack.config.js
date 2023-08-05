const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // 引入copy-webpack-plugin插件
const babel = require("@babel/core");
const less = require("less");
module.exports = {
  mode: "development", // 编译模式设置为development
  watch: true, // 监听文件变化，并实时编译更新
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*.wxml",
          to: "./",
          context: "./src",
        },
        {
          from: "**/*.json",
          to: "./",
          context: "./src",
        },
        {
          from: "**/*.less",
          to: (pathData) => {
            return path.join(
              "./",
              pathData.absoluteFilename
                .replace(pathData.context, "")
                .replace(".less", ".wxss")
            );
          },
          context: "./src",
          transform(content, path) {
            return less.render(content.toString()).then(function (output) {
              return output.css;
            });
          },
        },
        {
          from: "**/*.js", // 仅对src目录下以.js结尾的文件进行处理
          to: "./",
          globOptions: {
            ignore: ["*.test.js", "*.spec.js"],
          },
          transform(content, path) {
            // transform origin code to ES 5 code
            const newCode = babel.transformSync(content, {
              babelrc: true,
              presets: ["@babel/env"],
            }).code;
            return Promise.resolve(newCode.toString());
          },
          context: "./src",
        },
      ],
    }),
  ],
};
