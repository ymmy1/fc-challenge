export const randomInvoiceStatus = (setRInvoiceStatus) => {
  const invoiceOptions = ['Paid', 'Overdue'];
  const randomIndex = Math.floor(Math.random() * invoiceOptions.length);
  const randomStatus = invoiceOptions[randomIndex];
  setRInvoiceStatus(randomStatus);
};

export const randomInvoiceAmount = (setRInvoiceAmount) => {
  const min = 0.01;
  const max = 999999.99;

  const randomAmount = Math.random() * (max - min) + min;

  const formattedAmount = randomAmount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  setRInvoiceAmount(formattedAmount);
};

export const randomInvoiceDate = (setRInvoiceDate) => {
  const currentDate = new Date();
  const pastDate = new Date(2020, 2, 1); // March 1, 2020 company founded
  const randomYear =
    pastDate.getFullYear() +
    Math.floor(
      Math.random() * (currentDate.getFullYear() - pastDate.getFullYear() + 1)
    );
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 31) + 1;
  const randomDate = new Date(randomYear, randomMonth, randomDay);
  if (randomDate < pastDate) {
    randomDate.setDate(
      randomDate.getDate() + pastDate.getDate() - randomDate.getDate()
    );
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = randomDate.toLocaleDateString('en-US', options);

  setRInvoiceDate(formattedDate);
};
