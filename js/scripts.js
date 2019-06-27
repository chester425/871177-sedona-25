
var link = document.querySelector(".titel-form");
var popap = document.querySelector(".search");
link.addEventListener("click", function (evt){
  evt.preventDefault();
  popap.classList.toggle("search-popap")
});
