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
  var others = qsa('.show');
  var items = qsa(`.athlete-box[data-id="${pos}"]`);

  items.forEach(function(item) {

    if (item.classList.contains("show")) {
      item.classList.remove("show");
    }
    
    else {
      others.forEach(function(i) {
      i.classList.remove("show");
      });
      
      item.classList.add("show");
      item.innerHTML = template({athletes: window.olympians, id: pos});
    }

  });
};

qsa(".athlete-name").forEach(function(el) {
  el.addEventListener("click", openBox);
});


//Highlighting
var colHover = function(e) {
  var pos = this.getAttribute("data-id");
  var others = qsa('.row-item');
  var items = qsa(`.row-item[data-id="${pos}"]`);

  others.forEach(function(i) {
    i.classList.remove("highlight");

  });

  others.forEach(function(i) {
  });
}



qsa(".dates .row-item").forEach(function(el) {
  el.addEventListener("mouseover", colHover);
} );

