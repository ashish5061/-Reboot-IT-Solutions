// components/booking.js
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

  // ----- State (vanilla) -----
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

  // ----- Section root -----
  const section = el(
    "section",
    "py-24 bg-gradient-to-b from-white to-slate-50"
  );
  section.id = "booking";

  const container = el("div", "container mx-auto px-6");
  section.appendChild(container);

  // Header
  const header = el("div", "text-center mb-16");
  const badge = el(
    "span",
    "inline-block mb-4 px-4 py-2 rounded bg-slate-100 text-slate-700 border text-sm font-semibold",
    "Get Started Today"
  );
  const h2 = el(
    "h2",
    "mb-6 text-4xl md:text-5xl font-bold text-slate-900",
    "Schedule Your IT Consultation"
  );
  const sub = el(
    "p",
    "text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed",
    "Get expert IT guidance tailored to your business needs. Our certified consultants will assess your current infrastructure and recommend optimal solutions."
  );
  header.append(badge, h2, sub);
  container.appendChild(header);

  // ----- Tiers -----
  const tiersWrap = el("div", "max-w-7xl mx-auto mb-12");
  const tiersTitle = el(
    "h3",
    "text-2xl font-bold text-center mb-8 text-slate-900",
    "Choose Your Service Level"
  );
  const tiersGrid = el("div", "grid md:grid-cols-3 gap-6");

  const tierCards = {};

  serviceTiers.forEach((t) => {
    const card = el(
      "div",
      "cursor-pointer transition-all duration-200 rounded-2xl bg-white border shadow-sm hover:shadow-md"
    );

    const setActive = (active) => {
      card.className =
        "cursor-pointer transition-all duration-200 rounded-2xl bg-white " +
        (active ? "ring-2 ring-blue-600 shadow-lg" : "border hover:shadow-md");
      if (t.popular) {
        card.className += " border-blue-600";
      }
    };

    // header
    const ch = el("div", "p-6 text-center pb-4");
    if (t.popular) {
      const popular = el(
        "span",
        "inline-block mb-3 px-3 py-1 text-xs rounded bg-blue-600 text-white",
        "Most Popular"
      );
      ch.appendChild(popular);
    }
    const iconWrap = el(
      "div",
      "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mx-auto mb-4"
    );
    iconWrap.appendChild(icon(t.icon));

    const title = el("div", "text-xl font-semibold", t.name);
    const price = el("div", "text-2xl font-bold text-blue-600 mb-2", t.price);
    const desc = el("p", "text-slate-600 text-sm", t.description);
    ch.append(iconWrap, title, price, desc);

    // content
    const cc = el("div", "px-6 pb-6 pt-0");
    const list = el("div", "space-y-2");
    t.features.forEach((f) => {
      const row = el("div", "flex items-center text-sm text-slate-600");
      const dot = el(
        "div",
        "h-1.5 w-1.5 rounded-full bg-green-500 mr-3 flex-shrink-0"
      );
      row.append(dot, document.createTextNode(f));
      list.appendChild(row);
    });
    cc.appendChild(list);

    card.append(ch, cc);
    setActive(selectedTier === t.id);
    card.addEventListener("click", () => {
      selectedTier = t.id;
      Object.values(tierCards).forEach((fn) => fn(false));
      setActive(true);
    });

    tierCards[t.id] = setActive;
    tiersGrid.appendChild(card);
  });

  tiersWrap.append(tiersTitle, tiersGrid);
  container.appendChild(tiersWrap);

  // ----- Two-column area -----
  const twoCol = el("div", "grid lg:grid-cols-2 gap-12 items-start");
  container.appendChild(twoCol);

  // Left: highlights
  const highlights = el("div", "space-y-8");

  const highlight = (icn, title, text, tone = "primary") => {
    const row = el("div", "flex items-start space-x-4");
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
  const gRow = el("div", "flex items-center space-x-3");
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

  // Right: form
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
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = { ...formData, tier: selectedTier };
    console.log("Booking submitted:", payload);
    alert(
      "Consultation request submitted! Our team will contact you within 2 business hours to schedule your appointment."
    );
    form.reset();
  });

  const grid2 = el("div", "grid grid-cols-2 gap-4");
  const field = (id, label, attrs = {}) => {
    const wrap = el("div", "space-y-2");
    const lab = el("label", "", label);
    lab.setAttribute("for", id);
    const input = el("input", "w-full rounded-md border px-3 py-2");
    input.id = id;
    Object.entries(attrs).forEach(([k, v]) => input.setAttribute(k, v));
    input.addEventListener("input", (e) => {
      formData[id] = e.target.value;
    });
    wrap.append(lab, input);
    return wrap;
  };

  grid2.append(
    field("name", "Full Name *", { placeholder: "John Smith", required: "" }),
    field("email", "Business Email *", {
      type: "email",
      placeholder: "john@company.com",
      required: "",
    })
  );

  const grid2b = el("div", "grid grid-cols-2 gap-4");
  grid2b.append(
    field("phone", "Phone Number *", {
      type: "tel",
      placeholder: "(555) 123-4567",
      required: "",
    }),
    field("company", "Company Name *", {
      placeholder: "Your Company Inc.",
      required: "",
    })
  );

  // Select: Company Size
  const sizeWrap = el("div", "space-y-2");
  const sizeLab = el("label", "", "Company Size");
  sizeLab.setAttribute("for", "employees");
  const sizeSel = el("select", "w-full rounded-md border px-3 py-2");
  sizeSel.id = "employees";
  ["1-10", "11-50", "51-100", "101-500", "500+"].forEach((v) => {
    const opt = el("option", "", `${v} employees`);
    opt.value = v;
    sizeSel.appendChild(opt);
  });
  sizeSel.addEventListener(
    "change",
    () => (formData.employees = sizeSel.value)
  );
  sizeWrap.append(sizeLab, sizeSel);

  // Select: Primary IT Challenge
  const svcWrap = el("div", "space-y-2");
  const svcLab = el("label", "", "Primary IT Challenge");
  svcLab.setAttribute("for", "service");
  const svcSel = el("select", "w-full rounded-md border px-3 py-2");
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
  svcSel.addEventListener("change", () => (formData.service = svcSel.value));
  svcWrap.append(svcLab, svcSel);

  // Radio Group: Priority
  const priWrap = el("div", "space-y-2");
  priWrap.append(el("label", "", "Priority Level"));
  const priRow = el("div", "flex space-x-6");
  const pri = (value, label) => {
    const w = el("label", "flex items-center space-x-2 text-sm cursor-pointer");
    const r = el("input");
    r.type = "radio";
    r.name = "priority";
    r.value = value;
    if (value === "normal") r.checked = true;
    r.addEventListener("change", () => (formData.priority = value));
    const t = el("span", "", label);
    w.append(r, t);
    return w;
  };
  priRow.append(
    pri("normal", "Normal"),
    pri("urgent", "Urgent"),
    pri("emergency", "Emergency")
  );
  priWrap.appendChild(priRow);

  // Date/Time
  const grid2c = el("div", "grid grid-cols-2 gap-4");
  const dateWrap = field("date", "Preferred Date", { type: "date" });
  const timeWrap = el("div", "space-y-2");
  const timeLab = el("label", "", "Preferred Time");
  const timeSel = el("select", "w-full rounded-md border px-3 py-2");
  [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ].forEach((t) => {
    const opt = el("option", "", t);
    opt.value = t.toLowerCase().replace(" ", "");
    timeSel.appendChild(opt);
  });
  timeSel.addEventListener("change", () => (formData.time = timeSel.value));
  timeWrap.append(timeLab, timeSel);

  grid2c.append(dateWrap, timeWrap);

  // Message
  const msgWrap = el("div", "space-y-2");
  const msgLab = el("label", "", "Additional Details");
  msgLab.setAttribute("for", "message");
  const msg = document.createElement("textarea");
  msg.id = "message";
  msg.className = "w-full rounded-md border px-3 py-2";
  msg.rows = 4;
  msg.placeholder =
    "Please describe your current IT setup and any specific challenges you're facing...";
  msg.addEventListener("input", (e) => (formData.message = e.target.value));
  msgWrap.append(msgLab, msg);

  // Submit
  const submit = el(
    "button",
    "w-full text-lg py-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold",
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
    priWrap,
    grid2c,
    msgWrap,
    submit,
    disclaimer
  );

  formBody.appendChild(form);
  formCard.append(formHeader, formBody);
  twoCol.appendChild(formCard);

  return section;
}
