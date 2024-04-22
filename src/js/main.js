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
var uncheckAllTrigger = document.querySelector(".uncheck-all");
var checkboxes = document.querySelectorAll(".my-tenses .checkbox");

var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};

var uncheckAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

checkAllTrigger.addEventListener("click", checkAll);
uncheckAllTrigger.addEventListener("click", uncheckAll);

// var checkAll = function () {
//   checkboxes.forEach((checkbox) => {
//     checkbox.checked = false;
//   });
// };

// checkAllTrigger.addEventListener("click", checkAll);
