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
  var items = qsa(`.athlete-box[data-id="${pos}"]`);

  items.forEach(function(item) {
    item.classList.toggle("show");
    item.innerHTML = template({athletes: window.olympians, id: pos});
  });
};

var iconToggle = function(e) {
  var icon = this.getElementsByTagName("i")[0];
  icon.classList.toggle("fa-minus");
};

qsa(".athlete-name").forEach(function(el) {
  el.addEventListener("click", openBox);
  el.addEventListener("click", iconToggle);
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

var expand = function(e) {
  var hidden = qsa('.off');
  var expanded = qsa('.expanded');

  if (hidden.length > 0) {
    hidden.forEach(function(h) {
      h.classList.remove('off');
      h.classList.add('expanded');
    });

    this.innerHTML = "Collapse";  
  }

  else  {
    this.innerHTML = "Expand";  
    expanded.forEach(function(x) {
      x.classList.add('off');
    });

  }

};
document.querySelector(".expand").addEventListener("click", expand);

