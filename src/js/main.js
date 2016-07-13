// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");
var template = dot.compile(require("./_athletebox.html"));

var qsa = require("./lib/qsa");

var box = qsa(".athletebox");

var onClick = function(e) {

  var pos = this.getAttribute("data-id");
  var item = document.querySelector(`.athlete-box[data-id="${pos}"]`);

  if (!item.classList.contains("show")) {
    item.classList.add("show");
    item.innerHTML = template({athletes: window.olympians, id: pos});
  }

  else {
    item.classList.remove("show");
  }
}


var colHover = function(e) {
  var pos = this.getAttribute("data-id");
  var items = qsa(`.row-item[data-id="${pos}"]`);
    console.log(items);
  var others = qsa('.row-item');
  
  others.forEach(function(i) {
    i.classList.remove("highlight");

  });
                 
  
  items.forEach(function(i) {
      i.classList.add("highlight");

  });
}

qsa(".athlete-name").forEach(function(el) {
  el.addEventListener("click", onClick);
} );

qsa(".row-item").forEach(function(el) {
  el.addEventListener("mouseover", colHover);
} );

