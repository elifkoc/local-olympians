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
  //  var items = qsa(`.athlete-box[data-id="${pos}"]`);
  var rows = this.parentNode.querySelectorAll(".event");

  rows.forEach(function(row){

    row.classList.toggle("show");
  });
  /*  items.forEach(function(item) {
    item.classList.toggle("show");
    item.innerHTML = template({athletes: window.olympians, id: pos});
  });*/
};

var iconToggle = function(e) {
  var icon = this.getElementsByTagName("i")[1];
  if (icon.classList.contains("fa-chevron-down")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }

  else  {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  };
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


//Expand collapse
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

