// components/contact.js — professional, accessible, mobile-first (S20 Ultra tuned)
export function Contact() {
  // ---------- helpers ----------
  const el = (tag, cls = "", txt = "") => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  };

  const icon = (name, cls = "h-5 w-5") => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("class", cls);
    svg.setAttribute("aria-hidden", "true");

    const P = (d) => {
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", d);
      svg.appendChild(p);
    };

    switch (name) {
      case "Phone":
        P(
          "M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z"
        );
        break;
      case "Mail":
        P("M4 4h16v16H4z");
        P("M22 6 12 13 2 6");
        break;
      case "MapPin":
        P("M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z");
        P("M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z");
        break;
      case "Clock":
        P("M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18");
        P("M12 7v5l3 3");
        break;
      default:
        P("M4 12h16");
    }
    return svg;
  };

  // Inline error helpers
  const err = (id) => {
    const p = el("p", "mt-1 text-sm text-red-600 hidden");
    p.id = id;
    return p;
  };
  const setInvalid = (input, msgEl, msg) => {
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", msgEl.id);
    msgEl.textContent = msg;
    msgEl.classList.remove("hidden");
    input.classList.add("border-red-500", "ring-1", "ring-red-500");
  };
  const clearInvalid = (input, msgEl) => {
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
    msgEl.textContent = "";
    msgEl.classList.add("hidden");
    input.classList.remove("border-red-500", "ring-1", "ring-red-500");
  };

  // ---------- state ----------
  const formData = { name: "", email: "", subject: "", message: "" };

  // ---------- section + local styles ----------
  const section = el("section", "bg-white");
  section.id = "contact";

  const style = document.createElement("style");
  style.textContent = `
    #contact .h-title { font-size: clamp(1.75rem, 3.6vw, 3rem); line-height: 1.1; letter-spacing: -0.015em; }
    #contact .h-sub   { font-size: clamp(1rem, 2.1vw, 1.25rem); line-height: 1.6; color: rgb(75 85 99); }
    #contact .focus-ring:focus-visible { outline: 2px solid rgb(37 99 235); outline-offset: 2px; border-radius: .5rem; }
    #contact .btn     { min-height: 44px; }
    @media (max-width: 412px) {
      #contact .p-section { padding-top: 64px; padding-bottom: 64px; }
      #contact .gap-grid  { gap: 18px; }
      #contact .p-card    { padding: 18px; }
    }
  `;
  section.appendChild(style);

  const container = el(
    "div",
    "container mx-auto px-6 p-section py-20 sm:py-24"
  );
  section.appendChild(container);

  // ---------- Header ----------
  const header = el("header", "text-center mb-12 sm:mb-16");
  header.append(
    el("h2", "h-title font-bold text-gray-900", "Get In Touch"),
    el(
      "p",
      "h-sub max-w-2xl mx-auto mt-3",
      "Ready to solve your IT problems? Contact us today for a free consultation."
    )
  );
  container.appendChild(header);

  const wrap = el("div", "max-w-6xl mx-auto");
  const grid = el(
    "div",
    "grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 gap-grid"
  );
  wrap.appendChild(grid);
  container.appendChild(wrap);

  // ---------- Left: Contact Information ----------
  const infoCol = el("div", "space-y-8");

  const block = (iconName, title, renderLines, accent = false) => {
    const row = el("div", "flex items-start gap-4");
    const bubble = accent ? "bg-green-100" : "bg-blue-100";
    const color = accent ? "text-green-600" : "text-blue-600";

    const ico = el(
      "div",
      `flex h-10 w-10 items-center justify-center rounded-full ${bubble}`
    );
    ico.appendChild(icon(iconName, `h-5 w-5 ${color}`));

    const col = el("div");
    const h = el("h4", "font-semibold mb-1", title);
    col.appendChild(h);
    renderLines(col); // caller appends its own lines (allows links)
    row.append(ico, col);
    return row;
  };

  infoCol.append(el("h3", "text-2xl font-bold mb-2", "Contact Information"));

  // Phone (clickable)
  infoCol.append(
    block("Phone", "Phone", (col) => {
      const phone = el("p");
      const a = document.createElement("a");
      a.href = "tel:+15551234567";
      a.className = "text-gray-700 hover:underline focus-ring";
      a.textContent = "(555) 123-4567";
      a.setAttribute("aria-label", "Call (555) 123-4567");
      phone.appendChild(a);
      col.append(
        phone,
        el("p", "text-gray-600", "Available 24/7 for emergencies")
      );
    })
  );

  // Email (clickable)
  infoCol.append(
    block("Mail", "Email", (col) => {
      const p = el("p");
      const a = document.createElement("a");
      a.href = "mailto:support@rebootitsolutions.com";
      a.className = "text-gray-700 hover:underline focus-ring";
      a.textContent = "support@rebootitsolutions.com";
      a.setAttribute(
        "aria-label",
        "Email support at reboot it solutions dot com"
      );
      p.appendChild(a);
      col.append(p, el("p", "text-gray-600", "We respond within 4 hours"));
    })
  );

  // Office (address)
  infoCol.append(
    block("MapPin", "Office", (col) => {
      const addr = el("p", "text-gray-600");
      addr.innerHTML = "123 Tech Street<br/>Downtown, ST 12345";
      const note = el(
        "p",
        "text-sm text-gray-500",
        "Serving the entire metro area"
      );
      col.append(addr, note);
    })
  );

  // Hours
  infoCol.append(
    block(
      "Clock",
      "Business Hours",
      (col) => {
        col.append(
          el("p", "text-gray-600", "Monday - Friday: 8:00 AM - 6:00 PM"),
          el("p", "text-gray-600", "Saturday: 9:00 AM - 4:00 PM"),
          el("p", "text-gray-600", "Sunday: Emergency calls only")
        );
      },
      true
    )
  );

  // Service Area Card (placeholder map)
  const areaCard = el("section", "rounded-2xl bg-white border-0 shadow-sm");
  const areaHeader = el("div", "p-6 pb-0");
  areaHeader.append(el("h4", "font-semibold text-lg", "Service Area"));
  const areaBody = el("div", "p-6 pt-4");
  const areaBox = el(
    "div",
    "h-48 bg-gray-100 rounded-lg flex items-center justify-center"
  );
  areaBox.setAttribute("role", "img");
  areaBox.setAttribute("aria-label", "Service area map placeholder");
  const areaInner = el("div", "text-center");
  const pinIcon = icon("MapPin", "h-12 w-12 text-gray-400 mx-auto mb-2");
  areaInner.append(
    pinIcon,
    el("p", "text-gray-500", "Service area map"),
    el(
      "p",
      "text-sm text-gray-400",
      "We serve a 50-mile radius from our office"
    )
  );
  areaBox.appendChild(areaInner);
  areaBody.appendChild(areaBox);
  areaCard.append(areaHeader, areaBody);
  infoCol.appendChild(areaCard);

  grid.appendChild(infoCol);

  // ---------- Right: Contact Form ----------
  const formCard = el("section", "rounded-2xl bg-white shadow-lg border-0");
  const formHeader = el("div", "p-6 pb-0");
  formHeader.append(el("h3", "text-lg font-semibold", "Send us a Message"));
  const formBody = el("div", "p-6");

  const form = el("form", "space-y-6");
  form.setAttribute("novalidate", "true");

  // Live region for status
  const formAlert = el("div", "hidden mb-4 rounded-md p-4");
  formAlert.id = "contact-status";
  formAlert.setAttribute("role", "status");
  formAlert.setAttribute("aria-live", "polite");
  formBody.appendChild(formAlert);

  // Field builder
  const field = (id, label, attrs = {}, as = "input") => {
    const wrap = el("div", "space-y-1");
    const lab = el("label", "text-sm font-medium text-gray-700", label);
    lab.setAttribute("for", id);
    const input =
      as === "textarea"
        ? document.createElement("textarea")
        : document.createElement("input");
    input.id = id;
    input.className =
      "w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600";
    if (as === "textarea") input.rows = attrs.rows || 6;
    Object.entries(attrs).forEach(([k, v]) =>
      v === "" ? input.setAttribute(k, "") : input.setAttribute(k, v)
    );
    const msg = err(`${id}-error`);
    wrap.append(lab, input, msg);
    return { wrap, input, msg };
  };

  // Name & Email
  const grid2 = el("div", "grid grid-cols-1 sm:grid-cols-2 gap-4");
  const fName = field("name", "Name *", {
    placeholder: "Jane Smith",
    required: "",
    autocomplete: "name",
  });
  const fEmail = field("email", "Email *", {
    type: "email",
    placeholder: "jane@company.com",
    required: "",
    autocomplete: "email",
    inputmode: "email",
  });
  grid2.append(fName.wrap, fEmail.wrap);

  // Subject
  const fSubject = field("subject", "Subject *", {
    placeholder: "Brief description of your inquiry",
    required: "",
    autocomplete: "off",
  });

  // Message
  const fMessage = field(
    "message",
    "Message *",
    { rows: 6, placeholder: "Tell us about your IT needs or questions..." },
    "textarea"
  );

  // Submit
  const submit = el(
    "button",
    "btn w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
    "Send Message"
  );
  submit.type = "submit";

  // Assemble
  form.append(grid2, fSubject.wrap, fMessage.wrap, submit);
  formBody.appendChild(form);
  formCard.append(formHeader, formBody);
  grid.appendChild(formCard);

  // ---------- Model state sync ----------
  const bind = (f, key) =>
    f.input.addEventListener("input", (e) => (formData[key] = e.target.value));
  bind(fName, "name");
  bind(fEmail, "email");
  bind(fSubject, "subject");
  bind(fMessage, "message");

  // ---------- Validation ----------
  const validate = () => {
    let ok = true;
    let first = null;

    if (!fName.input.value.trim()) {
      setInvalid(fName.input, fName.msg, "Please enter your name.");
      ok = false;
      first = first || fName.input;
    } else clearInvalid(fName.input, fName.msg);

    const emailVal = fEmail.input.value.trim();
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setInvalid(
        fEmail.input,
        fEmail.msg,
        "Please enter a valid email address."
      );
      ok = false;
      first = first || fEmail.input;
    } else clearInvalid(fEmail.input, fEmail.msg);

    if (!fSubject.input.value.trim()) {
      setInvalid(fSubject.input, fSubject.msg, "Please enter a subject.");
      ok = false;
      first = first || fSubject.input;
    } else clearInvalid(fSubject.input, fSubject.msg);

    if (!fMessage.input.value.trim()) {
      setInvalid(fMessage.input, fMessage.msg, "Please enter a message.");
      ok = false;
      first = first || fMessage.input;
    } else clearInvalid(fMessage.input, fMessage.msg);

    return { ok, first };
  };

  // ---------- Submit handler ----------
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { ok, first } = validate();
    if (!ok) {
      formAlert.className = "mb-4 rounded-md p-4 bg-red-50 text-red-700";
      formAlert.textContent =
        "Please fix the highlighted fields and try again.";
      (first || form).focus();
      return;
    }

    const payload = { ...formData };
    console.log("Contact form submitted:", payload);
    // Example: send to your API
    // fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })

    formAlert.className = "mb-4 rounded-md p-4 bg-green-50 text-green-800";
    formAlert.textContent =
      "Message sent! We'll get back to you within 24 hours.";

    form.reset();
    Object.keys(formData).forEach((k) => (formData[k] = ""));
    fName.input.focus();
  });

  return section;
}
