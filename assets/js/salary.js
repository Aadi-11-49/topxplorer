function calculateSalary() {
  const monthly = Number(document.getElementById("monthlySalary").value);

  if (!monthly || monthly <= 0) {
    document.getElementById("salaryResult").innerText = "Please enter a valid salary amount.";
    return;
  }

  const annual = monthly * 12;
  const weekly = annual / 52;
  const daily = annual / 365;
  const hourly = daily / 8;

  document.getElementById("salaryResult").innerHTML = `
    <strong>Annual Salary:</strong> ${currencySymbol}${annual.toFixed(2)}<br>
    <strong>Weekly Salary:</strong> ${currencySymbol}${weekly.toFixed(2)}<br>
    <strong>Daily Salary:</strong> ${currencySymbol}${daily.toFixed(2)}<br>
    <strong>Hourly Salary:</strong> ${currencySymbol}${hourly.toFixed(2)}
  `;
}

