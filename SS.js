function unhide() {
  var x = document.getElementById("hidden");
    if (x.style.display === "none") {
        x.style.display = "inline";
    } else {
        x.style.display = "none";
    }
}
function sesame(pass) {
    var s = document.getElementById('openses')
    var ss = document.getElementById('sss')
  if( document.getElementById('Password').value.toLowerCase() === pass.toLowerCase()) {
    s.style.display = "none";
    ss.style.display = "block";
  }
}
