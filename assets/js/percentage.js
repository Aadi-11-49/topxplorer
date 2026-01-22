function percentOf() {
  const x = parseFloat(document.getElementById("p1").value);
  const y = parseFloat(document.getElementById("p2").value);
  if (isNaN(x) || isNaN(y)) return;
  document.getElementById("result1").innerText = `${x}% of ${y} = ${(x / 100 * y).toFixed(2)}`;
}

function whatPercent() {
  const x = parseFloat(document.getElementById("p3").value);
  const y = parseFloat(document.getElementById("p4").value);
  if (isNaN(x) || isNaN(y) || y === 0) return;
  document.getElementById("result2").innerText = `${x} is ${(x / y * 100).toFixed(2)}% of ${y}`;
}

function percentIncrease() {
  const original = parseFloat(document.getElementById("p5").value);
  const newVal = parseFloat(document.getElementById("p6").value);
  if (isNaN(original) || isNaN(newVal) || original === 0) return;
  const increase = ((newVal - original) / original) * 100;
  document.getElementById("result3").innerText = `Increase = ${increase.toFixed(2)}%`;
}

function percentDecrease() {
  const original = parseFloat(document.getElementById("p7").value);
  const newVal = parseFloat(document.getElementById("p8").value);
  if (isNaN(original) || isNaN(newVal) || original === 0) return;
  const decrease = ((original - newVal) / original) * 100;
  document.getElementById("result4").innerText = `Decrease = ${decrease.toFixed(2)}%`;
}
