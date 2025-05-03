const cardsData = [
  {
    title: "Portofolio V2",
    text: "Website Portofolio-v2 adalah versi terbaru dari..",
    animation: "fade-up",
    link: "https://nextgithub90.github.io/portofolio/",
    id: 1,
    duration: 800,
    delay: 100,
    image: "../img/portofolio.png", // Tambahkan properti image
  },
  {
    title: "Website Film",
    text: "Website ini adalah awal mula...",
    animation: "fade-left",
    link: "https://example.com/card2",
    duration: 1000,
    delay: 200,
    id: 2,
    image: "../img/naruto.png", // Gambar untuk card 2
  },
  {
    title: "Card Title 3",
    text: "Here is a card with some additional content.",
    animation: "fade-right",
    link: "https://example.com/card3",
    duration: 1200,
    delay: 300,
    id: 3,
    image: "../img/portofolio.png", // Tambahkan properti image
  },
  {
    title: "Card Title 4",
    text: "This is the fourth card with more supporting text.",
    animation: "zoom-in",
    link: "https://example.com/card4",
    duration: 1400,
    delay: 400,
    id: 4,
    image: "../img/portofolio.png", // Tambahkan properti image
  },
];

// Fungsi untuk men-generate card
function generateCards(cards) {
  const cardContainer = document.getElementById("card-container");
  cards.forEach((card) => {
    const cardHTML = `
<div class="card p-3 card-widthi overflow-x-hidden h-100" 
     style="background-color: #334e9329; color: white; font-family: monospace;" 
     data-aos="${card.animation}" 
     data-aos-duration="${card.duration}" 
     data-aos-delay="${card.delay}">
  <img src="${card.image}" class="card-img-top " alt="${card.title}" width="287" height="161">
  <div class="card-body b">
    <h5 class="card-title">${card.title}</h5>
    <p class="card-text" style="color: rgba(200, 215, 221, 0.725);">${card.text}</p>
    <div class="row mt-3">
      <div class="col text-start">
        <a href="${card.link}" target="_blank" style="text-decoration: none; color: inherit;">
          <i class="bi bi-browser-chrome fs-5"></i>
        </a>
      </div>
      <div class="col text-end">
        <a href="../detail/${card.id}">
          <button type="button" class="btn btn-outline-light">Details <i class="bi bi-arrow-right"></i></button>
        </a>
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

const techData = [
  {
    name: "HTML",
    icon: "fa-brands fa-html5",
    color: "text-danger",
    boxShadow: "0px 4px 10px rgba(255, 0, 0, 0.5)", // Contoh box-shadow untuk HTML
  },
  {
    name: "CSS",
    icon: "fa-brands fa-css3-alt",
    color: "text-primary",
    boxShadow: "0px 4px 10px rgba(0, 0, 255, 0.5)",
  },
  {
    name: "JavaScript",
    icon: "fa-brands fa-js",
    color: "text-warning",
    boxShadow: "0px 4px 10px rgba(255, 255, 0, 0.5)",
  },
  {
    name: "Bootstrap",
    icon: "fa-brands fa-bootstrap",
    color: "text-info",
    boxShadow: "0px 4px 10px rgba(0, 255, 255, 0.5)",
  },
  {
    name: "Node.js",
    icon: "fa-brands fa-node-js",
    color: "text-success",
    boxShadow: "0px 4px 10px rgba(0, 255, 0, 0.5)",
  },
];
// Fungsi untuk men-generate tech card
function generateTechCards(techs) {
  const techContainer = document.getElementById("tech-container");
  techs.forEach((tech) => {
    const techHTML = `
    <div class="card p-lg-3  align-items-center rounded-3 overflow-x-hidden tech-card"
     style="background-color: rgba(30, 41, 59, 0.4); color: white; font-family: monospace; box-shadow: ${tech.boxShadow};">
     <i class="${tech.icon} p-3 ${tech.color} i-tech" style="font-size: 4rem;"></i>
     <p>${tech.name}</p>
    </div>
 `;
    techContainer.innerHTML += techHTML;
  });
}
// Panggil fungsi untuk men-generate tech
generateTechCards(techData);
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
    text: "Got a question? Send me a message, and I'll get back to you soon.",
    scrollTrigger: {
      trigger: ".text-runi",
      toggleActions: "play none none none",
    },
  });
  gsap.to(".text-run", { duration: 2, delay: 1, text: "Because if the cover does not impress you what else can?" });
});
