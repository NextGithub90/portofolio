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
    <div class="card p-3 align-items-center rounded-3 overflow-x-hidden"
     style="background-color: rgba(30, 41, 59, 0.4); color: white; font-family: monospace; box-shadow: ${tech.boxShadow};">
     <i class="${tech.icon} p-3 ${tech.color}" style="font-size: 4rem;"></i>
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
    text: "Got a question? Send me a message, and I llget back to you soon.",
    scrollTrigger: {
      trigger: ".text-runi",
      toggleActions: "play none none none",
    },
  });
  gsap.to(".text-run", { duration: 2, delay: 1, text: "Because if the cover does not impress you what else can?" });
});
