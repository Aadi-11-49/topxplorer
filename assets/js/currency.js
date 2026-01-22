const currencyMap = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£"
};

function getSelectedCurrency() {
  return localStorage.getItem("currency") || "INR";
}

function setCurrency(code) {
  localStorage.setItem("currency", code);
  location.reload();
}

function getCurrencySymbol() {
  return currencyMap[getSelectedCurrency()];
}

const currencySymbol = getCurrencySymbol();
