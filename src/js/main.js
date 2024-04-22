var body = document.body;
var creativeInput = document.querySelector("#creative");
var soberInput = document.querySelector("#sobre");

soberInput.addEventListener("change", function () {
  body.classList = [];
  body.classList.add("sober");
});

creativeInput.addEventListener("change", function () {
  body.classList = [];
  body.classList.add("creative");
});

var checkAllTrigger = document.querySelector(".check-all");
var checkboxes = document.querySelectorAll(".checkbox");

var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};

checkAllTrigger.addEventListener("click", checkAll);

var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

checkAllTrigger.addEventListener("click", checkAll);
