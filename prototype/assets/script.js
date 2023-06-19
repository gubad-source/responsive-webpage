//////////////////////////// hamburger
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  console.log("test");
  document.querySelector(".navbar ul").classList.toggle("disapear");
});
//////////////////////////// accordion
let accordion = document.querySelectorAll(".accordion .content-box");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
//////////////////////////// slider
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

//////////////////////////// highlight
let highligth = document.querySelector("p");

let words = highligth.innerText.split(" ");

words = words.map((item) => {
  return `<span>${item}</span>`;
});

highligth.innerHTML = words.join(" ");

let childiren = Array.from(highligth.children);

childiren.forEach((span) => {
  span.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
