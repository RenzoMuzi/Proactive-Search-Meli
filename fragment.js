var frag = document.createDocumentFragment();
var textNode = frag.appendChild(document.createTextNode("Some text"));
var br = frag.appendChild(document.createElement("br"));
var body = document.body;
body.appendChild(frag);
alert(body.lastChild.tagName); // "BR"
alert(body.lastChild.previousSibling.data); // "Some text"
alert(frag.hasChildNodes()); // false







var ul = document.getElementsByTagName("ul")[0]; // asumiendo que existe
var docfrag = document.createDocumentFragment();
var browserList = ["Internet Explorer", "Mozilla Firefox", "Safari", "Chrome", "Opera"];

browserList.forEach(function(e) {
  var li = document.createElement("li");
  li.textContent = e;
  docfrag.appendChild(li);
});

ul.appendChild(docfrag);
// una lista con los navegadores mas conocidos