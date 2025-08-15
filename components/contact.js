// components/contact.js
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

  // ---------- state ----------
  const formData = { name: "", email: "", subject: "", message: "" };

  // ---------- section ----------
  const section = el("section", "py-20 bg-white");
  section.id = "contact";

  const container = el("div", "container mx-auto px-6");
  section.appendChild(container);

  // Header
  const header = el("div", "text-center mb-16");
  header.append(
    el("h2", "mb-4 text-4xl font-bold text-gray-900", "Get In Touch"),
    el(
      "p",
      "text-xl text-gray-600 max-w-2xl mx-auto",
      "Ready to solve your IT problems? Contact us today for a free consultation."
    )
  );
  container.appendChild(header);

  const wrap = el("div", "max-w-6xl mx-auto");
  const grid = el("div", "grid lg:grid-cols-2 gap-12");
  wrap.appendChild(grid);
  container.appendChild(wrap);

  // ---------- Left: Contact Information ----------
  const infoCol = el("div", "space-y-8");

  const block = (iconName, title, lines, color = "primary") => {
    const row = el("div", "flex items-start space-x-4");
    const bubble =
      color === "accent"
        ? "flex h-10 w-10 items-center justify-center rounded-full bg-green-100"
        : "flex h-10 w-10 items-center justify-center rounded-full bg-blue-100";
    const iconColor = color === "accent" ? "text-green-600" : "text-blue-600";

    const ico = el("div", bubble);
    ico.appendChild(icon(iconName, `h-5 w-5 ${iconColor}`));

    const col = el("div");
    col.append(el("h4", "font-semibold mb-1", title));
    lines.forEach((l) => col.append(el("p", "text-gray-600", l)));
    row.append(ico, col);
    return row;
  };

  infoCol.append(
    el("div", "", [el("h3", "text-2xl font-bold mb-6", "Contact Information")])
  );

  infoCol.append(
    block("Phone", "Phone", [
      "(555) 123-4567",
      "Available 24/7 for emergencies",
    ]),
    block("Mail", "Email", [
      "support@rebootitsolutions.com",
      "We respond within 4 hours",
    ]),
    (() => {
      const row = el("div", "flex items-start space-x-4");
      const ico = el(
        "div",
        "flex h-10 w-10 items-center justify-center rounded-full bg-blue-100"
      );
      ico.appendChild(icon("MapPin", "h-5 w-5 text-blue-600"));

      const col = el("div");
      const h = el("h4", "font-semibold mb-1", "Office");
      const p1 = el("p", "text-gray-600");
      p1.innerHTML = "123 Tech Street<br/>Downtown, ST 12345";
      const p2 = el(
        "p",
        "text-sm text-gray-500",
        "Serving the entire metro area"
      );
      col.append(h, p1, p2);

      row.append(ico, col);
      return row;
    })(),
    block(
      "Clock",
      "Business Hours",
      [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Emergency calls only",
      ],
      "accent"
    )
  );

  // Service Area Card
  const areaCard = el("div", "rounded-2xl bg-white border-0 shadow-sm");
  const areaHeader = el("div", "p-6 pb-0");
  areaHeader.append(el("div", "font-semibold text-lg", "Service Area"));
  const areaBody = el("div", "p-6 pt-4");
  const areaBox = el(
    "div",
    "h-48 bg-gray-100 rounded-lg flex items-center justify-center"
  );
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
  const formCard = el("div", "rounded-2xl bg-white shadow-lg border-0");
  const formHeader = el("div", "p-6 pb-0");
  formHeader.append(el("div", "text-lg font-semibold", "Send us a Message"));
  const formBody = el("div", "p-6");

  const form = el("form", "space-y-6");

  const field = (id, label, attrs = {}) => {
    const wrap = el("div", "space-y-2");
    const lab = el("label", "", label);
    lab.setAttribute("for", id);
    const input = el("input", "w-full rounded-md border px-3 py-2");
    input.id = id;
    Object.entries(attrs).forEach(([k, v]) => input.setAttribute(k, v));
    input.addEventListener("input", (e) => (formData[id] = e.target.value));
    wrap.append(lab, input);
    return wrap;
  };

  // Name & Email
  const grid2 = el("div", "grid grid-cols-2 gap-4");
  grid2.append(
    field("name", "Name", { required: "" }),
    field("email", "Email", { type: "email", required: "" })
  );

  // Subject
  const subjectWrap = field("subject", "Subject", {
    placeholder: "Brief description of your inquiry",
    required: "",
  });

  // Message
  const msgWrap = el("div", "space-y-2");
  const msgLabel = el("label", "", "Message");
  msgLabel.setAttribute("for", "message");
  const textarea = document.createElement("textarea");
  textarea.id = "message";
  textarea.className = "w-full rounded-md border px-3 py-2";
  textarea.rows = 6;
  textarea.placeholder = "Tell us about your IT needs or questions...";
  textarea.required = true;
  textarea.addEventListener(
    "input",
    (e) => (formData.message = e.target.value)
  );
  msgWrap.append(msgLabel, textarea);

  // Submit
  const submit = el(
    "button",
    "w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3",
    "Send Message"
  );
  submit.type = "submit";

  form.append(grid2, subjectWrap, msgWrap, submit);

  // Submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message sent! We'll get back to you within 24 hours.");
    // reset
    form.reset();
    formData.name = formData.email = formData.subject = formData.message = "";
  });

  formBody.appendChild(form);
  formCard.append(formHeader, formBody);
  grid.appendChild(formCard);

  return section;
}
