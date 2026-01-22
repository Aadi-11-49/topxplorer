function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("bmiResult");

  if (!height || !weight) {
    result.innerText = "Please enter valid height and weight.";
    return;
  }

  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  // Normalize BMI marker position (0–40 scale)
  const bmiPercent = Math.min((bmi / 40) * 100, 100);

  result.innerHTML = `
    <div class="bmi-stats">
      <p><strong>Your BMI:</strong> ${bmi.toFixed(2)}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Healthy BMI Range:</strong> 18.5 – 24.9</p>

      <div class="bmi-bar">
        <div class="bmi-marker" style="left:${bmiPercent}%"></div>
      </div>

      <p style="font-size: 14px; margin-top: 8px;">
        Underweight (&lt;18.5) | Normal (18.5–24.9) | Overweight (25–29.9) | Obese (30+)
      </p>
    </div>
  `;
}
