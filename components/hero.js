// hero.js — professional, mobile-first, reduced-motion friendly
export function hero() {
  // Dynamic viewport for mobile (prevents jump with URL bar showing/hiding)
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  setVH();
  window.addEventListener("resize", setVH);

  // <section>
  const heroSection = document.createElement("section");
  heroSection.id = "home";
  heroSection.className =
    "relative flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden";
  // Use dynamic vh on mobile; fallback to min-h-screen on larger
  heroSection.style.minHeight = "calc(var(--vh, 1vh) * 100)";

  // ---- Local styles (fluid type, motion, S20 Ultra niceties) ----
  const style = document.createElement("style");
  style.textContent = `
    /* Fluid typography & spacing */
    #home .hero-title {
      font-size: clamp(2rem, 4.5vw, 4.25rem); /* ~32px → ~68px */
      line-height: 1.1;
      letter-spacing: -0.015em;
    }
    #home .hero-sub {
      font-size: clamp(1rem, 2.2vw, 1.375rem); /* ~16px → ~22px */
      line-height: 1.6;
    }

    /* Enter animation (respects reduced motion) */
    @media (prefers-reduced-motion: no-preference) {
      #home .fade-in-up {
        opacity: 0;
        transform: translateY(12px);
        animation: hfade 600ms ease-out both;
      }
      #home .fade-in-up:nth-child(2) { animation-delay: 90ms; }
      #home .fade-in-up:nth-child(3) { animation-delay: 180ms; }
      @keyframes hfade {
        to { opacity: 1; transform: translateY(0); }
      }
    }

    /* S20 Ultra width & below: ensure no horizontal scroll, trim gaps a bit */
    @media (max-width: 412px) {
      html, body { overflow-x: hidden; }
      #home .btn { padding: 12px 16px; font-size: 16px; } /* 44px+ tap target */
      #home .stats { gap: 16px; }
    }

    /* Super narrow (≤360px): keep layout tidy */
    @media (max-width: 360px) {
      #home .hero-title { font-size: clamp(1.8rem, 6vw, 2.25rem); }
      #home .hero-sub { font-size: 0.95rem; }
    }
  `;
  heroSection.appendChild(style);

  // Background pattern (decorative)
  const bgPattern = document.createElement("div");
  bgPattern.className =
    "pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.08),transparent_45%),radial-gradient(circle_at_40%_80%,rgba(99,102,241,0.07),transparent_45%)]";
  bgPattern.setAttribute("aria-hidden", "true");
  heroSection.appendChild(bgPattern);

  // Container
  const container = document.createElement("div");
  container.className = "relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8";
  heroSection.appendChild(container);

  const wrapper = document.createElement("div");
  wrapper.className = "max-w-5xl mx-auto text-center py-16 sm:py-20 lg:py-28";
  container.appendChild(wrapper);

  // --- Title ---
  const title = document.createElement("h1");
  title.className = "hero-title font-bold text-slate-900 fade-in-up";
  title.innerHTML = `Your Trusted <span class="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">IT Partner</span>`;
  wrapper.appendChild(title);

  // --- Paragraph ---
  const paragraph = document.createElement("p");
  paragraph.className =
    "hero-sub mt-4 text-slate-600 max-w-3xl mx-auto fade-in-up";
  paragraph.textContent =
    "Enterprise-grade IT support and solutions for small to medium businesses. We deliver reliable technology services that drive your business forward.";
  wrapper.appendChild(paragraph);

  // --- Buttons ---
  const buttonWrapper = document.createElement("div");
  buttonWrapper.className =
    "mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 fade-in-up";
  wrapper.appendChild(buttonWrapper);

  // Primary
  const btn1 = document.createElement("button");
  btn1.className =
    "btn inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition";
  btn1.textContent = "Schedule Consultation";
  btn1.addEventListener("click", () => {
    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  buttonWrapper.appendChild(btn1);

  // Secondary
  const btn2 = document.createElement("button");
  btn2.className =
    "btn inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium border-2 border-blue-600 text-blue-700 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition";
  btn2.textContent = "View Our Services";
  btn2.addEventListener("click", () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  buttonWrapper.appendChild(btn2);

  // --- Stats Grid ---
  const statsGrid = document.createElement("div");
  statsGrid.className =
    "stats mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto";
  wrapper.appendChild(statsGrid);

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "<2h", label: "Response Time" },
    { number: "10+", label: "Years Experience" },
  ];

  stats.forEach(({ number, label }) => {
    const statDiv = document.createElement("div");
    statDiv.className = "text-center";
    const num = document.createElement("div");
    num.className =
      "text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2";
    num.textContent = number;
    const lbl = document.createElement("div");
    lbl.className = "text-slate-600 text-sm sm:text-base";
    lbl.textContent = label;
    statDiv.appendChild(num);
    statDiv.appendChild(lbl);
    statsGrid.appendChild(statDiv);
  });

  return heroSection;
}
