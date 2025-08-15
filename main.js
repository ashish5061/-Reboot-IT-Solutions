import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";
import { hero } from "./components/hero.js";
import { Services } from "./components/Services.js"; // Make sure file name matches exactly
import { Testimonials } from "./components/testimonials.js";
import { Booking } from "./components/booking.js";
import { FAQ } from "./components/faq.js";
import { Contact } from "./components/contact.js";

const app = document.getElementById("app");

// Add Header
app.appendChild(Header());

// Main content wrapper
const main = document.createElement("main");
main.className = "p-6";

// Add Hero section
main.appendChild(hero());

// Add Services section
main.appendChild(Services());

main.appendChild(Testimonials());

main.appendChild(Booking()); // ⬅️ booking section here

main.appendChild(FAQ());

main.appendChild(Contact()); // ⬅️ Contact section here
// Append main to app
app.appendChild(main);

// Add Footer
app.appendChild(Footer());
