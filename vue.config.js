const randomNumber =require("@zhwfe/readme");
console.log("====")
console.log(randomNumber())
module.exports = {
  lintOnSave: false,
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://service.inswindows.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
}
