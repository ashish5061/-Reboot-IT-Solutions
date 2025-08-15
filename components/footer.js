export function Footer() {
  const footer = document.createElement("footer");
  footer.className = "bg-gray-900 text-white";

  const container = document.createElement("div");
  container.className = "container mx-auto px-6 py-12";

  const grid = document.createElement("div");
  grid.className = "grid md:grid-cols-4 gap-8";

  // --- Company Info ---
  const companyDiv = document.createElement("div");
  companyDiv.className = "md:col-span-2";

  const brand = document.createElement("div");
  brand.className = "flex items-center space-x-3 mb-4";

  const brandIcon = document.createElement("div");
  brandIcon.className =
    "flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg"; // solid blue background

  const brandLetter = document.createElement("span");
  brandLetter.className = "font-bold text-white text-xl";
  brandLetter.textContent = "R";
  brandIcon.appendChild(brandLetter);

  const brandTextWrap = document.createElement("div");

  const brandName = document.createElement("div");
  brandName.className = "font-bold text-xl";
  brandName.textContent = "Reboot IT Solutions";

  const brandSub = document.createElement("div");
  brandSub.className = "text-xs text-gray-400";
  brandSub.textContent = "Professional IT Services";

  brandTextWrap.appendChild(brandName);
  brandTextWrap.appendChild(brandSub);

  brand.appendChild(brandIcon);
  brand.appendChild(brandTextWrap);

  const desc1 = document.createElement("p");
  desc1.className = "text-gray-300 mb-4 max-w-md";
  desc1.textContent =
    "Your trusted IT partner specializing in PC repair, troubleshooting, and remote IT help for small businesses. We keep your technology running smoothly.";

  const desc2 = document.createElement("p");
  desc2.className = "text-gray-400 text-sm";
  desc2.textContent =
    "Licensed and insured • Certified technicians • Serving the metro area since 2015";

  companyDiv.appendChild(brand);
  companyDiv.appendChild(desc1);
  companyDiv.appendChild(desc2);

  // --- Quick Links ---
  const quickLinksDiv = document.createElement("div");
  const quickTitle = document.createElement("h4");
  quickTitle.className = "font-semibold mb-4";
  quickTitle.textContent = "Quick Links";
  const quickList = document.createElement("ul");
  quickList.className = "space-y-2 text-gray-300";
  const quickLinks = [
    { text: "Home", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "Booking", href: "#booking" },
    { text: "FAQ", href: "#faq" },
    { text: "Contact", href: "#contact" },
  ];
  quickLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.className = "hover:text-white transition-colors";
    a.textContent = link.text;
    li.appendChild(a);
    quickList.appendChild(li);
  });
  quickLinksDiv.appendChild(quickTitle);
  quickLinksDiv.appendChild(quickList);

  // --- Services ---
  const servicesDiv = document.createElement("div");
  const servicesTitle = document.createElement("h4");
  servicesTitle.className = "font-semibold mb-4";
  servicesTitle.textContent = "Services";
  const servicesList = document.createElement("ul");
  servicesList.className = "space-y-2 text-gray-300";
  const services = [
    "PC Repair",
    "Remote Support",
    "Network Setup",
    "Virus Removal",
    "Maintenance Plans",
  ];
  services.forEach((service) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "hover:text-white transition-colors";
    span.textContent = service;
    li.appendChild(span);
    servicesList.appendChild(li);
  });
  servicesDiv.appendChild(servicesTitle);
  servicesDiv.appendChild(servicesList);

  // Append all sections to grid
  grid.appendChild(companyDiv);
  grid.appendChild(quickLinksDiv);
  grid.appendChild(servicesDiv);

  // --- Footer bottom ---
  const bottom = document.createElement("div");
  bottom.className =
    "flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm mt-8";

  const copyright = document.createElement("p");
  copyright.textContent = "© 2025 Reboot IT Solutions. All rights reserved.";

  const policyDiv = document.createElement("div");
  policyDiv.className = "flex space-x-6 mt-4 md:mt-0";

  const policies = ["Privacy Policy", "Terms of Service", "Support"];
  policies.forEach((text) => {
    const span = document.createElement("span");
    span.className = "hover:text-white transition-colors cursor-pointer";
    span.textContent = text;
    policyDiv.appendChild(span);
  });

  bottom.appendChild(copyright);
  bottom.appendChild(policyDiv);

  // Assemble footer
  container.appendChild(grid);
  container.appendChild(bottom);
  footer.appendChild(container);

  return footer;
}
