const cardsData = [
  {
    title: "Card Title 1",
    text: "This is a wider card with supporting text below.",
    updated: "Last updated 1 min ago",
  },
  {
    title: "Card Title 2",
    text: "This is another card with supporting text below.",
    updated: "Last updated 5 mins ago",
  },
  {
    title: "Card Title 3",
    text: "Here is a card with some additional content.",
    updated: "Last updated 10 mins ago",
  },
  {
    title: "Card Title 4",
    text: "This is the fourth card with more supporting text.",
    updated: "Last updated 15 mins ago",
  },
];

// Fungsi untuk men-generate card
function generateCards(cards) {
  const cardContainer = document.getElementById("card-container");

  cards.forEach((card) => {
    const cardHTML = `
    <div class=" card p-2 " style="width: 20rem;background-color: #334e9329;color: white; font-family: monospace; ">
      <img src="Screenshot (419).png" class="card-img-top" alt="...">
      <div class="card-body b">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.text}</p>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <p class="card-text"><small class="text-body-secondary">${card.updated}</small></p>
      </div>
    </div>
    `;
    cardContainer.innerHTML += cardHTML;
  });
}

// Panggil fungsi untuk men-generate card
generateCards(cardsData);

// Mengubah semua teks dalam navbar menjadi putih
const navLinks = document.querySelectorAll(".text");
navLinks.forEach((text) => {
  text.style.color = "white";
});
