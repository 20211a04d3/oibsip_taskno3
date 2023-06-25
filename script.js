function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var result;

  if (fromUnit === "celsius" && toUnit === "fahrenheit") {
    result = temperature * 9 / 5 + 32;
  } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
    result = (temperature - 32) * 5 / 9;
  } else {
    result = temperature; // If the units are the same, no conversion needed
  }

  document.getElementById("result").innerHTML = result.toFixed(2);

  // Change background color based on the input value
  if (temperature > 30) {
    document.body.style.backgroundColor = "orange";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}
