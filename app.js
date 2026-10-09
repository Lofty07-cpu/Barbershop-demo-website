(function () {
  "use strict";

  const config = window.businessConfig;

  if (!config) {
    throw new Error("Business configuration was not loaded. Check that config.js is available.");
  }

  const escapeHtml = (value) => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };

  const setCopy = (key, value) => {
    const element = document.querySelector(`[data-copy="${key}"]`);
    if (element) element.textContent = value;
  };

  const setImage = (selector, url, alt, property) => {
    const element = document.querySelector(selector);
    element.setAttribute("aria-label", alt);
    element.style.setProperty(property, `url("${url.replace(/["\\\n\r]/g, "\\$&")}")`);
  };

  const personalize = (value) => String(value)
    .replace(/\{businessName\}/g, config.business.name)
    .replace(/\{businessType\}/g, config.business.type)
    .replace(/\{established\}/g, config.business.established)
    .replace(/\{locationName\}/g, config.business.locationName)
    .replace(/\{copyrightYear\}/g, config.business.copyrightYear)
    .replace(/\{slogan\}/g, config.business.slogan);

  const getWhatsAppUrl = (message) => {
    const number = config.contact.whatsappNumber.replace(/\D/g, "");
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  const brandNameWords = config.business.name.toUpperCase().trim().split(/\s+/);
  const brandNameHtml = escapeHtml(brandNameWords.length > 1
    ? `${brandNameWords.slice(0, -1).join(" ")}|${brandNameWords[brandNameWords.length - 1]}`
    : brandNameWords[0]).replace("|", "<br>");
  document.documentElement.lang = config.business.language || "en";
  document.title = `${config.business.name} — ${config.business.type}`;
  document.querySelector('meta[name="description"]').content = personalize(config.business.description);
  document.querySelector('meta[name="theme-color"]').content = config.theme.colors["--ink"];

  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="${config.theme.colors["--ink"]}" stroke="${config.theme.colors["--gold"]}"/><text x="20" y="25" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="${config.theme.colors["--gold"]}">${escapeHtml(config.business.logoMark)}</text></svg>`;
  document.querySelector('link[rel="icon"]').href = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;
  document.querySelector("#business-fonts").href = config.theme.fonts.googleFontsUrl;
  document.documentElement.style.setProperty("--sans", config.theme.fonts.sans);
  document.documentElement.style.setProperty("--serif", config.theme.fonts.serif);
  Object.entries(config.theme.colors).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value);
  });
  setImage(".hero-image", config.images.hero, config.images.heroAlt, "--hero-image");
  setImage(".story-photo", config.images.about, config.images.aboutAlt, "--about-image");

  document.querySelectorAll(".brand").forEach((brand) => {
    brand.querySelector(".brand-mark").textContent = config.business.logoMark;
    brand.querySelector(".brand-name").innerHTML = brandNameHtml;
  });

  document.querySelector(".main-nav").setAttribute("aria-label", config.navigation.ariaLabel);
  ["services", "about", "reviews", "visit"].forEach((key) => {
    document.querySelector(`[data-nav="${key}"]`).textContent = config.navigation[key];
  });
  document.querySelector(".intro-strip").setAttribute("aria-label", `${config.business.type} highlights`);
  document.querySelector(".intro-strip > p").innerHTML = config.highlights.messageSegments
    .map(escapeHtml)
    .join(' <span>✳</span> ');

  const copyGroups = [
    "business", "hero", "highlights", "services", "about", "reviews", "booking", "contact", "footer"
  ];
  copyGroups.forEach((group) => {
    Object.entries(config[group]).forEach(([key, value]) => {
      if (typeof value === "string" || typeof value === "number") {
        setCopy(`${group}.${key}`, personalize(value));
      }
    });
  });
  setCopy("navigation.booking", config.navigation.booking);
  setCopy("booking.floatAction", config.booking.floatAction);
  document.querySelector(".site-footer .social-links").setAttribute("aria-label", config.footer.socialLabel);

  document.querySelector(".service-grid").innerHTML = config.services.items.map((service, index) => `
    <article class="service-card${service.featured ? " service-card-featured" : ""}">
      <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="service-icon" aria-hidden="true">${escapeHtml(service.icon || "")}</span>
      <h3>${escapeHtml(service.name)}</h3>
      <p>${escapeHtml(service.description)}</p>
      <div class="service-meta"><span>${escapeHtml(service.duration)}</span><strong>${escapeHtml(service.price)}</strong></div>
    </article>
  `).join("");

  document.querySelector(".review-list").innerHTML = config.reviews.items.map((review, index) => `
    <blockquote>
      <span class="quote-mark">“</span>
      <p>${escapeHtml(review.quote)}</p>
      <footer><span class="review-avatar avatar-${index % 2 === 0 ? "one" : "two"}">${escapeHtml(review.initial || review.name.charAt(0))}</span><span><strong>${escapeHtml(review.name)}</strong><small>${escapeHtml(review.detail)}</small></span><span class="review-stars">★★★★★</span></footer>
    </blockquote>
  `).join("");

  document.querySelector(".booking-details").innerHTML = config.booking.steps.map((step, index) => `
    <div><span>${String(index + 1).padStart(2, "0")}</span><p><strong>${escapeHtml(step.title)}</strong><small>${escapeHtml(step.description)}</small></p></div>
  `).join("");

  const contact = config.contact;
  const contactBlocks = [
    `<div><span class="visit-label">${escapeHtml(contact.addressLabel)}</span><p>${contact.address.map(escapeHtml).join("<br>")}</p></div>`,
    `<div><span class="visit-label">${escapeHtml(contact.hoursLabel)}</span><p>${contact.hours.map(escapeHtml).join("<br>")}</p></div>`,
    `<div><span class="visit-label">${escapeHtml(contact.questionLabel)}</span><p><a class="question-link" target="_blank" rel="noopener noreferrer">${escapeHtml(contact.questionAction)} ↗</a></p></div>`
  ];
  if (contact.phone) contactBlocks.push(`<div><span class="visit-label">${escapeHtml(contact.phoneLabel)}</span><p><a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(contact.phone)}</a></p></div>`);
  if (contact.email) contactBlocks.push(`<div><span class="visit-label">${escapeHtml(contact.emailLabel)}</span><p><a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></p></div>`);
  if (contact.mapUrl) contactBlocks.push(`<div><span class="visit-label">${escapeHtml(contact.mapLabel)}</span><p><a href="${escapeHtml(contact.mapUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(contact.mapAction)} ↗</a></p></div>`);
  document.querySelector(".visit-info").innerHTML = contactBlocks.join("");
  document.querySelector(".question-link").href = getWhatsAppUrl(personalize(contact.questionMessage));

  const bookingUrl = getWhatsAppUrl(personalize(config.booking.message));
  document.querySelectorAll(".booking-link").forEach((link) => {
    link.href = bookingUrl;
  });
  document.querySelector(".whatsapp-float").setAttribute("aria-label", config.booking.floatAction);

  const socialLinks = Object.entries(config.socialMedia)
    .filter(([, url]) => url)
    .map(([network, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(network)}</a>`);
  document.querySelector(".social-links").innerHTML = socialLinks.join("");
})();
