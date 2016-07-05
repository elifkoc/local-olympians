// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");
var template = dot.compile(require("./_athletebox.html"));

var qsa = require("./lib/qsa");

var onClick = function(e) {
 
  var pos = this.getAttribute("data-id");
  var item = document.querySelector(`.athlete-box`);
  
  item.classList.add("show");
  item.innerHTML = template({athletes: window.olympians, id: pos});
  
  
}


qsa(".athlete-name").forEach(function(el) {
  el.addEventListener("click", onClick);
} );