
//Responsive layouts

const mqMobile = window.matchMedia("(max-width : 600px)");
const mqTablet = window.matchMedia("(min-width : 601px) and (max-width : 992px)");


// if (mqMobile.matches) {
// 	console.log('mobile');
// } else if (mqTablet.matches) {  	
//   	console.log('tablet');
// } else {
//   	console.log('desktop');
// }

// responsive nav bar

function openNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-content") {
    x.className += " responsive";
  } else {
    x.className = "nav-content";
  }
}

// image pop out
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });

 // expander 
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });
