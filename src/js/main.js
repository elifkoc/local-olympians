// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");


var qsa = require("./lib/qsa");

var onClick = function(e) {
 
  var pos = this.getAttribute("data-id");
  var item = document.querySelector(`.athlete-info[data-id="${pos}"]`);
  item.classList.toggle('show');
  
}


qsa(".athlete-name").forEach(function(el) {
  el.addEventListener("click", onClick);
} );