let accordion = document.querySelectorAll(".accordion .content-box");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
let nextBtn = document.querySelector(".slider .next");

let previousBtn = document.querySelector(".slider .previous");

nextBtn.addEventListener("click", function () {
  var activeItem = document.querySelector(".slider .items .item.active");

  activeItem.classList.remove("active");

  if (activeItem.nextElementSibling != null) {
    activeItem.nextElementSibling.classList.add("active");
  } else {
    document
      .querySelector(".slider .items .item:first-child")
      .classList.add("active");
  }
});

previousBtn.addEventListener("click", function () {
  var activeItem = document.querySelector(".slider .items .item.active");

  activeItem.classList.remove("active");

  if (activeItem.previousElementSibling != null) {
    activeItem.previousElementSibling.classList.add("active");
  } else {
    document
      .querySelector(".slider .items .item:last-child")
      .classList.add("active");
  }
});
