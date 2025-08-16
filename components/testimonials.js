// components/testimonials.js — professional, mobile-first, accessible
export function Testimonials() {
  // helpers
  const el = (tag, className = "", text = "") => {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (text) e.textContent = text;
    return e;
  };

  const starIcon = (cls = "h-5 w-5 text-yellow-400") => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", cls);
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML =
      '<path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>';
    return svg;
  };

  const quoteIcon = (cls = "h-8 w-8 text-slate-600") => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", cls);
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML =
      '<path fill="currentColor" d="M7 7h4v4H9.5A2.5 2.5 0 1 1 12 14h-1a4 4 0 0 1-4-4V7zm9 0h4v4h-1.5A2.5 2.5 0 1 1 21 14h-1a4 4 0 0 1-4-4V7z"/>';
    return svg;
  };

  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "CEO",
      company: "GrowthTech Solutions",
      avatar: "SM",
      content:
        "Reboot IT Solutions transformed our business technology infrastructure. Their proactive monitoring prevented three major outages last quarter alone, saving us thousands in potential revenue loss. The team's expertise in cloud migration helped us reduce our IT costs by 40% while improving performance.",
      rating: 5,
      industry: "SaaS",
    },
    {
      name: "Michael Rodriguez",
      title: "Operations Director",
      company: "Precision Manufacturing",
      avatar: "MR",
      content:
        "We've worked with several IT companies over the years, but none compare to Reboot IT Solutions' level of service. Their 24/7 support has been crucial for our manufacturing operations. When our production systems went down on a Saturday, they had us back online within 90 minutes.",
      rating: 5,
      industry: "Manufacturing",
    },
    {
      name: "Jennifer Chen",
      title: "Practice Manager",
      company: "Wellness Medical Group",
      avatar: "JC",
      content:
        "Healthcare IT requires specialized knowledge and compliance expertise. Reboot IT Solutions not only secured our patient data systems but also helped us implement HIPAA-compliant workflows. Their ongoing support has been invaluable for our growing practice.",
      rating: 5,
      industry: "Healthcare",
    },
    {
      name: "David Thompson",
      title: "CFO",
      company: "Regional Bank & Trust",
      avatar: "DT",
      content:
        "Security is paramount in banking, and Reboot IT Solutions delivered beyond our expectations. Their comprehensive security assessment identified vulnerabilities we didn't know existed. The implemented solutions have strengthened our cybersecurity posture significantly.",
      rating: 5,
      industry: "Financial Services",
    },
  ];

  // section root + local styles
  const section = el("section", "bg-slate-900 text-white");
  const style = document.createElement("style");
  style.textContent = `
    /* Fluid type for title/subtitle */
    #testimonials .t-title { font-size: clamp(1.75rem, 3.6vw, 3rem); line-height: 1.1; letter-spacing: -0.015em; }
    #testimonials .t-sub   { font-size: clamp(1rem, 2.1vw, 1.25rem); line-height: 1.6; color: rgb(203 213 225); }

    /* Card animation respecting reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      #testimonials .reveal { opacity: 0; transform: translateY(10px); animation: tfade 550ms ease-out both; }
      #testimonials .reveal:nth-child(2) { animation-delay: 80ms; }
      #testimonials .reveal:nth-child(3) { animation-delay: 160ms; }
      #testimonials .reveal:nth-child(4) { animation-delay: 240ms; }
      @keyframes tfade { to { opacity: 1; transform: translateY(0); } }
    }

    /* S20 Ultra and below: trim gaps/padding, keep tap targets >=44px */
    @media (max-width: 412px) {
      #testimonials .grid-main { gap: 16px; }
      #testimonials .card-pad { padding: 18px; }
      #testimonials .badge { padding: 6px 10px; font-size: 12px; }
    }
  `;
  section.id = "testimonials";
  section.appendChild(style);

  const container = el("div", "max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-24");
  section.appendChild(container);

  // header
  const header = el("header", "text-center mb-12 sm:mb-16");
  const badge = el(
    "span",
    "badge inline-block mb-4 px-4 py-2 rounded bg-slate-800 text-slate-300 border border-slate-700 text-sm font-semibold",
    "Client Success Stories"
  );
  const h2 = el("h2", "t-title font-bold", "Trusted by Industry Leaders");
  const sub = el(
    "p",
    "t-sub max-w-3xl mx-auto mt-3",
    "Don't just take our word for it. Here's what our clients say about our IT solutions and support."
  );
  header.append(badge, h2, sub);
  container.appendChild(header);

  // grid
  const grid = el(
    "div",
    "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto grid-main"
  );
  testimonials.forEach((t, i) => {
    const card = el(
      "article",
      "bg-slate-800/95 border border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow card-pad p-6 sm:p-8 reveal"
    );
    card.setAttribute("aria-labelledby", `t-${i}-name`);
    card.setAttribute("tabindex", "0"); // keyboard focusable

    // rating (with screen-reader label)
    const ratingWrap = el("div", "flex items-center mb-5 sm:mb-6");
    const sr = el("span", "sr-only", `${t.rating} out of 5 stars`);
    ratingWrap.appendChild(sr);
    for (let s = 0; s < t.rating; s++) ratingWrap.appendChild(starIcon());
    card.appendChild(ratingWrap);

    // quote block
    const quoteWrap = el("figure", "relative mb-6 sm:mb-8");
    const q = quoteIcon("absolute -top-1 -left-1 h-8 w-8 text-slate-600");
    quoteWrap.appendChild(q);

    const block = document.createElement("blockquote");
    block.className = "pl-6 text-slate-200/95 leading-relaxed";
    block.textContent = t.content; // no extra quotes to avoid double quoting
    quoteWrap.appendChild(block);

    // figcaption (author)
    const author = el("figcaption", "mt-6");
    const row = el("div", "flex items-center gap-4");
    const avatar = el(
      "div",
      "h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-semibold",
      t.avatar
    );
    avatar.setAttribute("aria-hidden", "true");

    const metaCol = el("div", "flex-1 min-w-0");
    const name = el("div", "font-semibold text-white", t.name);
    name.id = `t-${i}-name`;
    const role = el("div", "text-slate-400", `${t.title}`);
    const company = el("div", "text-slate-400", t.company);
    const topMeta = el("div", "flex items-start justify-between gap-2");

    const industry = el(
      "span",
      "inline-flex items-center rounded-md border border-slate-600 text-slate-300 text-xs px-2 py-1 flex-shrink-0",
      t.industry
    );

    const who = el("div");
    who.append(name, role, company);
    topMeta.append(who, industry);
    metaCol.appendChild(topMeta);

    row.append(avatar, metaCol);
    author.appendChild(row);
    quoteWrap.appendChild(author);
    card.appendChild(quoteWrap);

    grid.appendChild(card);
  });
  container.appendChild(grid);

  // stats
  const statsWrap = el("div", "mt-14 sm:mt-16 max-w-4xl mx-auto");
  const statsGrid = el(
    "div",
    "grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
  );

  const stats = [
    { num: "98%", label: "Client Satisfaction" },
    { num: "4.9", label: "Average Rating" },
    { num: "500+", label: "Projects Completed" },
    { num: "24/7", label: "Support Available" },
  ];

  stats.forEach(({ num, label }) => {
    const item = el("div");
    const n = el(
      "div",
      "text-3xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2",
      num
    );
    const l = el("div", "text-slate-400", label);
    item.append(n, l);
    statsGrid.appendChild(item);
  });

  statsWrap.appendChild(statsGrid);
  container.appendChild(statsWrap);

  // return
  return section;
}
