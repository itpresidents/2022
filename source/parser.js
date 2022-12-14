// get all iframes that were parsed before this tag
window.addEventListener("load", (event) => {
  var iframes = document.getElementsByTagName("iframe");
  console.log(iframes.length);

  for (let i = 0; i < iframes.length; i++) {
    var url = iframes[i].getAttribute("src");
    if (url.startsWith("https://docs.google.com/document/d/")) {
      // create div and replace iframe
      let d = document.createElement("div");
      d.classList.add("post-container"); // optional
      iframes[i].parentElement.replaceChild(d, iframes[i]);

      // CORS request
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function () {
        // display response
        d.innerHTML = xhr.responseText;
        d.style.fontSize = ".4em";
      };
      xhr.send();
    }
  }
});
