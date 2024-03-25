var body = document.body;
var soberInput = document.querySelector("#sobre");
soberInput.addEventListener("change", function () {
  body.classList = [];
  body.classList.add("sober");
});

var creativeInput = document.querySelector("#creative");
creativeInput.addEventListener("change", function () {
  body.classList = [];
  body.classList.add("creative");
});
