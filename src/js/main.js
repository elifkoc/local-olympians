// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");
var template = dot.compile(require("./_athletebox.html"));
var qsa = require("./lib/qsa");


//Athlete profiles
var openBox = function(e) {
  var pos = this.getAttribute("data-id");
  var others = qsa('.athlete-box');
  var items = qsa(`.athlete-box[data-id="${pos}"]`);
  
  console.log(others);
  others.forEach(function(i) {
    i.classList.remove("show");
  });

  items.forEach(function(item) {
    item.classList.add("show");
    item.innerHTML = template({athletes: window.olympians, id: pos});

  });
};

qsa(".athlete-name").forEach(function(el) {
  el.addEventListener("click", openBox);
});


//Highlighting
var colHover = function(e) {
  var pos = this.getAttribute("data-id");
  var items = qsa(`.row-item[data-id="${pos}"]`);
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

