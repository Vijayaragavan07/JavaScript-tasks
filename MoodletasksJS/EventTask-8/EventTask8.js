selectvalue = document.getElementById("values");
function displayPreviousValues(selectvalue) {
  const previousValuesContainer = document.getElementById("previousValues");
  const selectedValue = selectvalue.value;

  if (selectedValue === "default") {
    previousValuesContainer.innerHTML = "";
    return;
  }

  const previousValues = Array.from(selectvalue.options)
    .filter(option => option.value !== "default" && option.value !== selectedValue)
    .map(option => option.text);

  const previousValuesList = previousValues.length > 0
    ? `<p>Previous values: ${previousValues.join(", ")}</p>`
    : "<p>No previous values for this option.</p>";

  previousValuesContainer.innerHTML = previousValuesList;
}
