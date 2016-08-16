// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
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
    }
  }); 

  if (screen.width < 500) { 
    rows.forEach(function(item) {

      if (item.classList.contains("show")) {
        item.classList.remove("show");
      }

      else {

        item.classList.add("show");
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


<<<<<<< Updated upstream
//Highlighting
var colHover = function(e) {

  var items = qsa(`.row-item`);


  items.forEach(function(i) {

    var date = new Date();
    var shortDate = (date.getMonth() + 1) + '/' + date.getDate();
    console.log(shortDate);
    if (i.getAttribute("data-id") === shortDate) {
      i.classList.add("highlight");
    }

  });
}



=======
>>>>>>> Stashed changes

qsa(".row-item").forEach(function(el) {


    var date = new Date();
    var shortDate = (date.getMonth() + 1) + '/' + date.getDate();
    console.log(shortDate);
    if (el.getAttribute("data-id") === shortDate) {
      el.classList.add("highlight");
    }

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

