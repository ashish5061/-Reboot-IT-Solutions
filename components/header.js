export function Header() {
  const headerWrapper = document.createElement("div");

  // Top bar
  const topbar = document.createElement("div");
  topbar.className = "hidden md:block bg-slate-900 text-white py-2";
  topbar.innerHTML = `
    <div class="container mx-auto px-6 flex justify-between items-center text-sm">
      <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-2">
          📞 <span>(555) 123-4567</span>
        </div>
        <div class="flex items-center space-x-2">
          ✉️ <span>support@rebootitsolutions.com</span>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded">
          24/7 Emergency Support
        </span>
        <span>Certified Microsoft & CompTIA Partners</span>
      </div>
    </div>
  `;

  // Main header
  const header = document.createElement("header");
  header.className =
    "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm";
  header.innerHTML = `
    <div class="container mx-auto flex h-20 items-center justify-between px-6">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
          <span class="font-bold text-white text-xl">R</span>
        </div>
        <div>
          <div class="font-bold text-xl text-slate-900">Reboot IT Solutions</div>
          <div class="text-xs text-slate-600">Professional IT Services</div>
        </div>
      </div>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center space-x-8">
        <button data-target="home" class="text-slate-700 hover:text-blue-500 font-medium">Home</button>
        <button data-target="services" class="text-slate-700 hover:text-blue-500 font-medium">Services</button>
        <button data-target="booking" class="text-slate-700 hover:text-blue-500 font-medium">Solutions</button>
        <button data-target="faq" class="text-slate-700 hover:text-blue-500 font-medium">About</button>
        <button data-target="contact" class="text-slate-700 hover:text-blue-500 font-medium">Contact</button>
      </nav>

      <!-- Desktop CTAs -->
      <div class="hidden lg:flex items-center space-x-4">
        <button data-target="contact" class="px-4 py-2 border-2 border-slate-900 rounded">Get Quote</button>
        <button data-target="booking" class="px-4 py-2 text-white rounded bg-gradient-to-r from-blue-500 to-blue-600">Free Consultation</button>
      </div>

      <!-- Mobile menu button -->
      <button id="menuBtn" class="lg:hidden p-2 rounded hover:bg-gray-100">☰</button>
    </div>

    <!-- Mobile menu -->
    <div id="mobileMenu" class="hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6">
      <button id="closeMenu" class="mb-4">✖</button>
      <div class="flex flex-col space-y-4">
        <button data-target="home" class="text-left">Home</button>
        <button data-target="services" class="text-left">Services</button>
        <button data-target="booking" class="text-left">Solutions</button>
        <button data-target="faq" class="text-left">About</button>
        <button data-target="contact" class="text-left">Contact</button>
      </div>
    </div>
  `;

  headerWrapper.appendChild(topbar);
  headerWrapper.appendChild(header);

  // Smooth scroll + mobile menu logic
  headerWrapper.querySelectorAll("[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      headerWrapper.querySelector("#mobileMenu").classList.add("hidden");
    });
  });

  const menuBtn = headerWrapper.querySelector("#menuBtn");
  const closeMenu = headerWrapper.querySelector("#closeMenu");
  const mobileMenu = headerWrapper.querySelector("#mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });

  return headerWrapper;
}
