// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
var dot = require("./lib/dot");
var animate = require("./lib/animateScroll");
var template = dot.compile(require("./_athletebox.html"));
var qsa = require("./lib/qsa");

//Athlete profiles
var openBox = function(e) {
  var box = document.querySelector('.event .show');
  var pos = this.getAttribute("data-id");
  var parent = this.parentNode;
  var others = qsa('.show');
  var rows = qsa('.event', parent);
  var otherRows = qsa('.event', parent);
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

  if (screen.width < 500) { 
  rows.forEach(function(item) {

    if (item.classList.contains("show")) {
      item.classList.remove("show");
    }

    else {
     
      item.classList.add("show");
      animate(item.parentNode);
    }
  });
  }
};

var iconToggle = function(e) {
  var icon = this.getElementsByTagName("i")[0];
  var others = qsa(".fa-minus-circle");



  if (icon.classList.contains("fa-plus-circle")) {
    icon.classList.remove("fa-plus-circle");
    icon.classList.add("fa-minus-circle");
  }

  else if (icon.classList.contains("fa-minus-circle")) {

    icon.classList.remove("fa-minus-circle");
    icon.classList.add("fa-plus-circle");

  }
    others.forEach(function(i) {

    i.classList.remove("fa-minus-circle");
    i.classList.add("fa-plus-circle");     
  });

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
    this.innerHTML = "More athletes <i class='fa fa-angle-double-down' aria-hidden='true';>";  
    expanded.forEach(function(x) {
      x.classList.add('off');
    });

  }

};
document.querySelector(".expand").addEventListener("click", expand);

