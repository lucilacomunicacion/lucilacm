
/* =====================================
   LUCILA COMUNICACIÓN
   FUNCIONALIDADES
===================================== */

// DATOS DE CONTACTO
// Reemplazar por tu número real.
// Incluir código de país y área, sin + ni espacios.

const whatsappNumber = "549XXXXXXXXXX";

const contactMessage =
  "¡Hola Lucila! Estuve viendo tu web y me gustaría consultar por tus servicios.";


// MENÚ PARA CELULARES

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );

  });

  // Cerrar menú al seleccionar una sección

  document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");

    });

  });

}


// ANIMACIONES AL DESPLAZARSE

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });

} else {

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}


// FOTOGRAFÍA DE PORTADA

const heroImage = document.querySelector(".hero-photo img");

const photoPlaceholder = document.querySelector(".photo-placeholder");

if (heroImage && photoPlaceholder) {

  heroImage.addEventListener("error", () => {

    heroImage.style.display = "none";
    photoPlaceholder.style.display = "flex";

  });

}


// ENLACES DE WHATSAPP

const whatsappButton = document.getElementById("whatsapp-button");
const contactButton = document.getElementById("contact-button");

const validNumber = /^549\d{10}$/.test(whatsappNumber);

if (validNumber) {

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`;

  if (whatsappButton) {
    whatsappButton.href = whatsappURL;
  }

  if (contactButton) {
    contactButton.href = whatsappURL;
    contactButton.target = "_blank";
    contactButton.rel = "noopener noreferrer";
  }

} else {

  if (whatsappButton) {
    whatsappButton.href = "#contacto";
  }

  if (contactButton) {
    contactButton.href = "#contacto";
  }

}


// AÑO AUTOMÁTICO DEL FOOTER

const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

