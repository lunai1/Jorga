function unhide() {
  var x = document.getElementById("hidden");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}
