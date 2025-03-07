// const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  transpileDependencies: ["wbc-ui2"], // Ensure the library is properly transpiled
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@public": path.resolve(__dirname, "src/public"),
      },
    },

    // plugins: [
    //   new CopyWebpackPlugin({
    //     patterns: [
    //       {
    //         from: path.resolve(__dirname, "src/public"),
    //         to: path.resolve(__dirname, "dist/public"),
    //         noErrorOnMissing: true, // Avoids errors if the folder is missing
    //       },
    //     ],
    //   }),
    // ],
  },
  chainWebpack: (config) => {
    // Add vuetify-loader plugin for Vuetify compatibility
    config.plugin("vuetify-loader").use(require("vuetify-loader/lib/plugin"));

    // Rule for other .vue files to use vue-loader
    config.module
      .rule("vue")
      .test(/\.vue$/)
      .exclude.add(/__.*\.vue$/) // exclude files starting with "__"
      .end()
      .use("vue-loader")
      .loader("vue-loader")
      .end();

    config.module
      .rule("raw-vue")
      .test(/__.*\.(vue|js|ts)$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();

    // Rule for handling font files
    config.module
      .rule("fonts")
      .test(/\.(eot|woff|woff2|ttf|svg)$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "fonts/[name].[hash][ext]", // Output fonts to the 'dist/fonts' directory
      });

    // // Rule for image files
    // config.module
    // .rule("images")
    // .test(/\.(png|jpg|jpeg|gif|svg|apng|avif|tiff|webp|bmp|heic)$/)
    // .use("file-loader")
    // .loader("file-loader")
    // .options({
    //   name: "images/[name].[hash][ext]", // Output images to the 'dist/images' directory
    //   publicPath: "/", // Ensure correct public path for images
    //   emitFile: true, // Emit the file to the output directory
    //   esModule: false, // Avoid emitting base64 strings
    // });

    // Rule for pdf files
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader")
      .end();

    // Rule for `.vue` files
    // config.module
    //   .rule("vue")
    //   .test(/\.vue$/)
    //   .use("vue-loader")
    //   .loader("vue-loader")
    //   .end();

    // Rule for `.js` files
    config.module
      .rule("js")
      .test(/\.js$/)
      .exclude.add(/node_modules/)
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .options({
        presets: ["@babel/preset-env"],
      });

    // config.module
    //   .rule("raw-css")
    //   .test(/__.*\.css$/)
    //   .exclude.add(/node_modules/) // Exclude node_modules to avoid conflicts
    //   .end()
    //   .use("raw-loader")
    //   .loader("raw-loader")
    //   .end();

    // // Standard rule for processing regular CSS files
    // config.module
    //   .rule("css")
    //   .test(/\.css$/)
    //   .exclude.add(/__.*\.css$/) // Exclude "__*.css" files from standard CSS loaders
    //   .end()
    //   .use("css-loader")
    //   .loader("css-loader")
    //   .end()
    //   .use("postcss-loader")
    //   .loader("postcss-loader")
    //   .end();
    //     // Specific rule for handling CSS files from `node_modules`
    // config.module
    //   .rule("node-modules-css")
    //   .test(/\.css$/)
    //   .include.add(/node_modules/) // Only apply to files in node_modules
    //   .end()
    //   .use("style-loader")
    //   .loader("style-loader")
    //   .end()
    //   .use("css-loader")
    //   .loader("css-loader")
    //   .end();

    // Rule for `.css` files
    // config.module
    //   .rule("css")
    //   .test(/\.css$/)
    //   .use("style-loader")
    //   .loader("style-loader")
    //   .end()
    //   .use("css-loader")
    //   .loader("css-loader")
    //   .end();

    // // Rule for `.scss` files
    // config.module
    //   .rule("scss")
    //   .test(/\.scss$/)
    //   .use("vue-style-loader")
    //   .loader("vue-style-loader")
    //   .end()
    //   .use("css-loader")
    //   .loader("css-loader")
    //   .end()
    //   .use("postcss-loader")
    //   .loader("postcss-loader")
    //   .end()
    //   .use("sass-loader")
    //   .loader("sass-loader");

    // Rule for `.json` files
    // config.module
    //   .rule("json")
    //   .test(/\.json$/)
    //   .type("javascript/auto")
    //   .use("json-loader")
    //   .loader("json-loader")
    //   .end();

    //  // Process PDF files
    //  config.module
    //  .rule("pdf")
    //  .test(/\.pdf$/)
    //  .use("file-loader")
    //  .loader("file-loader")
    //  .end();

    // Process Word, Excel, PowerPoint files
    config.module
      .rule("office-files")
      .test(/\.(doc|xls|ppt|docx|xlsx|pptx)$/)
      .use("file-loader")
      .loader("file-loader")
      .end();

    // Rule for `.html` files
    config.module
      .rule("html")
      .test(/\.(html|txt|py)$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();

    // Rule for `.md` files
    config.module
      .rule("markdown")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
};
