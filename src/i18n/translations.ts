export type Language = "de" | "en";

// German is the source-of-truth shape; the English dictionary is typed against
// it (see `Translation`) so both stay structurally in sync.
export const de = {
  nav: {
    home: "Home",
    villa: "Die Villa",
    surrounding: "Umgebung",
    guide: "Guest Guide",
  },
  common: {
    book: "Jetzt Buchen",
    openMaps: "In Google Maps öffnen",
  },
  hero: {
    imageAlt:
      "Panoramablick von Villa Casa Monte über die Algarve-Landschaft zum Atlantik",
    tagline: "Dein Hideaway über den Dächern von Loulé",
    subtitle:
      "Erlebe fesselnde Blicke auf den Atlantik in einer exklusiven 214m² Villa auf dem Berg Alfeição.",
  },
  quickFacts: {
    bedrooms: "2 Schlafzimmer",
    guests: "Max. 4 Gäste",
    pool: "Beheizter Pool",
    charger: "E-Ladestation",
  },
  intro: {
    heading: "Willkommen im Casa Monte",
    p1: "Auf dem Berg Alfeição thront die Villa Casa Monte mit einem atemberaubenden 180°-Panorama — von Loulé bis zum Atlantik. Die 214m² große Luxusvilla bietet High-End-Komfort in einer Umgebung absoluter Privatsphäre.",
    p2: "Ein mediterraner Garten auf mehreren Ebenen, ein beheizter Infinity-Pool und sonnenverwöhnte Terrassen laden zum Verweilen ein. Hier findet man die perfekte Balance zwischen Ruhe und Erlebnis.",
  },
  villa: {
    heading: "Die Villa",
    imageAlts: {
      pool: "Beheizter Pool mit Panoramablick",
      kitchen: "Moderne Küche",
      dining: "Essbereich mit Meerblick",
      living: "Wohnzimmer",
      bath1: "Badezimmer",
      bath2: "En-Suite Badezimmer",
      lounge: "Terrassen-Lounge",
    },
    amenities: [
      {
        title: "Küche",
        items: ["Geschirrspüler", "Backofen", "Kaffeevollautomat", "Voll ausgestattet"],
      },
      {
        title: "Wohnbereich",
        items: ["Meerblick", "Highspeed WiFi", "Smart TV", "Klimaanlage"],
      },
      {
        title: "Outdoor",
        items: ["Beheizter Pool", "BBQ Grill", "Lounge-Bereich", "E-Ladestation"],
      },
    ],
    locationHeading: "Lage",
    distances: ["Flughafen Faro", "Strand", "Loulé Zentrum"],
  },
  surrounding: {
    heading: "Umgebung & Aktivitäten",
    intro:
      "Die Algarve bietet weit mehr als Sonne und Strand — entdecke die Highlights rund um Casa Monte.",
    activities: [
      {
        title: "Samstagsmarkt Loulé",
        desc: "Traditionelles Handwerk und frische lokale Produkte in der historischen Markthalle.",
      },
      {
        title: "Praia da Falésia",
        desc: "Spektakuläre rote Klippen und goldener Sand — einer der schönsten Strände Europas.",
      },
      {
        title: "Faro Altstadt",
        desc: "Historischer Charme, kopfsteingepflasterte Gassen und ein moderner Yachthafen.",
      },
      {
        title: "Almancil & Golf",
        desc: "Weltklasse-Golfplätze wie Vale do Lobo und Quinta do Lago in 20 Min. Entfernung.",
      },
      {
        title: "Ria Formosa Naturpark",
        desc: "Einzigartige Lagunenlandschaft mit Bootstouren und exotischer Vogelwelt.",
      },
    ],
  },
  guide: {
    heading: "Guest Guide",
    intro:
      "Kurze Video-Anleitungen für deinen Aufenthalt — damit alles reibungslos läuft.",
    videos: [
      "Ankunft & Schlüsselbox",
      "Türen",
      "Klimaanlage",
      "Poolabdeckung",
      "Grill",
      "Kamin",
      "Fernbedienung",
      "Sonnenschirm",
      "Insekten entfernen",
      "Abreise",
    ],
  },
  footer: {
    location: "Alfeição, Loulé — Algarve, Portugal",
    rights: "Alle Rechte vorbehalten.",
  },
  notFound: {
    message: "Hoppla! Seite nicht gefunden",
    back: "Zurück zur Startseite",
  },
};

