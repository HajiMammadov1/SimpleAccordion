

var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // open
      content.style.maxHeight = null;
    } else {
      // closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}