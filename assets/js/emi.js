let emiChartInstance = null;

function calculateEMI() {
  const P = Number(document.getElementById("loanAmount").value);
  const annualRate = Number(document.getElementById("interestRate").value);
  const years = Number(document.getElementById("loanTenure").value);

  if (!P || !annualRate || !years) {
    document.getElementById("emiResult").innerText = "Please enter valid values.";
    return;
  }

  const R = annualRate / 12 / 100;
  const N = years * 12;

  const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  const totalPayment = EMI * N;
  const totalInterest = totalPayment - P;

  document.getElementById("emiResult").innerHTML = `
    <strong>Monthly EMI:</strong> ${currencySymbol}${EMI.toFixed(2)}<br>
    <strong>Total Interest:</strong> ${currencySymbol}${totalInterest.toFixed(2)}<br>
    <strong>Total Amount Payable:</strong> ${currencySymbol}${totalPayment.toFixed(2)}
  `;

  drawPieChart(P, totalInterest);
}

function drawPieChart(principal, interest) {
  const ctx = document.getElementById("emiChart").getContext("2d");

  if (emiChartInstance) {
    emiChartInstance.destroy();
  }

  emiChartInstance = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Loan Amount", "Total Interest"],
      datasets: [{
        data: [principal, interest],
        backgroundColor: ["#2563eb", "#22c55e"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.label + ":" +  currencySymbol + context.parsed.toFixed(2);
            }
          }
        }
      }
    }
  });
}
