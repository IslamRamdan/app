let list = document.querySelector(".list-bars");
let icon = document.querySelector(".icon-list i");

icon.onclick = function () {
  list.classList.toggle("show");
};
document.body.addEventListener("click", function (e) {
  if (e.target !== list && e.target !== icon) {
    if (list.classList.contains("show")) {
      list.classList.remove("show");
    }
  }
});
