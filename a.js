const cardsData = [
  {
    title: "Card Title 1",
    text: "This is a wider card with supporting text below.",
    animation: "fade-up",
  },
  {
    title: "Card Title 2",
    text: "This is another card with supporting text below.",
    animation: "fade-left",
  },
  {
    title: "Card Title 3",
    text: "Here is a card with some additional content.",
    animation: "fade-right",
  },
  {
    title: "Card Title 4",
    text: "This is the fourth card with more supporting text.",
    animation: "zoom-in",
  },
];

// Fungsi untuk men-generate card
function generateCards(cards) {
  const cardContainer = document.getElementById("card-container");

  cards.forEach((card) => {
    const cardHTML = `
<div class="card p-3 card-widthi overflow-x-hidden " style="background-color: #334e9329; color: white; font-family: monospace;" data-aos="${card.animation}" >
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
  const contactMethod = document.querySelector('input[name="contact-method"]:checked').value;

  if (contactMethod === "whatsapp") {
    const whatsappLink = `https://wa.me/6283852443148?text=${encodeURIComponent(`Nama: ${username}\nPesan: ${message}`)}`;
    window.open(whatsappLink, "_blank");
  } else {
    const mailtoLink = `mailto:aldiartuda@gmail.com?subject=Pesan dari ${username}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, "_blank");
  }

  Swal.fire("Sukses!", "Pesan Anda telah dikirim.", "success");
});

// gsap animation
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  gsap.from(".jj", { duration: 2, y: -100, opacity: 0, ease: "bounce" });
  gsap.to(".text-runi", {
    duration: 2,
    text: "Got a question? Send me a message, and I llget back to you soon.",
    scrollTrigger: {
      trigger: ".text-runi",
      toggleActions: "play none none none",
    },
  });
  gsap.to(".text-run", { duration: 2, delay: 1, text: "Because if the cover does not impress you what else can?" });
});
