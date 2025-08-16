// components/booking.js — professional, mobile-first, a11y, S20 Ultra tuned
export function Booking() {
  // ----- Data -----
  const serviceTiers = [
    {
      id: "essential",
      name: "Essential Support",
      price: "$125/hour",
      description: "Standard IT support and troubleshooting",
      features: [
        "Remote & on-site support",
        "Standard response time",
        "Business hours coverage",
      ],
      icon: "User",
    },
    {
      id: "professional",
      name: "Professional Plan",
      price: "$200/hour",
      description: "Priority support with faster response times",
      features: [
        "Priority support queue",
        "2-hour response time",
        "Extended hours coverage",
      ],
      icon: "Clock",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise Solution",
      price: "Custom pricing",
      description: "Dedicated support with SLA guarantees",
      features: [
        "Dedicated account manager",
        "1-hour response time",
        "24/7 emergency support",
      ],
      icon: "Building",
    },
  ];

  // ----- Helpers -----
  const el = (tag, cls = "", txt = "") => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt) e.textContent = txt;
    return e;
  };

  const icon = (name, cls = "h-7 w-7 text-white") => {
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
      case "User":
        P("M20 21a8 8 0 1 0-16 0");
        P("M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8");
        break;
      case "Clock":
        P("M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20");
        P("M12 6v6l4 2");
        break;
      case "Building":
        P("M3 22h18");
        P("M6 22V4h12v18");
        P("M9 8h2");
        P("M13 8h2");
        P("M9 12h2");
        P("M13 12h2");
        P("M9 16h2");
        P("M13 16h2");
        break;
      case "Calendar":
        P("M3 7h18v14H3z");
        P("M16 3v4");
        P("M8 3v4");
        P("M3 11h18");
        break;
      case "Shield":
        P("M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10");
        break;
      case "Zap":
        P("M13 2L3 14h7l-1 8 10-12h-7l1-8z");
        break;
      case "Phone":
        P(
          "M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L9 10.7a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z"
        );
        break;
      default:
        P("M4 12h16");
    }
    return svg;
  };

  // Validation helpers
  const err = (id) => {
    const s = el("p", "mt-1 text-sm text-red-600 hidden");
    s.id = id;
    return s;
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

  // ----- State -----
  let selectedTier = "professional";
  const formData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    service: "",
    priority: "normal",
    date: "",
    time: "",
    message: "",
  };

  // ----- Section root + local style -----
  const section = el("section", "bg-gradient-to-b from-white to-slate-50");
  section.id = "booking";

  const style = document.createElement("style");
  style.textContent = `
    #booking .h-title { font-size: clamp(1.75rem, 3.5vw, 3rem); line-height: 1.1; letter-spacing: -0.015em; }
    #booking .h-sub   { font-size: clamp(1rem, 2.1vw, 1.25rem); line-height: 1.6; }
    #booking .card-focus { outline: none; }
    #booking .card-focus:focus-visible { box-shadow: 0 0 0 3px rgba(37,99,235,.6); border-color: rgb(37,99,235); }

    @media (max-width: 412px) {
      #booking .grid-tiers { gap: 14px; }
      #booking .grid-two  { gap: 18px; }
      #booking .p-card    { padding: 18px; }
      #booking .btn-lg    { padding-top: 16px; padding-bottom: 16px; }
    }
  `;
  section.appendChild(style);

  const container = el("div", "container mx-auto px-6 py-20 sm:py-24");
  section.appendChild(container);

  // Header
  const header = el("header", "text-center mb-12 sm:mb-16");
  const badge = el(
    "span",
    "inline-block mb-4 px-4 py-2 rounded bg-slate-100 text-slate-700 border text-sm font-semibold",
    "Get Started Today"
  );
  const h2 = el(
    "h2",
    "h-title font-bold text-slate-900",
    "Schedule Your IT Consultation"
  );
  const sub = el(
    "p",
    "h-sub text-slate-600 max-w-3xl mx-auto mt-3",
    "Get expert IT guidance tailored to your business needs. Our certified consultants will assess your current infrastructure and recommend optimal solutions."
  );
  header.append(badge, h2, sub);
  container.appendChild(header);

  // ----- Tiers: accessible radio group -----
  const tiersWrap = el("section", "max-w-7xl mx-auto mb-10 sm:mb-12");
  const fs = el("fieldset", "border-0");
  const lgd = el(
    "legend",
    "text-2xl font-bold text-center mb-6 text-slate-900",
    "Choose Your Service Level"
  );
  fs.appendChild(lgd);

  const tiersGrid = el(
    "div",
    "grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 grid-tiers"
  );
  const tierCards = {};
  const radioName = "service-tier";

  serviceTiers.forEach((t, idx) => {
    const card = el(
      "article",
      "cursor-pointer transition-all duration-200 rounded-2xl bg-white border shadow-sm hover:shadow-md p-card card-focus"
    );
    card.tabIndex = 0;
    card.setAttribute("role", "radio");
    card.setAttribute("aria-checked", selectedTier === t.id ? "true" : "false");
    card.setAttribute("aria-labelledby", `tier-${t.id}-title`);
    card.setAttribute("aria-describedby", `tier-${t.id}-desc`);

    const setActive = (active) => {
      card.className =
        "cursor-pointer transition-all duration-200 rounded-2xl bg-white " +
        (active
          ? "ring-2 ring-blue-600 shadow-lg p-card"
          : "border hover:shadow-md p-card");
      card.setAttribute("aria-checked", active ? "true" : "false");
    };

    const header = el("div", "p-6 pb-4 text-center");
    if (t.popular) {
      const popular = el(
        "span",
        "inline-block mb-3 px-3 py-1 text-xs rounded bg-blue-600 text-white",
        "Most Popular"
      );
      header.appendChild(popular);
    }
    const iconWrap = el(
      "div",
      "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-4"
    );
    iconWrap.appendChild(icon(t.icon));

    const title = el("h3", "text-xl font-semibold", t.name);
    title.id = `tier-${t.id}-title`;
    const price = el("div", "text-2xl font-bold text-blue-600 mb-2", t.price);
    const desc = el("p", "text-slate-600 text-sm", t.description);
    desc.id = `tier-${t.id}-desc`;
    header.append(iconWrap, title, price, desc);

    const content = el("div", "px-6 pb-6 pt-0");
    const list = el("ul", "space-y-2");
    t.features.forEach((f) => {
      const li = el("li", "flex items-center text-sm text-slate-600");
      const dot = el(
        "span",
        "h-1.5 w-1.5 rounded-full bg-green-500 mr-3 flex-shrink-0"
      );
      dot.setAttribute("aria-hidden", "true");
      li.append(dot, document.createTextNode(f));
      list.appendChild(li);
    });
    content.appendChild(list);

    // Visually hidden native radio for form semantics
    const radio = el("input");
    radio.type = "radio";
    radio.name = radioName;
    radio.value = t.id;
    radio.className = "sr-only";
    if (t.id === selectedTier) radio.checked = true;

    const selectThis = () => {
      selectedTier = t.id;
      Object.values(tierCards).forEach((fn) => fn(false));
      setActive(true);
      radio.checked = true;
    };

    card.addEventListener("click", selectThis);
    card.addEventListener("keydown", (e) => {
      // Space/Enter select; Arrow keys move focus
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        selectThis();
      } else if (
        ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(e.key)
      ) {
        e.preventDefault();
        const cards = Array.from(tiersGrid.querySelectorAll("[role='radio']"));
        const i = cards.indexOf(card);
        const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
        const next = (i + dir + cards.length) % cards.length;
        cards[next].focus();
      }
    });

    tierCards[t.id] = setActive;
    setActive(t.id === selectedTier);

    card.append(header, content, radio);
    tiersGrid.appendChild(card);
  });

  fs.appendChild(tiersGrid);
  tiersWrap.appendChild(fs);
  container.appendChild(tiersWrap);

  // ----- Two-column area -----
  const twoCol = el(
    "div",
    "grid lg:grid-cols-2 gap-10 sm:gap-12 items-start grid-two"
  );
  container.appendChild(twoCol);

  // Left: highlights
  const highlights = el("div", "space-y-8");
  const highlight = (icn, title, text, tone = "primary") => {
    const row = el("div", "flex items-start gap-4");
    const bg = tone === "accent" ? "bg-green-100" : "bg-blue-100";
    const color = tone === "accent" ? "text-green-600" : "text-blue-600";

    const ic = el(
      "div",
      `flex h-12 w-12 items-center justify-center rounded-xl ${bg}`
    );
    ic.appendChild(icon(icn, `h-6 w-6 ${color}`));

    const col = el("div");
    col.append(
      el("h3", "font-semibold mb-2 text-lg", title),
      el("p", "text-slate-600 leading-relaxed", text)
    );

    row.append(ic, col);
    return row;
  };

  highlights.append(
    highlight(
      "Calendar",
      "Comprehensive Assessment",
      "Our certified consultants will evaluate your current IT infrastructure, identify pain points, and provide actionable recommendations."
    ),
    highlight(
      "Shield",
      "Security Review",
      "Complimentary security assessment to identify vulnerabilities and ensure your business data is protected against cyber threats.",
      "accent"
    ),
    highlight(
      "Zap",
      "Custom Solution Design",
      "Receive a tailored IT roadmap with specific recommendations, timeline, and budget estimates for your business objectives."
    )
  );

  const guarantee = el(
    "div",
    "rounded-2xl p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-0"
  );
  const gRow = el("div", "flex items-center gap-3");
  const gIcon = el("div", "h-6 w-6");
  gIcon.appendChild(icon("Phone", "h-6 w-6 text-blue-600"));
  const gCol = el("div");
  gCol.append(
    el("h4", "font-semibold text-slate-900", "Guaranteed Response"),
    el(
      "p",
      "text-slate-600 text-sm",
      "We'll contact you within 2 business hours to confirm your consultation"
    )
  );
  gRow.append(gIcon, gCol);
  guarantee.appendChild(gRow);
  highlights.appendChild(guarantee);

  twoCol.appendChild(highlights);

  // ----- Right: form -----
  const formCard = el("div", "shadow-xl border-0 bg-white rounded-2xl");
  const formHeader = el("div", "p-6 pb-0");
  formHeader.append(
    el("div", "text-2xl font-semibold mb-1", "Request Your Consultation"),
    el(
      "p",
      "text-slate-600",
      "Fill out this form and we'll schedule your personalized IT assessment"
    )
  );
  const formBody = el("div", "p-6");

  const form = el("form", "space-y-6");
  form.setAttribute("novalidate", "true");

  // Live region for success/error summary
  const formAlert = el("div", "hidden mb-4 rounded-md p-4");
  formAlert.id = "booking-status";
  formAlert.setAttribute("role", "status");
  formAlert.setAttribute("aria-live", "polite");
  formBody.appendChild(formAlert);

  const grid2 = el("div", "grid grid-cols-1 sm:grid-cols-2 gap-4");

  const field = (id, label, attrs = {}, type = "input") => {
    const wrap = el("div", "space-y-1");
    const lab = el("label", "text-sm font-medium text-slate-700", label);
    lab.setAttribute("for", id);
    const input =
      type === "textarea"
        ? document.createElement("textarea")
        : document.createElement("input");
    input.className =
      "w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600";
    input.id = id;
    if (type === "textarea") input.rows = attrs.rows || 4;
    Object.entries(attrs).forEach(([k, v]) => {
      if (v === "") input.setAttribute(k, "");
      else input.setAttribute(k, v);
    });
    const msg = err(`${id}-error`);
    wrap.append(lab, input, msg);
    return { wrap, input, msg };
  };

  const fName = field("name", "Full Name *", {
    placeholder: "John Smith",
    required: "",
    autocomplete: "name",
  });
  const fEmail = field("email", "Business Email *", {
    type: "email",
    placeholder: "john@company.com",
    required: "",
    autocomplete: "email",
    inputmode: "email",
  });
  grid2.append(fName.wrap, fEmail.wrap);

  const grid2b = el("div", "grid grid-cols-1 sm:grid-cols-2 gap-4");
  const fPhone = field("phone", "Phone Number *", {
    type: "tel",
    placeholder: "(555) 123-4567",
    required: "",
    autocomplete: "tel",
    inputmode: "tel",
    pattern: "^[0-9()+\\-\\s]{7,}$",
  });
  const fCompany = field("company", "Company Name *", {
    placeholder: "Your Company Inc.",
    required: "",
    autocomplete: "organization",
  });
  grid2b.append(fPhone.wrap, fCompany.wrap);

  // Select: Company Size
  const sizeWrap = el("div", "space-y-1");
  const sizeLab = el(
    "label",
    "text-sm font-medium text-slate-700",
    "Company Size"
  );
  sizeLab.setAttribute("for", "employees");
  const sizeSel = el(
    "select",
    "w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
  );
  sizeSel.id = "employees";
  ["", "1-10", "11-50", "51-100", "101-500", "500+"].forEach((v, i) => {
    const opt = el(
      "option",
      "",
      i === 0 ? "Select company size…" : `${v} employees`
    );
    opt.value = v;
    if (i === 0) opt.selected = true;
    sizeSel.appendChild(opt);
  });
  const sizeMsg = err("employees-error");
  sizeWrap.append(sizeLab, sizeSel, sizeMsg);

  // Select: Primary IT Challenge
  const svcWrap = el("div", "space-y-1");
  const svcLab = el(
    "label",
    "text-sm font-medium text-slate-700",
    "Primary IT Challenge"
  );
  svcLab.setAttribute("for", "service");
  const svcSel = el(
    "select",
    "w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
  );
  svcSel.id = "service";
  [
    ["", "What's your main IT concern?"],
    ["slow-performance", "Slow system performance"],
    ["security-concerns", "Cybersecurity concerns"],
    ["network-issues", "Network connectivity issues"],
    ["cloud-migration", "Cloud migration"],
    ["backup-recovery", "Backup and recovery"],
    ["ongoing-support", "Ongoing IT support"],
    ["other", "Other"],
  ].forEach(([val, label]) => {
    const opt = el("option", "", label);
    opt.value = val;
    if (!val) opt.selected = true;
    svcSel.appendChild(opt);
  });
  const svcMsg = err("service-error");
  svcWrap.append(svcLab, svcSel, svcMsg);

  // Radio Group: Priority
  const priFs = el("fieldset", "space-y-2");
  const priLg = el(
    "legend",
    "text-sm font-medium text-slate-700",
    "Priority Level"
  );
  const priRow = el("div", "flex flex-wrap gap-6");
  const pri = (value, label) => {
    const w = el("label", "flex items-center gap-2 text-sm cursor-pointer");
    const r = el("input");
    r.type = "radio";
    r.name = "priority";
    r.value = value;
    r.checked = value === "normal";
    r.addEventListener("change", () => (formData.priority = value));
    w.append(r, el("span", "", label));
    return w;
  };
  priRow.append(
    pri("normal", "Normal"),
    pri("urgent", "Urgent"),
    pri("emergency", "Emergency")
  );
  priFs.append(priLg, priRow);

  // Date/Time
  const grid2c = el("div", "grid grid-cols-1 sm:grid-cols-2 gap-4");
  const fDate = field("date", "Preferred Date", {
    type: "date",
    min: new Date().toISOString().split("T")[0],
  });
  const tWrap = el("div", "space-y-1");
  const tLab = el(
    "label",
    "text-sm font-medium text-slate-700",
    "Preferred Time"
  );
  tLab.setAttribute("for", "time");
  const timeSel = el(
    "select",
    "w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
  );
  timeSel.id = "time";
  [
    "",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ].forEach((t, i) => {
    const opt = el("option", "", i === 0 ? "Select a time…" : t);
    opt.value = i === 0 ? "" : t.toLowerCase().replace(/\s/g, "");
    if (i === 0) opt.selected = true;
    timeSel.appendChild(opt);
  });
  const timeMsg = err("time-error");
  tWrap.append(tLab, timeSel, timeMsg);
  grid2c.append(fDate.wrap, tWrap);

  // Message
  const fMsg = field("message", "Additional Details", {}, "textarea");
  fMsg.input.placeholder =
    "Please describe your current IT setup and any specific challenges you're facing...";

  // Submit
  const submit = el(
    "button",
    "btn-lg w-full text-lg py-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
    "Schedule Free Consultation"
  );
  submit.type = "submit";

  const disclaimer = el(
    "p",
    "text-xs text-slate-500 text-center",
    "By submitting this form, you agree to be contacted by our team regarding your IT consultation request."
  );

  // assemble form
  form.append(
    grid2,
    grid2b,
    sizeWrap,
    svcWrap,
    priFs,
    grid2c,
    fMsg.wrap,
    submit,
    disclaimer
  );
  formBody.appendChild(form);
  formCard.append(formHeader, formBody);
  twoCol.appendChild(formCard);

  // ----- Wire up value sync -----
  const bind = (f, key) =>
    f.input.addEventListener("input", (e) => (formData[key] = e.target.value));
  bind(fName, "name");
  bind(fEmail, "email");
  bind(fPhone, "phone");
  bind(fCompany, "company");
  sizeSel.addEventListener(
    "change",
    () => (formData.employees = sizeSel.value)
  );
  svcSel.addEventListener("change", () => (formData.service = svcSel.value));
  fDate.input.addEventListener(
    "change",
    () => (formData.date = fDate.input.value)
  );
  timeSel.addEventListener("change", () => (formData.time = timeSel.value));
  fMsg.input.addEventListener(
    "input",
    (e) => (formData.message = e.target.value)
  );

  // ----- Validation -----
  const validate = () => {
    let ok = true;
    const focusables = [];

    // Name
    if (!fName.input.value.trim()) {
      setInvalid(fName.input, fName.msg, "Please enter your full name.");
      ok = false;
      focusables.push(fName.input);
    } else clearInvalid(fName.input, fName.msg);

    // Email
    if (
      !fEmail.input.value.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.input.value)
    ) {
      setInvalid(
        fEmail.input,
        fEmail.msg,
        "Please enter a valid business email."
      );
      ok = false;
      focusables.push(fEmail.input);
    } else clearInvalid(fEmail.input, fEmail.msg);

    // Phone
    if (
      !fPhone.input.value.trim() ||
      !/^[0-9()+\-.\s]{7,}$/.test(fPhone.input.value)
    ) {
      setInvalid(
        fPhone.input,
        fPhone.msg,
        "Please enter a valid phone number."
      );
      ok = false;
      focusables.push(fPhone.input);
    } else clearInvalid(fPhone.input, fPhone.msg);

    // Company
    if (!fCompany.input.value.trim()) {
      setInvalid(
        fCompany.input,
        fCompany.msg,
        "Please enter your company name."
      );
      ok = false;
      focusables.push(fCompany.input);
    } else clearInvalid(fCompany.input, fCompany.msg);

    // Optional selects (no error if blank), but keep tidy
    clearInvalid(sizeSel, sizeMsg);
    clearInvalid(svcSel, svcMsg);
    clearInvalid(timeSel, timeMsg);

    return { ok, focusTarget: focusables[0] || null };
  };

  // ----- Submit -----
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { ok, focusTarget } = validate();
    if (!ok) {
      formAlert.className = "mb-4 rounded-md p-4 bg-red-50 text-red-700";
      formAlert.textContent =
        "Please fix the highlighted fields and try again.";
      (focusTarget || form).focus();
      return;
    }

    const payload = { ...formData, tier: selectedTier };
    console.log("Booking submitted:", payload);

    // Success UI
    formAlert.className = "mb-4 rounded-md p-4 bg-green-50 text-green-800";
    formAlert.textContent =
      "Consultation request submitted! Our team will contact you within 2 business hours.";
    formAlert.focus();

    form.reset();
    // Reset internal state (keep selectedTier)
    Object.keys(formData).forEach((k) => (formData[k] = ""));
    formData.priority = "normal";
    sizeSel.value = "";
    svcSel.value = "";
    timeSel.value = "";
  });

  return section;
}
