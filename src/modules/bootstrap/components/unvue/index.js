"use strict";

require("./styles.css");

//export default {
module.exports = {
  name: "example",
  template: require("./template.html"),
  created: function() {
    window.console.log("created");
  }
};
