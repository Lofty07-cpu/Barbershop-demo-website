// Edit this file to customise the website for a different business.
window.businessConfig = {
  business: {
    name: "The Golden Comb",
    type: "Barbershop",
    slogan: "Good cuts. Good company.",
    description: "Sharp cuts, good company. Visit {businessName} for classic barbering and modern grooming.",
    established: "2014",
    copyrightYear: "2024",
    logoMark: "GC",
    locationName: "YOUR NEIGHBOURHOOD BARBER",
    language: "en"
  },
  theme: {
    fonts: {
      sans: '"DM Sans", sans-serif',
      serif: '"Playfair Display", Georgia, serif',
      googleFontsUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap"
    },
    colors: {
      "--ink": "#11110f",
      "--panel": "#1b1b18",
      "--cream": "#f4efe5",
      "--muted": "#a7a398",
      "--gold": "#d4ad57",
      "--gold-light": "#e8c66e",
      "--color-nav": "#c2beb4",
      "--color-button-text": "#17150f",
      "--color-hero-background": "#171714",
      "--color-hero-copy": "#d0cdc5",
      "--color-hero-note": "#d5d1c6",
      "--color-strip-text": "#19170f",
      "--color-strip-border": "rgba(22,20,14,.25)",
      "--color-card": "#1a1a17",
      "--color-card-border": "#333127",
      "--color-card-featured": "#28251c",
      "--color-card-featured-border": "#796338",
      "--color-service-muted": "#aaa598",
      "--color-service-divider": "#39372e",
      "--color-story": "#1c1c19",
      "--color-story-copy": "#b5b1a7",
      "--color-story-divider": "#3b3931",
      "--color-story-signature": "#928d81",
      "--color-rating-muted": "#928e82",
      "--color-review-border": "#302f29",
      "--color-review-copy": "#d1cec5",
      "--color-avatar": "#4a4538",
      "--color-avatar-alt": "#393a35",
      "--color-review-meta": "#8e897d",
      "--color-booking-text": "#19170f",
      "--color-booking-label": "#49402a",
      "--color-booking-heading": "#211a0c",
      "--color-booking-copy": "#393321",
      "--color-booking-hint": "#3d341f",
      "--color-booking-step": "#42371e",
      "--color-booking-divider": "rgba(22,20,14,.24)",
      "--color-booking-step-divider": "rgba(22,20,14,.2)",
      "--color-booking-button-hover": "#2a291f",
      "--color-contact-copy": "#c6c2b8",
      "--color-footer-border": "#302f29",
      "--color-footer-copy": "#9d988d",
      "--color-footer-meta": "#aaa598",
      "--color-whatsapp": "#0e793b",
      "--color-whatsapp-hover": "#0a612e",
      "--color-whatsapp-border": "rgba(255,255,255,.2)",
      "--color-whatsapp-shadow": "rgba(0,0,0,.35)",
      "--color-whatsapp-text": "#ffffff",
      "--hero-shade-start": "rgba(13,13,12,.95)",
      "--hero-shade-middle": "rgba(13,13,12,.76)",
      "--hero-shade-end": "rgba(13,13,12,.16)",
      "--hero-shade-bottom": "rgba(13,13,12,.48)",
      "--hero-shade-mobile-start": "rgba(13,13,12,.88)",
      "--hero-shade-mobile-middle": "rgba(13,13,12,.3)",
      "--hero-shade-mobile-bottom": "rgba(13,13,12,.66)",
      "--story-image-shade": "rgba(0,0,0,.15)"
    }
  },
  images: {
    hero: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2200&q=85",
    about: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1300&q=85",
    heroAlt: "Barber preparing a fresh haircut",
    aboutAlt: "Barber giving a client a carefully detailed haircut"
  },
  navigation: {
    services: "Services",
    about: "Our story",
    reviews: "Reviews",
    visit: "Find us",
    booking: "Book a chair",
    ariaLabel: "Main navigation"
  },
  hero: {
    eyebrow: "EST. {established} · {locationName}",
    heading: "Good hair.",
    headingAccent: "Good energy.",
    description: "A proper trim, a hot towel, and a little time for yourself. Pull up a chair — we’ll take it from here.",
    primaryAction: "Book your appointment",
    secondaryAction: "Explore our services",
    note: "GOOD CUTS. GOOD COMPANY.",
    index: "01",
    total: "04"
  },
  highlights: {
    messageSegments: ["OLD-SCHOOL CRAFT", "NEW-SCHOOL STYLE", "ALWAYS YOURS"],
    rating: "4.9",
    ratingLabel: "LOCAL FAVOURITE",
    experience: "10",
    experienceLabel: "YEARS OF GOOD CUTS"
  },
  services: {
    eyebrow: "THE GOOD STUFF",
    heading: "Made for your",
    headingAccent: "kind of sharp.",
    intro: "No rush, no guesswork. Just skilled hands, good conversation, and a finish that feels like you.",
    note: "Prices shown are for this demo and can be updated to suit your shop.",
    items: [
      { name: "The classic cut", description: "A tailored haircut, finished with a wash and a clean style.", duration: "40 MIN", price: "R 250", icon: "✂" },
      { name: "Beard sculpt", description: "Shape, detail, and a warm towel to bring your beard back to life.", duration: "30 MIN", price: "R 180", icon: "◒" },
      { name: "The full works", description: "Your cut and beard, plus the hot towel treatment. The whole ritual.", duration: "65 MIN", price: "R 380", icon: "✦", featured: true }
    ]
  },
  about: {
    eyebrow: "NOT JUST A HAIRCUT",
    heading: "Your chair.",
    headingAccent: "Your time.",
    description: "We believe the best {businessType} is the one where everybody knows your name. {businessName} is a neighbourhood spot built on good craft, easy conversation, and making sure you leave feeling like yourself.",
    action: "Come say hello",
    signoff: "See you in the chair",
    signature: "— {businessName} team"
  },
  reviews: {
    eyebrow: "DON'T JUST TAKE OUR WORD FOR IT",
    heading: "The word on",
    headingAccent: "the street.",
    rating: "4.9",
    ratingLabel: "FROM OUR LOCAL REGULARS",
    items: [
      { quote: "Finally found my barber. They actually listen, take their time, and the cut is spot on every single time.", name: "Sam M.", detail: "REGULAR SINCE 2021", initial: "S" },
      { quote: "Great people, great atmosphere, even better beard trim. My Saturday ritual now, no question.", name: "Thabo K.", detail: "REGULAR SINCE 2023", initial: "T" }
    ]
  },
  booking: {
    eyebrow: "YOUR CHAIR IS WAITING",
    heading: "Let’s get you",
    headingAccent: "looking sharp.",
    description: "Send us a WhatsApp with your preferred service and time. We’ll get back to you to confirm your booking.",
    action: "Start a WhatsApp booking",
    floatAction: "WhatsApp us",
    hint: "Message opens pre-filled in WhatsApp. Add the owner’s number to your link to direct chats straight to the shop.",
    message: "Hi {businessName}! I’d like to book an appointment.\n\nName: \nPreferred service: \nPreferred day and time: \nAnything else we should know: ",
    steps: [
      { title: "Tell us what you need", description: "Cut, beard, or the full works." },
      { title: "Pick your day & time", description: "We’ll check the chair and confirm." },
      { title: "Show up. Leave sharp.", description: "Easy as that. See you soon." }
    ]
  },
  contact: {
    eyebrow: "DROP IN OR BOOK AHEAD",
    heading: "Find your",
    headingAccent: "way here.",
    addressLabel: "COME THROUGH",
    address: ["18 Long Street", "Cape Town, 8001"],
    hoursLabel: "WHEN WE’RE OPEN",
    hours: ["Tue – Fri · 09:00 – 18:00", "Sat · 09:00 – 15:00", "Sun & Mon · Taking a breather"],
    questionLabel: "GOT A QUESTION?",
    questionAction: "Say hello on WhatsApp",
    questionMessage: "Hi {businessName}! I have a question.",
    phone: "",
    phoneLabel: "PHONE",
    email: "",
    emailLabel: "EMAIL",
    mapUrl: "",
    mapLabel: "DIRECTIONS",
    mapAction: "Get directions",
    whatsappNumber: "",
    note: "Demo address and opening hours — replace with your business details."
  },
  socialMedia: {
    instagram: "",
    facebook: "",
    tiktok: ""
  },
  footer: {
    copyright: "© {copyrightYear} {businessName} · MADE FOR THE NEIGHBOURHOOD",
    socialLabel: "Social media"
  }
};
