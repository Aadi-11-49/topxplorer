function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const resultDiv = document.getElementById("ageResult");

  if (!dobInput) {
    resultDiv.innerText = "Please select your date of birth.";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    resultDiv.innerText = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const diffTime = today - dob;
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  resultDiv.innerHTML = `
    <strong>Your Age:</strong> ${years} Years, ${months} Months, ${days} Days<br>
    <strong>Total Days Lived:</strong> ${totalDays} Days
  `;
}
