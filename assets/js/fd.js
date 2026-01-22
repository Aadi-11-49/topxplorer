let fdChartInstance = null;

function calculateFD() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);
  const result = document.getElementById("fdResult");

  if (!principal || !rate || !time) {
    result.innerText = "Please enter all values correctly.";
    return;
  }

  const r = rate / 100;
  const maturityAmount = principal * Math.pow(1 + r, time);
  const interestEarned = maturityAmount - principal;

  result.innerHTML = `
    <p><strong>Principal:</strong> ${currencySymbol}${principal.toFixed(2)}</p>
    <p><strong>Interest Earned:</strong> ${currencySymbol}${interestEarned.toFixed(2)}</p>
    <p><strong>Maturity Amount:</strong> ${currencySymbol}${maturityAmount.toFixed(2)}</p>
  `;

  drawFDChart(principal, interestEarned);
}

function drawFDChart(principal, interest) {
  const ctx = document.getElementById("fdChart").getContext("2d");

  if (fdChartInstance) {
    fdChartInstance.destroy();
  }

  fdChartInstance = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Principal Amount", "Interest Earned"],
      datasets: [{
        data: [principal, interest]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });
}
