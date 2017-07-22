document.addEventListener("DOMContentLoaded", init);

function init() {
   var wedges = Object.values(document.getElementsByClassName("wedge"));

   wedges.map(wedge => wedge.addEventListener("mouseenter", onElementMouseEnter));
   wedges.map(wedge => wedge.addEventListener("mouseleave", onElementMouseLeave));
}

function onElementMouseEnter(event) {
   var wedge = event.target,
       use = getUse(wedge);
   
   console.log(`mouseenter ${event.target.tagName}#${event.target.id}.${Array.from(event.target.classList).join(".")}`);

   if(use !== null) {
      use.setAttribute("href", "#" + wedge.id);
   }
}

function onElementMouseLeave(event) {
   var wedge = event.target,
       use = getUse(wedge);

   console.log(`mouseleave ${event.target.tagName}#${event.target.id}.${Array.from(event.target.classList).join(".")}`);

   if(use !== null) {
      use.setAttribute("href", "#");
   }
}

function getUse(wedge) {
   var use = null;

   if(wedge.parentElement !== null) {
      use = wedge.parentElement.getElementsByTagName("use")[0];
   }

   return use;
}
