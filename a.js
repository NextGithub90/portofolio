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
    <div class="col-6 py-2 px 2 ">
    <div class="card mb-3 "
        style="max-width: 540px; background: linear-gradient(to right, #130429,#280F4C);">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="coffee-cup.png" class="img-fluid rounded-start p-3" alt="...">
            </div>
            <div class="col-md-8 d-flex">
                <div class="card-body  align-content-center ">
                    <h5 class="card-title text"
                        style="font-family: 'Poppins', sans-serif; font-weight: 600;font-style: normal;">
                       <p>  ${card.title}</p>
                    </h5>
                    <p class="card-text text"
                        style="font-family: 'Poppins', 'sans-serif'; font-weight: 500; font-style: normal; font-size: .7em;">
                      ${card.text}
                        lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text text update"><small class="text update">${card.updated}</small></p>
                </div>  
            </div>
        </div>
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
