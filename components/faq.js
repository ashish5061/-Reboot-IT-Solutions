// components/faq.js
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

  // helper
  const el = (tag, cls = "", txt = "") => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  };

  // root section
  const section = el("section", "py-20 bg-muted/30");
  section.id = "faq";

  const container = el("div", "container mx-auto px-6");
  section.appendChild(container);

  // header
  const header = el("div", "text-center mb-16");
  const h2 = el(
    "h2",
    "mb-4 text-4xl font-bold text-gray-900",
    "Frequently Asked Questions"
  );
  const p = el(
    "p",
    "text-xl text-gray-600 max-w-2xl mx-auto",
    "Find answers to common questions about our IT support services"
  );
  header.append(h2, p);
  container.appendChild(header);

  // accordion wrapper
  const wrap = el("div", "max-w-3xl mx-auto");
  const list = el("div", "w-full space-y-4");
  wrap.appendChild(list);
  container.appendChild(wrap);

  // build items
  const items = [];

  faqs.forEach((faq, idx) => {
    const item = el("div", "bg-white rounded-lg border-0 shadow-sm px-6");

    const trigger = el(
      "button",
      "w-full text-left py-6 flex items-center justify-between hover:no-underline"
    );
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", `faq-content-${idx}`);

    const qWrap = el("span", "font-semibold");
    qWrap.textContent = faq.question;

    // chevron
    const chevron = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    chevron.setAttribute("viewBox", "0 0 24 24");
    chevron.setAttribute("class", "h-5 w-5 text-gray-500 transition-transform");
    chevron.innerHTML =
      '<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />';
    trigger.append(qWrap, chevron);

    const content = el("div", "pb-6 text-gray-600 leading-relaxed hidden");
    content.id = `faq-content-${idx}`;
    content.textContent = faq.answer;

    item.append(trigger, content);
    list.appendChild(item);

    items.push({ trigger, content, chevron });
  });

  // behavior: single + collapsible
  items.forEach(({ trigger, content, chevron }, _, all) => {
    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      // close all
      all.forEach(({ trigger: t, content: c, chevron: ch }) => {
        t.setAttribute("aria-expanded", "false");
        c.classList.add("hidden");
        ch.style.transform = "rotate(0deg)";
      });

      // toggle this
      if (!isOpen) {
        trigger.setAttribute("aria-expanded", "true");
        content.classList.remove("hidden");
        chevron.style.transform = "rotate(180deg)";
      }
    });
  });

  return section;
}
