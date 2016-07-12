// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");
var template = dot.compile(require("./_athletebox.html"));

var qsa = require("./lib/qsa");

var box = qsa(".athletebox");

var onClick = function(e) {

  console.log();
  var pos = this.getAttribute("data-id");
  var item = document.querySelector(`.athlete-box[data-id="${pos}"]`);

  item.classList.add("show");
  item.innerHTML = template({athletes: window.olympians, id: pos});


}


qsa(".athlete-name").forEach(function(el) {

  el.addEventListener("click", onClick);
} );