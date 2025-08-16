// components/faq.js — professional, accessible, mobile-first (S20 Ultra tuned)
export function FAQ() {
  const faqs = [
    {
      question: "What types of computer problems do you fix?",
      answer:
        "We handle a wide range of issues including slow performance, virus infections, hardware failures, software problems, network connectivity issues, data recovery, and system crashes. Our technicians are experienced with both Windows and Mac systems.",
    },
    {
      question: "Do you offer remote support?",
      answer:
        "Yes! Our remote support service allows us to access your computer securely over the internet to diagnose and fix many software-related issues. This is often faster and more convenient than on-site visits. We use enterprise-grade security protocols to ensure your data remains safe.",
    },
    {
      question: "How quickly can you respond to an emergency?",
      answer:
        "For critical business issues, we offer same-day emergency support. Our typical response time is within 2-4 hours for urgent matters. For non-emergency issues, we usually schedule appointments within 24-48 hours.",
    },
    {
      question: "What are your service rates?",
      answer:
        "Our rates vary depending on the type of service needed. Remote support starts at $75/hour, on-site visits begin at $125/hour, and we offer fixed-price packages for common services like virus removal ($150) and system optimization ($100). We always provide upfront estimates before starting work.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Absolutely! We specialize in supporting small businesses and understand the unique challenges you face. We offer ongoing maintenance plans, network setup and management, cloud migration services, and can serve as your outsourced IT department.",
    },
    {
      question: "What if my computer can't be fixed?",
      answer:
        "If we determine that repair costs would exceed the value of your computer, we'll recommend replacement options and can help you transfer your data to a new system. We also offer data recovery services to save your important files.",
    },
    {
      question: "Do you provide warranties on your work?",
      answer:
        "Yes, we provide a 30-day warranty on all labor and a full manufacturer's warranty on any parts we install. If the same issue occurs within 30 days, we'll fix it at no additional charge.",
    },
    {
      question: "Can you help set up a home office?",
      answer:
        "Definitely! We can help set up your entire home office including computer configuration, printer setup, WiFi optimization, cloud storage setup, security software installation, and ensuring all your devices work together seamlessly.",
    },
  ];

  // helpers
  const el = (tag, cls = "", txt = "") => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  };

  // root section + local styles
  const section = el("section", "bg-muted/30");
  section.id = "faq";

  const style = document.createElement("style");
  style.textContent = `
    /* Fluid type & spacing */
    #faq .h-title { font-size: clamp(1.75rem, 3.6vw, 3rem); line-height: 1.1; letter-spacing: -0.015em; }
    #faq .h-sub   { font-size: clamp(1rem, 2.1vw, 1.25rem); line-height: 1.6; color: rgb(75 85 99); }

    /* Accordion animation via CSS grid (no measurement/layout thrash) */
    #faq .acc-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 220ms ease, opacity 220ms ease; opacity: 0.9; }
    #faq .acc-panel[aria-hidden="false"] { grid-template-rows: 1fr; opacity: 1; }
    #faq .acc-inner { overflow: hidden; }

    /* Chevron rotation */
    #faq .chev { transition: transform 220ms ease; }
    #faq .chev.open { transform: rotate(180deg); }

    /* Triggers */
    #faq .acc-trigger { min-height: 44px; } /* finger-friendly */
    #faq .acc-trigger:focus-visible { outline: 2px solid rgb(37 99 235); outline-offset: 2px; border-radius: .5rem; }

    /* Card look */
    #faq .acc-item { background: #fff; border-radius: .75rem; box-shadow: 0 1px 2px rgba(0,0,0,.05); }

    /* S20 Ultra and below */
    @media (max-width: 412px) {
      #faq .p-section { padding-top: 64px; padding-bottom: 64px; }
      #faq .gap-stack { row-gap: 12px; }
      #faq .acc-pad-h { padding-left: 1rem; padding-right: 1rem; }
    }
  `;
  section.appendChild(style);

  const container = el(
    "div",
    "container mx-auto px-6 p-section py-20 sm:py-24"
  );
  section.appendChild(container);

  // header
  const header = el("header", "text-center mb-12 sm:mb-16");
  const h2 = el(
    "h2",
    "h-title font-bold text-gray-900",
    "Frequently Asked Questions"
  );
  const sub = el(
    "p",
    "h-sub max-w-2xl mx-auto mt-3",
    "Find answers to common questions about our IT support services"
  );
  header.append(h2, sub);
  container.appendChild(header);

  // accordion wrapper
  const wrap = el("div", "max-w-3xl mx-auto");
  const list = el("div", "w-full space-y-4 gap-stack");
  wrap.appendChild(list);
  container.appendChild(wrap);

  // build items
  const triggers = [];
  faqs.forEach((faq, idx) => {
    const item = el("article", "acc-item border-0 px-6 acc-pad-h");
    const headingId = `faq-q-${idx}`;
    const panelId = `faq-panel-${idx}`;

    // button (trigger)
    const trigger = el(
      "button",
      "acc-trigger w-full text-left py-6 flex items-center justify-between"
    );
    trigger.type = "button";
    trigger.id = headingId;
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", panelId);

    const qText = el("span", "font-semibold text-gray-900");
    qText.textContent = faq.question;

    // chevron
    const chev = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chev.setAttribute("viewBox", "0 0 24 24");
    chev.setAttribute("class", "chev h-5 w-5 text-gray-500");
    chev.setAttribute("aria-hidden", "true");
    chev.innerHTML =
      '<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />';

    trigger.append(qText, chev);

    // panel (content)
    const panel = el("div", "acc-panel");
    panel.id = panelId;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", headingId);
    panel.setAttribute("aria-hidden", "true");

    const inner = el("div", "acc-inner");
    const content = el("div", "pb-6 text-gray-600 leading-relaxed");
    content.textContent = faq.answer;
    inner.appendChild(content);
    panel.appendChild(inner);

    // assemble
    item.append(trigger, panel);
    list.appendChild(item);

    triggers.push({ trigger, panel, chev });
  });

  // behavior: single-open accordion + keyboard nav
  const setOpen = (idx, open) => {
    const { trigger, panel, chev } = triggers[idx];
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    chev.classList.toggle("open", open);
  };

  const closeAll = () => triggers.forEach((_, i) => setOpen(i, false));

  // Click handling (event delegation)
  list.addEventListener("click", (e) => {
    const btn = e.target.closest("button.acc-trigger");
    if (!btn) return;
    const i = triggers.findIndex((t) => t.trigger === btn);
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    closeAll();
    if (!isOpen) setOpen(i, true);
  });

  // Keyboard handling on triggers: ↑ ↓ Home End + Enter/Space
  list.addEventListener("keydown", (e) => {
    const currentIndex = triggers.findIndex(
      (t) => t.trigger === document.activeElement
    );
    if (currentIndex === -1) return;

    const focusTrigger = (i) => triggers[i]?.trigger.focus();
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusTrigger((currentIndex + 1) % triggers.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusTrigger((currentIndex - 1 + triggers.length) % triggers.length);
        break;
      case "Home":
        e.preventDefault();
        focusTrigger(0);
        break;
      case "End":
        e.preventDefault();
        focusTrigger(triggers.length - 1);
        break;
      case " ":
      case "Enter":
        e.preventDefault();
        const isOpen =
          triggers[currentIndex].trigger.getAttribute("aria-expanded") ===
          "true";
        closeAll();
        if (!isOpen) setOpen(currentIndex, true);
        break;
    }
  });

  // Open a panel if URL hash matches (#faq-q-3 etc.)
  const openFromHash = () => {
    const id = location.hash.slice(1);
    if (!id) return;
    const idx = triggers.findIndex((t) => t.trigger.id === id);
    if (idx >= 0) {
      closeAll();
      setOpen(idx, true);
      // scroll it into view politely
      triggers[idx].trigger.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      triggers[idx].trigger.focus();
    }
  };
  window.addEventListener("hashchange", openFromHash);
  openFromHash();

  // Optionally: open the first item by default (comment in if desired)
  // setOpen(0, true);

  return section;
}
