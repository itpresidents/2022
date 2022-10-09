function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.classList.remove("animate__fadeInDown")
    x.classList.add("animate__fadeInUp")
    x.style.display = "none";
  } else {
    x.classList.remove("animate__fadeInUp")
    x.classList.add("animate__fadeInDown")
    x.style.display = "block";
  }
}
