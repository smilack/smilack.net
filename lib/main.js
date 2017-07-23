document.addEventListener("DOMContentLoaded", init);

function init() {
   var wedges = Object.values(document.getElementsByClassName("wedge"));

   wedges.map(wedge => wedge.addEventListener("mouseenter", onElementMouseEnter));
}

function onElementMouseEnter(event) {
   var wedge = event.target;

   wedge.parentElement.append(wedge);
}

//# sourceMappingURL=main.js.map