export type Translation = typeof de;

export const en: Translation = {
  nav: {
    home: "Home",
    villa: "The Villa",
    surrounding: "Surroundings",
    guide: "Guest Guide",
  },
  common: {
    book: "Book Now",
    openMaps: "Open in Google Maps",
  },
  hero: {
    imageAlt:
      "Panoramic view from Villa Casa Monte across the Algarve landscape to the Atlantic",
    tagline: "Your hideaway above the rooftops of Loulé",
    subtitle:
      "Experience captivating views of the Atlantic from an exclusive 214m² villa on Mount Alfeição.",
  },
  quickFacts: {
    bedrooms: "2 Bedrooms",
    guests: "Up to 4 Guests",
    pool: "Heated Pool",
    charger: "EV Charger",
  },
  intro: {
    heading: "Welcome to Casa Monte",
    p1: "Perched on Mount Alfeição, Villa Casa Monte commands a breathtaking 180° panorama — from Loulé all the way to the Atlantic. The 214m² luxury villa offers high-end comfort in a setting of absolute privacy.",
    p2: "A multi-level Mediterranean garden, a heated infinity pool and sun-drenched terraces invite you to linger. Here you'll find the perfect balance between tranquility and adventure.",
  },
  villa: {
    heading: "The Villa",
    imageAlts: {
      pool: "Heated pool with panoramic view",
      kitchen: "Modern kitchen",
      dining: "Dining area with sea view",
      living: "Living room",
      bath1: "Bathroom",
      bath2: "En-suite bathroom",
      lounge: "Terrace lounge",
    },
    amenities: [
      {
        title: "Kitchen",
        items: ["Dishwasher", "Oven", "Espresso machine", "Fully equipped"],
      },
      {
        title: "Living Area",
        items: ["Sea view", "High-speed WiFi", "Smart TV", "Air conditioning"],
      },
      {
        title: "Outdoor",
        items: ["Heated pool", "BBQ grill", "Lounge area", "EV charger"],
      },
    ],
    locationHeading: "Location",
    distances: ["Faro Airport", "Beach", "Loulé center"],
  },
  surrounding: {
    heading: "Surroundings & Activities",
    intro:
      "The Algarve offers far more than sun and sand — discover the highlights around Casa Monte.",
    activities: [
      {
        title: "Loulé Saturday Market",
        desc: "Traditional crafts and fresh local produce in the historic market hall.",
      },
      {
        title: "Praia da Falésia",
        desc: "Spectacular red cliffs and golden sand — one of the most beautiful beaches in Europe.",
      },
      {
        title: "Faro Old Town",
        desc: "Historic charm, cobblestone lanes and a modern marina.",
      },
      {
        title: "Almancil & Golf",
        desc: "World-class golf courses like Vale do Lobo and Quinta do Lago just 20 minutes away.",
      },
      {
        title: "Ria Formosa Nature Park",
        desc: "A unique lagoon landscape with boat tours and exotic birdlife.",
      },
    ],
  },
  guide: {
    heading: "Guest Guide",
    intro: "Short video guides for your stay — so everything runs smoothly.",
    videos: [
      "Arrival & Key Box",
      "Doors",
      "Air Conditioning",
      "Pool Cover",
      "Barbecue",
      "Fireplace",
      "Remote Control",
      "Parasol",
      "Removing Insects",
      "Departure",
    ],
  },
  footer: {
    location: "Alfeição, Loulé — Algarve, Portugal",
    rights: "All rights reserved.",
  },
  notFound: {
    message: "Oops! Page not found",
    back: "Return to Home",
  },
};

export const translations: Record<Language, Translation> = { de, en };
