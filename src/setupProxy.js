/*Dependencias
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

//opciones del proxy middleware

const options = {
  target: "https://api.igdb.com/v4",
  changeOrigin: true,
  ws: true,
};

const igdbProxy = createProxyMiddleware(options);
const app = express();
app.use("/games", igdbProxy);
*/
// - - - - - - - - - - -

const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/games",
    createProxyMiddleware({
      target: "https://api.igdb.com/v4",
      changeOrigin: true,
      pathRewrite: {
        "^/games": "",
      },
      logLevel: "debug",
    })
  );
};
