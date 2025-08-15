export function hero() {
  // Create section
  const heroSection = document.createElement("section");
  heroSection.id = "home";
  heroSection.className =
    "relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-white";

  // Background pattern
  const bgPattern = document.createElement("div");
  bgPattern.className = "absolute inset-0 bg-grid-slate-100";
  bgPattern.style.maskImage =
    "linear-gradient(0deg,#fff,rgba(255,255,255,0.6))";
  heroSection.appendChild(bgPattern);

  // Container
  const container = document.createElement("div");
  container.className =
    "container mx-auto px-6 py-20 text-center relative z-10";
  heroSection.appendChild(container);

  const wrapper = document.createElement("div");
  wrapper.className = "max-w-5xl mx-auto";
  container.appendChild(wrapper);

  // --- Title ---
  const title = document.createElement("h1");
  title.className =
    "mb-6 text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight";
  title.innerHTML = `Your Trusted <span class="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">IT Partner</span>`;
  wrapper.appendChild(title);

  // --- Paragraph ---
  const paragraph = document.createElement("p");
  paragraph.className =
    "mb-8 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed";
  paragraph.textContent =
    "Enterprise-grade IT support and solutions for small to medium businesses. We deliver reliable technology services that drive your business forward.";
  wrapper.appendChild(paragraph);

  // --- Buttons ---
  const buttonWrapper = document.createElement("div");
  buttonWrapper.className =
    "flex flex-col sm:flex-row gap-4 justify-center mb-16";
  wrapper.appendChild(buttonWrapper);

  const btn1 = document.createElement("button");
  btn1.className =
    "px-8 py-4 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition";
  btn1.textContent = "Schedule Consultation";
  btn1.addEventListener("click", () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  });
  buttonWrapper.appendChild(btn1);

  const btn2 = document.createElement("button");
  btn2.className =
    "px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition";
  btn2.textContent = "View Our Services";
  buttonWrapper.appendChild(btn2);

  // --- Stats Grid ---
  const statsGrid = document.createElement("div");
  statsGrid.className =
    "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto";
  wrapper.appendChild(statsGrid);

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "<2h", label: "Response Time" },
    { number: "10+", label: "Years Experience" },
  ];

  stats.forEach((stat) => {
    const statDiv = document.createElement("div");
    statDiv.className = "text-center";
    const num = document.createElement("div");
    num.className = "text-3xl md:text-4xl font-bold text-primary mb-2";
    num.textContent = stat.number;
    const lbl = document.createElement("div");
    lbl.className = "text-slate-600";
    lbl.textContent = stat.label;
    statDiv.appendChild(num);
    statDiv.appendChild(lbl);
    statsGrid.appendChild(statDiv);
  });

  return heroSection;
}
