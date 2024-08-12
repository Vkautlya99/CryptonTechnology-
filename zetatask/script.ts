interface Transaction {
  name: string;
  date: string;
  time: string;
  amount: number;
  type: "received" | "outgoing";
  status: string;
  imageUrl: string;
}

const transactions: Transaction[] = [
  {
    name: "Aokiji",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: 13.0,
    type: "received",
    status: "Received",
    imageUrl: "path/to/aokiji.jpg", // Replace with the actual path to Aokiji's image
  },
  {
    name: "Kizaru",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: -9.0,
    type: "outgoing",
    status: "Outgoing",
    imageUrl: "path/to/kizaru.jpg", // Replace with the actual path to Kizaru's image
  },
  {
    name: "Akainu",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: 20.0,
    type: "received",
    status: "Received",
    imageUrl: "path/to/akainu.jpg", // Replace with the actual path to Akainu's image
  },
];

function renderTransactions() {
  const transactionsContainer = document.getElementById("transactions");
  if (!transactionsContainer) return;

  transactions.forEach((transaction) => {
    const transactionElement = document.createElement("div");
    transactionElement.classList.add("transaction-item");

    transactionElement.innerHTML = `
            <div class="transaction-info">
                <img src="${transaction.imageUrl}" alt="${transaction.name}">
                <div class="transaction-details">
                    <div class="transaction-name">${transaction.name}</div>
                    <div class="transaction-time">${transaction.date} • ${
      transaction.time
    }</div>
                    <div class="transaction-status">${transaction.status}</div>
                </div>
            </div>
            <div class="transaction-amount ${transaction.type}">
                ${
                  transaction.type === "received" ? "+" : ""
                }$${transaction.amount.toFixed(2)}
            </div>
        `;

    transactionsContainer.appendChild(transactionElement);
  });
}

renderTransactions();
