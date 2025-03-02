const cardsData = [
  {
    title: "Card Title 1",
    text: "This is a wider card with supporting text below.",
  },
  {
    title: "Card Title 2",
    text: "This is another card with supporting text below.",
  },
  {
    title: "Card Title 3",
    text: "Here is a card with some additional content.",
  },
  {
    title: "Card Title 4",
    text: "This is the fourth card with more supporting text.",
  },
];

// Fungsi untuk men-generate card
function generateCards(cards) {
  const cardContainer = document.getElementById("card-container");

  cards.forEach((card) => {
    const cardHTML = `
    <div class=" card p-3 " style="width: 20rem;background-color: #334e9329;color: white; font-family: monospace; ">
      <img src="Screenshot (419).png" class="card-img-top" alt="...">
      <div class="card-body b">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text"style="color: rgba(200, 215, 221, 0.725);">${card.text}</p>
        <button type="button" class="btn btn-outline-light">Secondary</button>
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

// Handle form submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("floatingInput").value;
  const message = document.getElementById("exampleFormControlTextarea1").value;

  const whatsappMessage = `username: ${username}\nMessage: ${message}`;
  const whatsappLink = `https://wa.me/6283852443148?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappLink, "_blank");

  alert("Success! Your message has been sent.");
});
