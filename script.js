const icons = document.querySelectorAll(".section-1-icons i");

setInterval(() => {
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");

  for (let i = 1; i < icons.length; i++) {
    if (i > icons.length) {
      icons[0].classList.add("change");
      i = 1;
    } else {
      icon.nextElementSibling.classList.add("change");
    }
  }
}, 2500);

const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});
