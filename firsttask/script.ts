

interface CardData {
  title: string;
  value: string | number;
  percentage: string;
  isPositive: boolean;
}

export const cardData: CardData[] = [
  { title: "Revenue", value: "$2,047", percentage: "10%", isPositive: false },
  { title: "Orders", value: 356, percentage: "20%", isPositive: true },
  { title: "Dine in", value: 220, percentage: "10%", isPositive: true },
  { title: "Take away", value: 135, percentage: "5%", isPositive: false },
];

export function updateCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    const data = cardData[index];
    card.querySelector("h3")!.textContent = data.title;
    card.querySelector("p")!.textContent = data.value.toString();
    const percentageElement = card.querySelector(".percentage")!;
    percentageElement.textContent = `${data.isPositive ? "↑" : "↓"} ${
      data.percentage
    }`;
    percentageElement.classList.toggle("up", data.isPositive);
    percentageElement.classList.toggle("down", !data.isPositive);
  });
}

document.addEventListener("DOMContentLoaded", updateCards);
