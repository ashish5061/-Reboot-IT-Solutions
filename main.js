// main.js
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { hero } from "./components/hero.js";
import { Services } from "./components/services.js"; // match file name!
import { Testimonials } from "./components/testimonials.js";
import { Booking } from "./components/booking.js";
import { FAQ } from "./components/faq.js";
import { Contact } from "./components/contact.js";

const app = document.getElementById("app");
if (!app) {
  console.error("[boot] #app not found");
} else {
  // Header
  app.appendChild(Header());

  // Main
  const main = document.createElement("main");
  main.className = "p-6";
  main.append(
    hero(), // id="home"
    Services(), // id="services"
    Testimonials(), // id="testimonials" (grid lives here)
    Booking(), // id="booking"
    FAQ(), // id="faq"
    Contact() // id="contact"
  );
  app.appendChild(main);

  // Footer
  app.appendChild(Footer());

  console.log("[boot] App mounted");
}
