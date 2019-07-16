//webpack is read by node which reads es5 and some es6.
//import export is not read so we use module.exports which uses a plugin
const path = require("path"); //es5
//import path from 'path'  //es6
//path is something that is supplied in node.js already. We are going to use it to get the path for where the code is going to be exported once it is built
const rules = [
  {
    test: /\.tsx?/, //any file that ends in tsx
    exclude: /node_modules/, //excluding the one that is in node modules
    loader: "babel-loader" //load it using babel loader
  }
];
module.exports = {
  target: "web", //target is where we want to export our code to
  mode: "development", //development or production or testing
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"), //once we have built a production ready code, it is going to create a new folder in our root directory, called build and put all the compiled minified code into it.
    filename: "bundle.js" //corresponds to the name we have in index.html
  },
  module: { rules }, //same is writing {rules:rules}
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }, //so we do not have to write the extensions while importing. ex: index instead of index.tsx
  devServer: {
    contentBase: "./", //get the content from the root
    port: 5000 //export the content to port 5000
  }
};
