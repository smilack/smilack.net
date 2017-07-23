document.addEventListener("DOMContentLoaded", init);

function init() {
   var links = Array.from(document.getElementsByClassName("link"));

   links.map(link => link.addEventListener("mouseenter", onElementMouseenter));
}

function onElementMouseenter(event) {
   var link = event.target;

   link.parentElement.append(link);
}

//# sourceMappingURL=main.js.map