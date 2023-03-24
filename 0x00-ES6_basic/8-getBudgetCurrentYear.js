export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${new Date().getFullYear()}`] = income;
  budget[`gdp-${new Date().getFullYear()}`] = gdp;
  budget[`capita-${new Date().getFullYear()}`] = capita;

  return budget;
}
