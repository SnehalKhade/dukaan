const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "host",

  remotes: {
    products: "http://localhost:4000/remoteEntry.js",
    orders: "http://localhost:5000/remoteEntry.js",
    carts: "http://localhost:8081/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
