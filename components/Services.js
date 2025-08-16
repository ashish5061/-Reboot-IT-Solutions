// components/services.js — professional, mobile-first, accessible
export function Services() {
  // --- helpers ---
  const el = (tag, className = "", text = "") => {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (text) e.textContent = text;
    return e;
  };

  const createIcon = (name, className = "h-7 w-7 text-white") => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("class", className);
    svg.setAttribute("aria-hidden", "true"); // decorative

    const p = (d) => {
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("d", d);
      svg.appendChild(path);
    };

    // minimal lucide-like shapes
    switch (name) {
      case "Monitor":
        p("M3 4h18v12H3z");
        p("M7 20h10");
        p("M12 16v4");
        break;
      case "Headphones":
        p("M3 13a9 9 0 0 1 18 0");
        p("M21 13v5a2 2 0 0 1-2 2h-2v-7h4z");
        p("M3 13v5a2 2 0 0 0 2 2h2v-7H3z");
        break;
      case "Wifi":
        p("M5 12.55a11 11 0 0 1 14 0");
        p("M8.5 15.5a6.5 6.5 0 0 1 7 0");
        p("M12 19h.01");
        break;
      case "Shield":
        p("M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z");
        break;
      case "Cloud":
        p("M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A4 4 0 0 0 6 19h11.5z");
        break;
      case "Database":
        p("M4 6c0 1.66 3.58 3 8 3s8-1.34 8-3-3.58-3-8-3-8 1.34-8 3z");
        p("M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6");
        p("M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6");
        break;
      case "Server":
        p("M3 7h18v6H3z");
        p("M3 17h18v4H3z");
        p("M7 10h.01");
        p("M7 20h.01");
        break;
      case "Settings":
        p("M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z");
        p(
          "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.08a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.08a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.03 3.2l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.08a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.39 1.26 1 1.51.18.08.38.12.58.12H21a2 2 0 1 1 0 4h-.08a1.65 1.65 0 0 0-1.51 1Z"
        );
        break;
      default:
        p("M4 12h16");
    }
    return svg;
  };

  // --- data ---
  const services = [
    {
      icon: "Monitor",
      title: "Workstation Management",
      description:
        "Complete desktop and laptop lifecycle management with proactive maintenance and optimization",
      features: [
        "Hardware diagnostics & repair",
        "Performance optimization",
        "Asset lifecycle management",
        "Preventive maintenance",
      ],
      tier: "Essential",
    },
    {
      icon: "Headphones",
      title: "Help Desk Support",
      description:
        "Professional IT support desk with ticketing system and guaranteed response times",
      features: [
        "Multi-channel support",
        "Ticket management system",
        "Remote troubleshooting",
        "User training",
      ],
      tier: "Professional",
    },
    {
      icon: "Wifi",
      title: "Network Infrastructure",
      description:
        "Enterprise-grade network design, implementation, and ongoing management services",
      features: [
        "Network architecture",
        "Security implementation",
        "Performance monitoring",
        "Scalability planning",
      ],
      tier: "Enterprise",
    },
    {
      icon: "Shield",
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security strategy including threat detection, prevention, and incident response",
      features: [
        "Security assessments",
        "Threat monitoring",
        "Incident response",
        "Compliance consulting",
      ],
      tier: "Professional",
    },
    {
      icon: "Cloud",
      title: "Cloud Migration & Management",
      description:
        "Strategic cloud adoption with ongoing management and optimization services",
      features: [
        "Cloud strategy consulting",
        "Migration planning",
        "Cost optimization",
        "Multi-cloud management",
      ],
      tier: "Enterprise",
    },
    {
      icon: "Database",
      title: "Data Backup & Recovery",
      description:
        "Enterprise-grade backup solutions with disaster recovery planning and testing",
      features: [
        "Automated backups",
        "Disaster recovery",
        "Business continuity",
        "Recovery testing",
      ],
      tier: "Essential",
    },
  ];

  const additionalServices = [
    {
      icon: "Server",
      title: "Server Management",
      description:
        "Comprehensive server monitoring, maintenance, and optimization",
    },
    {
      icon: "Settings",
      title: "IT Consulting",
      description:
        "Strategic technology planning and digital transformation consulting",
    },
  ];

  // --- section root + local styles ---
  const section = el(
    "section",
    "py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white"
  );
  section.id = "services";

  // local fluid type + compact rules
  const style = document.createElement("style");
  style.textContent = `
    #services .h-title { font-size: clamp(1.75rem, 3.5vw, 3rem); line-height: 1.1; letter-spacing: -0.015em; }
    #services .h-sub   { font-size: clamp(1rem, 2.1vw, 1.25rem); line-height: 1.6; }

    @media (max-width: 412px) {
      #services .grid-main { gap: 16px; }
      #services .card-pad { padding: 18px; }
      #services .badge { padding: 6px 10px; font-size: 12px; }
    }

    @media (prefers-reduced-motion: no-preference) {
      #services .reveal { opacity: 0; transform: translateY(10px); animation: s-reveal 500ms ease-out both; }
      #services .reveal:nth-child(2) { animation-delay: 80ms; }
      #services .reveal:nth-child(3) { animation-delay: 160ms; }
      @keyframes s-reveal { to { opacity: 1; transform: translateY(0); } }
    }
  `;
  section.appendChild(style);

  const container = el("div", "max-w-7xl mx-auto px-6 sm:px-8");
  section.appendChild(container);

  // header
  const header = el("header", "text-center mb-12 sm:mb-16");
  const badge = el(
    "span",
    "badge inline-block mb-4 px-4 py-2 rounded bg-slate-100 text-slate-700 text-sm font-semibold border"
  );
  badge.textContent = "Our Services";
  const h2 = el(
    "h2",
    "h-title mb-4 font-bold text-slate-900",
    "Comprehensive IT Solutions"
  );
  const p = el(
    "p",
    "h-sub text-slate-600 max-w-3xl mx-auto",
    "From small business support to enterprise infrastructure management, we deliver scalable technology solutions that grow with your business."
  );
  header.append(badge, h2, p);
  container.appendChild(header);

  // main services grid
  const grid = el(
    "div",
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 grid-main"
  );
  services.forEach((svc, idx) => {
    const card = el(
      "article",
      "group transition-all duration-300 border-0 shadow-lg hover:shadow-2xl bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden reveal"
    );
    card.setAttribute("aria-labelledby", `svc-${idx}-title`);

    const cardHeader = el("div", "card-pad p-6 pb-4");
    const topRow = el("div", "flex items-center justify-between mb-4");

    const iconWrap = el(
      "div",
      "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl transition-shadow"
    );
    iconWrap.appendChild(createIcon(svc.icon));

    const tier = el(
      "span",
      "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium text-slate-700"
    );
    tier.textContent = svc.tier;

    topRow.append(iconWrap, tier);

    const title = el("h3", "text-xl mb-2 font-semibold text-slate-900");
    title.id = `svc-${idx}-title`;
    title.textContent = svc.title;

    const desc = el("p", "text-slate-600 leading-relaxed");
    desc.textContent = svc.description;

    cardHeader.append(topRow, title, desc);

    const cardContent = el("div", "px-6 pt-0 pb-6");
    const featuresWrap = el("ul", "space-y-3 mb-6");
    svc.features.forEach((f) => {
      const li = el("li", "flex items-center text-sm text-slate-600");
      const dot = el(
        "span",
        "h-2 w-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 mr-3 flex-shrink-0"
      );
      dot.setAttribute("aria-hidden", "true");
      li.append(dot, document.createTextNode(f));
      featuresWrap.appendChild(li);
    });

    const btn = el(
      "button",
      "w-full border rounded-md px-3 py-3 text-sm font-medium text-slate-800 hover:bg-blue-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors"
    );
    btn.textContent = "Learn More";
    btn.setAttribute("aria-label", `Learn more about ${svc.title}`);

    cardContent.append(featuresWrap, btn);
    card.append(cardHeader, cardContent);
    grid.appendChild(card);
  });
  container.appendChild(grid);

  // additional services
  const addWrap = el("div", "max-w-4xl mx-auto mt-14 sm:mt-16");
  const addTitle = el(
    "h3",
    "text-2xl font-bold text-center mb-6 sm:mb-8 text-slate-900",
    "Additional Services"
  );
  const addGrid = el("div", "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6");

  additionalServices.forEach((svc, i) => {
    const card = el(
      "article",
      "p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow border-0"
    );
    const row = el("div", "flex items-center gap-4");

    const iconBox = el(
      "div",
      "flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100"
    );
    iconBox.appendChild(createIcon(svc.icon, "h-6 w-6 text-slate-600"));

    const col = el("div", "flex-1 min-w-0");
    const t = el("h4", "font-semibold mb-1 text-slate-900", svc.title);
    const d = el("p", "text-sm text-slate-600", svc.description);
    col.append(t, d);

    row.append(iconBox, col);
    card.appendChild(row);
    addGrid.appendChild(card);
  });

  addWrap.append(addTitle, addGrid);
  container.appendChild(addWrap);

  // CTA
  const ctaWrap = el("div", "text-center mt-12 sm:mt-16");
  const cta = el(
    "div",
    "bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white max-w-3xl mx-auto"
  );
  const ctaH = el(
    "h3",
    "text-xl sm:text-2xl font-bold mb-3 sm:mb-4",
    "Need a Custom Solution?"
  );
  const ctaP = el(
    "p",
    "text-blue-100 mb-5 sm:mb-6 leading-relaxed",
    "Our IT consultants will work with you to design a technology strategy that aligns with your business objectives."
  );
  const ctaBtn = el(
    "button",
    "inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold bg-white text-blue-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 transition-colors"
  );
  ctaBtn.textContent = "Schedule Consultation";
  ctaBtn.setAttribute("aria-label", "Schedule a consultation");
  ctaBtn.addEventListener("click", () => {
    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  cta.append(ctaH, ctaP, ctaBtn);
  ctaWrap.appendChild(cta);
  container.appendChild(ctaWrap);

  return section;
}
