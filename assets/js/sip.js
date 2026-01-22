let sipChartInstance = null;

function calculateSIP() {
  const sipAmount = Number(document.getElementById("sipAmount").value);
  const annualRate = Number(document.getElementById("sipRate").value);
  const years = Number(document.getElementById("sipYears").value);

  if (!sipAmount || !annualRate || !years) {
    document.getElementById("sipResult").innerText = "Please enter valid values.";
    return;
  }

  const months = years * 12;
  const monthlyRate = annualRate / 12 / 100;

  const futureValue =
    sipAmount *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

  const investedAmount = sipAmount * months;
  const totalGains = futureValue - investedAmount;

  document.getElementById("sipResult").innerHTML = `
    <strong>Total Invested:</strong> ${currencySymbol}${investedAmount.toFixed(2)}<br>
    <strong>Total Gains:</strong> ${currencySymbol}${totalGains.toFixed(2)}<br>
    <strong>Future Value:</strong> ${currencySymbol}${futureValue.toFixed(2)}
  `;

  drawSipChart(investedAmount, totalGains);
}

function drawSipChart(invested, gains) {
  const ctx = document.getElementById("sipChart").getContext("2d");

  if (sipChartInstance) sipChartInstance.destroy();

  sipChartInstance = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Total Invested", "Total Gains"],
      datasets: [{
        data: [invested, gains],
        backgroundColor: ["#2563eb", "#22c55e"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label: (ctx) => ctx.label + ": " + currencySymbol  + ctx.parsed.toFixed(2)
          }
        }
      }
    }
  });
}
