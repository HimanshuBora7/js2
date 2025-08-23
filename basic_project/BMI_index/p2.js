const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "please give a valid height";
  }
  if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "please give a valid weight";
  }
  const heightM = height / 100;
  const bmi = Math.round(weight / (heightM * heightM));
  var status = "error";
  if (bmi < 19.5) {
    status = "you are underweight";
  } else if (18.5 <= bmi <= 24.9) {
    status = "normal range";
  } else if (25 <= bmi <= 29.9) {
    status = "overweight";
  } else {
    status = "obese";
  }
  results.innerHTML = `Ur BMI is ${bmi} and ur status is ${status}`;
});
