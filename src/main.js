document.addEventListener("DOMContentLoaded", init);

function init() {
   var wedges = Object.values(document.getElementsByClassName("wedge"));

   wedges.map(wedge => wedge.addEventListener("mouseenter", onElementMouseEnter));
}

function onElementMouseEnter(event) {
   var wedge = event.target,
       use = getUse(wedge);
   
   if(use !== null) {
      use.setAttribute("href", "#" + wedge.id);
   }
}

function getUse(wedge) {
   var use = null;

   if(wedge.parentElement !== null) {
      use = wedge.parentElement.getElementsByTagName("use")[0];
   }

   return use;
}
