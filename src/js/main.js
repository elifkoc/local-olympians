// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");
var template = dot.compile(require("./_athletebox.html"));
var qsa = require("./lib/qsa");


//Athlete profiles
var box = qsa(".athletebox");

var openBox = function(e) {
  var pos = this.getAttribute("data-id");
  var items = qsa(`.athlete-box[data-id="${pos}"]`);

  items.forEach(function(item) {
    if (!item.classList.contains("show")) {
      item.classList.add("show");
      item.innerHTML = template({athletes: window.olympians, id: pos});
    }
    else {
      item.classList.remove("show");
    }
  });
}

qsa(".athlete-name").forEach(function(el) {
  el.addEventListener("click", openBox);
});

//Highlighting
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



qsa(".row-item").forEach(function(el) {
  el.addEventListener("mouseover", colHover);
} );

