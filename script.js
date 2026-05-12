const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function () {

  mobileMenu.classList.add("flex");

});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});

const testimonials = [
  {
    name: "Antonella Fiorilli",
    role: "Account Manager",
    image: "https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Mig's culinary expertise never fails to impress! Every dish is a masterpiece, bursting with flavor and freshness."
  },
  {
    name: "Marco Rossi",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The best Gnocchi I've had outside of Italy. The atmosphere is cozy and the service is impeccable."
  },
  {
    name: "Sarah Jenkins",
    role: "Event Planner",
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "We hosted a corporate dinner here and everyone was blown away. The Fettucine with Shrimp is a must-try!"
  },
  {
    name: "Elena Magri",
    role: "Devoted Mother & Educator",
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "As a mom, I’m very picky about where we eat, but Mig Ristorante is a win for the whole family! The ingredients are so fresh, and the atmosphere makes us feel right at home. It’s our favorite spot for Sunday dinner."
  }
];

let currentIndex = 0;

const textContent = document.getElementById('text-content');
const userImg = document.getElementById('user-img');
const userName = document.getElementById('user-name');
const userRole = document.getElementById('user-role');
const dotsContainer = document.getElementById('dots-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateTestimonial(index) {
  const item = testimonials[index];
  textContent.innerText = item.text;
  userImg.src = item.image;
  userName.innerText = item.name;
  userRole.innerText = item.role;

  dotsContainer.innerHTML = '';
  testimonials.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('ball');
    if (i === index) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

updateTestimonial(currentIndex);

setInterval(() => {
  nextBtn.click();
}, 5000);

const cards = document.querySelectorAll('.card-delivery');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }else {
    entry.target.classList.remove('show'); // Remove a classe quando o card sai da tela
}
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  observer.observe(card);
});