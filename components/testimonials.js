// components/testimonials.js
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
    svg.innerHTML =
      '<path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>';
    return svg;
  };

  const quoteIcon = (cls = "h-8 w-8 text-slate-600") => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("class", cls);
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

  // section
  const section = el("section", "py-24 bg-slate-900 text-white");

  const container = el("div", "container mx-auto px-6");
  section.appendChild(container);

  // header
  const header = el("div", "text-center mb-16");
  const badge = el(
    "span",
    "inline-block mb-4 px-4 py-2 rounded bg-slate-800 text-slate-300 border border-slate-700 text-sm font-semibold",
    "Client Success Stories"
  );
  const h2 = el(
    "h2",
    "mb-6 text-4xl md:text-5xl font-bold",
    "Trusted by Industry Leaders"
  );
  const p = el(
    "p",
    "text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed",
    "Don't just take our word for it. Here's what our clients say about our IT solutions and support."
  );
  header.append(badge, h2, p);
  container.appendChild(header);

  // grid
  const grid = el("div", "grid md:grid-cols-2 gap-8 max-w-6xl mx-auto");
  testimonials.forEach((t) => {
    const card = el(
      "div",
      "bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-sm hover:bg-slate-750 transition-colors"
    );

    // rating
    const rating = el("div", "flex items-center mb-6");
    for (let i = 0; i < t.rating; i++) rating.appendChild(starIcon());
    card.appendChild(rating);

    // quote
    const quoteWrap = el("div", "relative mb-8");
    const q = quoteIcon("absolute -top-2 -left-2 h-8 w-8 text-slate-600");
    quoteWrap.appendChild(q);
    const block = el(
      "blockquote",
      "text-slate-300 leading-relaxed pl-6",
      `"${t.content}"`
    );
    quoteWrap.appendChild(block);
    card.appendChild(quoteWrap);

    // author
    const author = el("div", "flex items-center space-x-4");
    const avatar = el(
      "div",
      "h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-semibold",
      t.avatar
    );

    const right = el("div", "flex-1");
    const topRow = el("div", "flex items-center justify-between");

    const who = el("div");
    const name = el("div", "font-semibold text-white", t.name);
    const title = el("div", "text-slate-400", t.title);
    const company = el("div", "text-slate-400", t.company);
    who.append(name, title, company);

    const industry = el(
      "span",
      "inline-flex items-center rounded-md border border-slate-600 text-slate-300 text-xs px-2 py-1",
      t.industry
    );

    topRow.append(who, industry);
    right.appendChild(topRow);

    author.append(avatar, right);
    card.appendChild(author);

    grid.appendChild(card);
  });
  container.appendChild(grid);

  // stats
  const statsWrap = el("div", "mt-20 max-w-4xl mx-auto");
  const statsGrid = el(
    "div",
    "grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
  );

  const stats = [
    { num: "98%", label: "Client Satisfaction" },
    { num: "4.9", label: "Average Rating" },
    { num: "500+", label: "Projects Completed" },
    { num: "24/7", label: "Support Available" },
  ];

  stats.forEach(({ num, label }) => {
    const item = el("div");
    const n = el("div", "text-4xl font-bold text-blue-500 mb-2", num);
    const l = el("div", "text-slate-400", label);
    item.append(n, l);
    statsGrid.appendChild(item);
  });

  statsWrap.appendChild(statsGrid);
  container.appendChild(statsWrap);

  return section;
}
