// components/footer.js — professional, accessible, mobile-first (S20 Ultra tuned)
export function Footer() {
  const el = (tag, cls = "", txt = "") => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  };

  const footer = document.createElement("footer");
  footer.className = "relative bg-gray-900 text-white";
  footer.setAttribute("aria-labelledby", "footer-heading");

  // Local styles (fluid type & S20 Ultra adjustments)
  const style = document.createElement("style");
  style.textContent = `
    #footer .h-brand   { font-size: clamp(1rem, 2.4vw, 1.25rem); }
    #footer .h-title   { font-size: clamp(1rem, 2.2vw, 1.125rem); }
    #footer .t-body    { font-size: clamp(.9375rem, 1.8vw, 1rem); }
    #footer .muted     { color: rgb(203 213 225); }         /* slate-300-ish for contrast */
    #footer .muted-2   { color: rgb(148 163 184); }         /* slate-400-ish */
    #footer a:where(:not(.btn)) { outline: none; }
    #footer a:where(:not(.btn)):focus-visible {
      box-shadow: 0 0 0 2px rgb(59 130 246 / .9), 0 0 0 4px rgb(17 24 39); /* blue ring, gray-900 offset */
      border-radius: .375rem;
    }
    @media (max-width: 412px) {
      #footer .p-wrap { padding-top: 56px; padding-bottom: 56px; }
      #footer .gap-grid { row-gap: 20px; }
      #footer .brand-wrap { gap: .5rem; }
    }
  `;
  footer.id = "footer";
  footer.appendChild(style);

  const container = el("div", "container mx-auto px-6 p-wrap py-12");
  footer.appendChild(container);

  // Grid
  const grid = el("div", "grid grid-cols-1 md:grid-cols-4 gap-8 gap-grid");

  // --- Company Info ---
  const companyDiv = el("section", "md:col-span-2");
  companyDiv.setAttribute("aria-labelledby", "footer-heading");

  const heading = el("h2", "sr-only", "About Reboot IT Solutions");
  heading.id = "footer-heading";
  companyDiv.appendChild(heading);

  const brand = el("div", "flex items-center brand-wrap space-x-3 mb-4");
  const brandLink = el(
    "a",
    "inline-flex items-center gap-3 focus-visible:outline-none"
  );
  brandLink.href = "#home";
  brandLink.setAttribute("aria-label", "Reboot IT Solutions home");

  const brandIcon = el(
    "span",
    "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg"
  );
  const brandLetter = el("span", "font-bold text-white text-xl", "R");
  brandLetter.setAttribute("aria-hidden", "true");
  brandIcon.appendChild(brandLetter);

  const brandTextWrap = el("span");
  const brandName = el(
    "span",
    "h-brand block font-semibold",
    "Reboot IT Solutions"
  );
  const brandSub = el(
    "span",
    "block text-xs muted-2",
    "Professional IT Services"
  );
  brandTextWrap.append(brandName, brandSub);

  brandLink.append(brandIcon, brandTextWrap);
  brand.appendChild(brandLink);

  const desc1 = el(
    "p",
    "t-body muted mb-4 max-w-md",
    "Your trusted IT partner specializing in PC repair, troubleshooting, and remote IT help for small businesses. We keep your technology running smoothly."
  );
  const desc2 = el(
    "p",
    "text-sm muted-2",
    "Licensed and insured • Certified technicians • Serving the metro area since 2015"
  );

  companyDiv.append(brand, desc1, desc2);

  // --- Quick Links (nav) ---
  const quickLinksDiv = el("nav");
  quickLinksDiv.setAttribute("aria-labelledby", "footer-quick");
  const quickTitle = el("h3", "h-title font-semibold mb-4", "Quick Links");
  quickTitle.id = "footer-quick";
  const quickList = el("ul", "space-y-2");
  [
    { text: "Home", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "Booking", href: "#booking" },
    { text: "FAQ", href: "#faq" },
    { text: "Contact", href: "#contact" },
  ].forEach(({ text, href }) => {
    const li = document.createElement("li");
    const a = el("a", "t-body muted hover:text-white transition-colors", text);
    a.href = href;
    li.appendChild(a);
    quickList.appendChild(li);
  });
  quickLinksDiv.append(quickTitle, quickList);

  // --- Services (nav) ---
  const servicesDiv = el("nav");
  servicesDiv.setAttribute("aria-labelledby", "footer-services");
  const servicesTitle = el("h3", "h-title font-semibold mb-4", "Services");
  servicesTitle.id = "footer-services";
  const servicesList = el("ul", "space-y-2");
  [
    "PC Repair",
    "Remote Support",
    "Network Setup",
    "Virus Removal",
    "Maintenance Plans",
  ].forEach((label) => {
    const li = document.createElement("li");
    const a = el("a", "t-body muted hover:text-white transition-colors", label);
    a.href = "#services";
    li.appendChild(a);
    servicesList.appendChild(li);
  });
  servicesDiv.append(servicesTitle, servicesList);

  grid.append(companyDiv, quickLinksDiv, servicesDiv);
  container.appendChild(grid);

  // --- Footer bottom ---
  const bottom = el(
    "div",
    "mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm muted"
  );

  const copyright = el("p");
  const yearSpan = el("span");
  yearSpan.textContent = new Date().getFullYear().toString();
  // “© {year} Reboot IT Solutions. All rights reserved.”
  copyright.append(
    document.createTextNode("© "),
    yearSpan,
    document.createTextNode(" Reboot IT Solutions. All rights reserved.")
  );

  const policyNav = el("nav", "mt-4 md:mt-0");
  policyNav.setAttribute("aria-label", "Legal");
  const policyList = el("ul", "flex items-center gap-6");
  [
    { text: "Privacy Policy", href: "/privacy" },
    { text: "Terms of Service", href: "/terms" },
    { text: "Support", href: "#contact" },
  ].forEach(({ text, href }) => {
    const li = document.createElement("li");
    const a = el("a", "t-body muted hover:text-white transition-colors", text);
    a.href = href;
    li.appendChild(a);
    policyList.appendChild(li);
  });
  policyNav.appendChild(policyList);

  bottom.append(copyright, policyNav);
  container.appendChild(bottom);

  return footer;
}
