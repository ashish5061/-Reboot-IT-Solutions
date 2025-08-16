// header.js — S20 Ultra compact tuning (≤ 412px) + centered nav (refined)
export function Header() {
  // Dynamic viewport for mobile (prevents jump with URL bar)
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  setVH();
  window.addEventListener("resize", setVH);

  const headerWrapper = document.createElement("div");
  headerWrapper.id = "site-header";

  // ---- Compact CSS + centering + offsets ----
  const style = document.createElement("style");
  style.textContent = `
    /* Avoid horizontal scroll from tiny rounding/layout */
    html, body { overflow-x: hidden; }

    /* Smooth scroll everywhere, but respect reduced motion */
    html { scroll-behavior: smooth; }
    @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

    /* Offset anchor jumps for the sticky header */
    [id] { scroll-margin-top: 88px; }
    @media (max-width: 640px) { [id] { scroll-margin-top: 64px; } }

    /* Ensure desktop nav is truly centered regardless of logo/CTA widths */
    @media (min-width: 1024px) {
      #site-header .hdr-grid { display: grid; grid-template-columns: auto 1fr auto; align-items: center; }
      #site-header .nav-desktop { justify-content: center; }
    }

    /* Respect reduced motion for panel transitions */
    @media (prefers-reduced-motion: reduce) {
      #site-header .mobile-panel,
      #site-header #mobileMenu { transition: none !important; }
    }

    @media (max-width: 412px) {
      /* Tighten the top bar line height and font sizes a touch */
      #site-header .topbar-text { font-size: 12px; }
      #site-header .brand-title   { font-size: clamp(14px, 3.8vw, 16px); }
      #site-header .brand-tagline { font-size: 11px; }

      /* Compact logo block */
      #site-header .brand-mark { width: 40px; height: 40px; }
      #site-header .brand-mark span { font-size: 18px; }

      /* Header padding & height */
      #site-header .hdr-row { height: 56px; }
      #site-header .hdr-pad { padding-left: 12px; padding-right: 12px; }

      /* Hamburger hit area stays large, but icon text smaller */
      #site-header #menuBtn span { font-size: 18px; }

      /* Mobile sheet: full width on very small screens */
      #site-header .mobile-panel { width: 100vw !important; max-width: 100vw !important; }

      /* Menu item sizing: comfortable taps */
      #site-header .mobile-item { padding: 12px 12px; font-size: 16px; } /* >=16px avoids zoom */
      #site-header .mobile-cta  { padding: 12px 14px; font-size: 16px; }

      /* Reduce extra margins */
      #site-header .mobile-block-gap { margin-top: 8px !important; }
      #site-header .mobile-brand-row { gap: 10px; }
      #site-header .mobile-actions { gap: 8px; }
    }

    /* Extra safety for very small widths (≤ 360px) */
    @media (max-width: 360px) {
      #site-header .brand-title { font-size: 14px; }
      #site-header .brand-tagline { display: none; } /* hide tagline if space is tight */
    }
  `;
  headerWrapper.appendChild(style);

  // ===== Top bar =====
  const topbar = document.createElement("div");
  topbar.className = "hidden md:block bg-slate-900 text-white";
  topbar.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-10 items-center justify-between text-xs sm:text-sm topbar-text">
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

  // ===== Header & Nav =====
  const header = document.createElement("header");
  header.className =
    "sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm";
  header.innerHTML = `
    <div class="mx-auto max-w-7xl hdr-pad px-4 sm:px-6 lg:px-8">
      <!-- Flex on mobile/tablet; switches to 3-col grid on lg+ via CSS above -->
      <div class="flex hdr-row h-16 sm:h-20 items-center justify-between lg:justify-normal hdr-grid">
        <!-- Brand -->
        <a href="#home" data-target="home" class="group inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg">
          <span class="brand-mark flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <span class="font-bold text-white text-lg sm:text-xl">R</span>
          </span>
          <span class="flex flex-col min-w-0">
            <span class="brand-title font-semibold tracking-tight text-base sm:text-xl text-slate-900 leading-none truncate">Reboot IT Solutions</span>
            <span class="brand-tagline text-[11px] sm:text-xs text-slate-600 leading-none">Professional IT Services</span>
          </span>
        </a>

        <!-- Desktop nav (centered) -->
        <nav aria-label="Primary" class="hidden lg:flex nav-desktop items-center gap-4">
          ${["home", "services", "booking", "faq", "contact"]
            .map(
              (id) => `
            <button type="button"
              data-target="${id}"
              class="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
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

        <!-- Desktop CTAs (right column) -->
        <div class="hidden lg:flex items-center gap-3">
          <button type="button" data-target="contact"
                  class="px-4 py-2 rounded-md border border-slate-300 text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            Get&nbsp;Quote
          </button>
          <button type="button" data-target="booking"
                  class="px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
            Free&nbsp;Consultation
          </button>
        </div>

        <!-- Mobile menu button -->
        <button id="menuBtn"
                type="button"
                class="lg:hidden p-2 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Open menu"
                aria-controls="mobileMenu"
                aria-expanded="false">
          <span aria-hidden="true">☰</span>
        </button>
      </div>
    </div>

    <!-- Mobile menu (sheet) -->
    <div id="mobileMenu"
         class="fixed inset-0 z-[60] isolate pointer-events-none opacity-0 invisible transition-opacity duration-300"
         aria-hidden="true">
      <!-- overlay -->
      <div class="absolute inset-0 bg-slate-900/50"></div>

      <!-- panel -->
      <div role="dialog" aria-modal="true" aria-label="Mobile navigation"
           class="mobile-panel absolute right-0 top-0 h-[calc(var(--vh)*100)] w-full sm:w-80 bg-white shadow-xl
                  translate-x-full transition-transform duration-300 will-change-transform
                  pt-[max(env(safe-area-inset-top),16px)] pb-[max(env(safe-area-inset-bottom),16px)]">
        <div class="px-5">
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold tracking-wide text-slate-500 uppercase">Menu</span>
            <button id="closeMenu" type="button"
                    class="p-3 rounded-md hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    aria-label="Close menu">✖</button>
          </div>

          <!-- Brand echo -->
          <div class="mobile-brand-row mt-3 flex items-center gap-3 border-b border-slate-100 pb-3">
            <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold">R</span>
            <div class="min-w-0">
              <p class="text-sm font-medium text-slate-900 truncate">Reboot IT Solutions</p>
              <p class="text-xs text-slate-500">Professional IT Services</p>
            </div>
          </div>

          <!-- Nav -->
          <nav class="mobile-block-gap mt-3" aria-label="Primary mobile">
            <ul class="flex flex-col divide-y divide-slate-100">
              ${["home", "services", "booking", "faq", "contact"]
                .map(
                  (id) => `
                <li class="flex justify-center">
                  <button type="button"
                          role="menuitem"
                          data-target="${id}"
                          class="mobile-item w-full max-w-sm text-center px-3 py-4 text-[17px] rounded-md hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
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

          <!-- Actions -->
          <div class="mobile-actions mt-3 grid grid-cols-1 gap-2 place-items-center">
            <button type="button" data-target="contact"
                    class="mobile-cta w-full max-w-sm px-4 py-4 rounded-md border border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              Get&nbsp;Quote
            </button>
            <button type="button" data-target="booking"
                    class="mobile-cta w-full max-w-sm px-4 py-4 rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              Free&nbsp;Consultation
            </button>
          </div>

          <!-- Footer meta -->
          <div class="mt-4 text-xs text-slate-500 text-center">
            <p class="leading-5">© <span id="yearSpan"></span> Reboot IT Solutions.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  headerWrapper.appendChild(topbar);
  headerWrapper.appendChild(header);

  // ===== Behavior =====
  const y = new Date().getFullYear();
  const yearSpan = headerWrapper.querySelector("#yearSpan");
  if (yearSpan) yearSpan.textContent = y;

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

  // Smooth scroll for all nav triggers (including brand)
  headerWrapper.querySelectorAll("[data-target]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-target");
      scrollToTarget(id);
      closeMobileMenu();
    });
  });

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
    requestAnimationFrame(() => panel.classList.remove("translate-x-full"));
    document.documentElement.style.overflow = "hidden";
    const first = panel.querySelector(
      "button, [href], input, [tabindex]:not([tabindex='-1'])"
    );
    (first || closeBtn).focus();
  }

  function closeMobileMenu() {
    panel.classList.add("translate-x-full");
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
    if (lastFocus) lastFocus.focus();
    setTimeout(() => mobileMenu.classList.add("invisible"), 300); // match duration-300
  }

  menuBtn.addEventListener("click", openMobileMenu);
  closeBtn.addEventListener("click", closeMobileMenu);
  overlay.addEventListener("click", closeMobileMenu);

  // Keyboard (Esc + Tab trap)
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
      if (dx > 60 && dy < 40) {
        swiping = false;
        closeMobileMenu();
      }
    },
    { passive: true }
  );

  return headerWrapper;
}
