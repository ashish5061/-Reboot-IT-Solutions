// header.js (mobile-optimized)
export function Header() {
  // fix 100vh issues on mobile (dynamic viewport)
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  setVH();
  window.addEventListener("resize", setVH);

  const headerWrapper = document.createElement("div");
  headerWrapper.id = "site-header";

  // Top bar (unchanged)
  const topbar = document.createElement("div");
  topbar.className = "hidden md:block bg-slate-900 text-white";
  topbar.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-10 items-center justify-between text-xs sm:text-sm">
        <ul class="flex items-center gap-6" aria-label="Contact details">
          <li class="flex items-center gap-2">
            <span aria-hidden="true">📞</span>
            <a href="tel:+15551234567" class="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white">(555) 123-4567</a>
          </li>
          <li class="flex items-center gap-2">
            <span aria-hidden="true">✉️</span>
            <a href="mailto:support@rebootitsolutions.com" class="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white">support@rebootitsolutions.com</a>
          </li>
        </ul>
        <div class="flex items-center gap-3">
          <span class="rounded px-2 py-1 text-[11px] sm:text-xs bg-blue-500">24/7 Emergency Support</span>
          <span class="hidden sm:inline">Certified Microsoft &amp; CompTIA Partners</span>
        </div>
      </div>
    </div>
  `;

  const header = document.createElement("header");
  header.className =
    "sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm";
  header.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 sm:h-20 items-center justify-between">
        <!-- Logo -->
        <a href="#home" class="group inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg">
          <span class="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <span class="font-bold text-white text-lg sm:text-xl">R</span>
          </span>
          <span class="flex flex-col">
            <span class="font-bold text-base sm:text-xl text-slate-900 leading-none">Reboot IT Solutions</span>
            <span class="text-[11px] sm:text-xs text-slate-600 leading-none">Professional IT Services</span>
          </span>
        </a>

        <!-- Desktop nav -->
        <nav aria-label="Primary" class="hidden lg:flex items-center gap-8">
          ${["home", "services", "booking", "faq", "contact"]
            .map(
              (id) => `
            <button type="button"
                    data-target="${id}"
                    class="px-1 py-2 text-slate-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">
              ${
                id === "faq"
                  ? "About"
                  : id.charAt(0).toUpperCase() + id.slice(1)
              }
            </button>
          `
            )
            .join("")}
        </nav>

        <!-- Desktop CTAs -->
        <div class="hidden lg:flex items-center gap-3">
          <button type="button" data-target="contact"
                  class="px-4 py-2 border-2 border-slate-900 rounded-lg hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            Get&nbsp;Quote
          </button>
          <button type="button" data-target="booking"
                  class="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            Free&nbsp;Consultation
          </button>
        </div>

        <!-- Mobile menu button -->
        <button id="menuBtn"
                type="button"
                class="lg:hidden p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Open menu"
                aria-controls="mobileMenu"
                aria-expanded="false">
          <span aria-hidden="true">☰</span>
        </button>
      </div>
    </div>

    <!-- Mobile menu (full-screen sheet) -->
    <div id="mobileMenu"
         class="fixed inset-0 z-[60] isolate pointer-events-none opacity-0 invisible transition-opacity duration-200"
         aria-hidden="true">
      <!-- overlay -->
      <div class="absolute inset-0 bg-slate-900/50"></div>

      <!-- panel: uses dynamic vh + safe-areas; slide-in -->
      <div role="dialog" aria-modal="true" aria-label="Mobile navigation"
           class="absolute right-0 top-0 h-[calc(var(--vh)*100)] w-full sm:w-80 max-w-[100vw] bg-white shadow-xl
                  translate-x-full transition-transform duration-250 will-change-transform
                  pt-[max(env(safe-area-inset-top),16px)] pb-[max(env(safe-area-inset-bottom),16px)]">
        <div class="px-5">
          <div class="flex items-center justify-between mb-3">
            <span class="font-semibold text-slate-900 text-base">Menu</span>
            <button id="closeMenu" type="button"
                    class="p-3 rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    aria-label="Close menu">✖</button>
          </div>

          <!-- search (optional, improves mobile nav utility) -->
          <div class="mb-2">
            <label for="mobile-nav-search" class="sr-only">Search</label>
            <input id="mobile-nav-search" type="search" inputmode="search" placeholder="Search…"
                   class="w-full rounded-lg border border-slate-300 px-4 py-3 text-base"
                   autocomplete="off">
          </div>

          <nav class="mt-1" aria-label="Primary mobile">
            <ul class="flex flex-col">
              ${["home", "services", "booking", "faq", "contact"]
                .map(
                  (id) => `
                <li>
                  <button type="button"
                          role="menuitem"
                          data-target="${id}"
                          class="w-full text-left px-4 py-4 text-[17px] rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                    ${
                      id === "faq"
                        ? "About"
                        : id.charAt(0).toUpperCase() + id.slice(1)
                    }
                  </button>
                </li>
              `
                )
                .join("")}
            </ul>
          </nav>

          <div class="mt-2 grid grid-cols-1 gap-2">
            <button type="button" data-target="contact"
                    class="px-4 py-4 rounded-lg border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              Get&nbsp;Quote
            </button>
            <button type="button" data-target="booking"
                    class="px-4 py-4 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              Free&nbsp;Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  headerWrapper.appendChild(topbar);
  headerWrapper.appendChild(header);

  // Motion preference-aware smooth scroll
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const scrollOpts = prefersReduced
    ? {}
    : { behavior: "smooth", block: "start" };
  const scrollToTarget = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView(scrollOpts);
  };

  // Shared handlers
  headerWrapper.querySelectorAll("[data-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      scrollToTarget(btn.getAttribute("data-target"));
      closeMobileMenu(); // safe no-op on desktop
    });
  });

  // Mobile menu controls & animation
  const menuBtn = headerWrapper.querySelector("#menuBtn");
  const mobileMenu = headerWrapper.querySelector("#mobileMenu");
  const panel = mobileMenu.querySelector('[role="dialog"]');
  const overlay = mobileMenu.firstElementChild;
  const closeBtn = headerWrapper.querySelector("#closeMenu");
  let lastFocus = null;

  function openMobileMenu() {
    lastFocus = document.activeElement;
    mobileMenu.classList.remove(
      "pointer-events-none",
      "opacity-0",
      "invisible"
    );
    mobileMenu.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    // slide in
    requestAnimationFrame(() => {
      panel.classList.remove("translate-x-full");
    });
    // lock scroll
    document.documentElement.style.overflow = "hidden";

    // focus first control
    const first = panel.querySelector(
      "button, [href], input, [tabindex]:not([tabindex='-1'])"
    );
    (first || closeBtn).focus();
  }

  function closeMobileMenu() {
    // slide out
    panel.classList.add("translate-x-full");
    mobileMenu.classList.add("opacity-0");
    mobileMenu.classList.add("pointer-events-none");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
    if (lastFocus) lastFocus.focus();
    // ensure invisible after transition
    setTimeout(() => mobileMenu.classList.add("invisible"), 200);
  }

  // Open/close events
  menuBtn.addEventListener("click", openMobileMenu);
  closeBtn.addEventListener("click", closeMobileMenu);
  overlay.addEventListener("click", closeMobileMenu);

  // Keyboard handling (Esc + Tab trap)
  headerWrapper.addEventListener("keydown", (e) => {
    if (mobileMenu.getAttribute("aria-hidden") === "false") {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMobileMenu();
      } else if (e.key === "Tab") {
        const focusables = panel.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        const list = Array.from(focusables).filter(
          (el) => !el.hasAttribute("disabled")
        );
        if (list.length) {
          const first = list[0];
          const last = list[list.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
  });

  // Swipe-to-close (right swipe)
  let startX = null,
    startY = null,
    swiping = false;
  panel.addEventListener(
    "touchstart",
    (e) => {
      const t = e.changedTouches[0];
      startX = t.clientX;
      startY = t.clientY;
      swiping = true;
    },
    { passive: true }
  );

  panel.addEventListener(
    "touchmove",
    (e) => {
      if (!swiping) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = Math.abs(t.clientY - startY);
      // horizontal intent, small vertical jitter
      if (dx > 60 && dy < 40) {
        swiping = false;
        closeMobileMenu();
      }
    },
    { passive: true }
  );

  return headerWrapper;
}
