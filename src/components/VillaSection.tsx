import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/context";
import type { Translation } from "@/i18n/translations";

import pool from "@/assets/pool.png";
import kueche from "@/assets/kueche.png";
import wohnzimmer from "@/assets/wohnzimmer.png";
import essbereich from "@/assets/essbereich.png";
import badezimmer1 from "@/assets/badezimmer1.png";
import badezimmer2 from "@/assets/badezimmer2.png";
import sitzecke from "@/assets/sitzecke.png";

type ImageAltKey = keyof Translation["villa"]["imageAlts"];

const images: { src: string; altKey: ImageAltKey; className: string }[] = [
  { src: pool, altKey: "pool", className: "col-span-2 row-span-2" },
  { src: kueche, altKey: "kitchen", className: "col-span-1 row-span-1" },
  { src: essbereich, altKey: "dining", className: "col-span-1 row-span-1" },
  { src: wohnzimmer, altKey: "living", className: "col-span-1 row-span-1" },
  { src: badezimmer1, altKey: "bath1", className: "col-span-1 row-span-1" },
  { src: badezimmer2, altKey: "bath2", className: "col-span-1 row-span-1" },
  { src: sitzecke, altKey: "lounge", className: "col-span-1 row-span-1" },
];

// Distances are language-independent; labels come from translations by index.
const distanceValues = ["23 km", "16 km", "5 km"];

const MAPS_URL = "https://maps.app.goo.gl/loule";

const VillaSection = () => {
  const { t } = useLanguage();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();
  const { ref: amenitiesRef, isVisible: amenitiesVisible } = useScrollAnimation();
  const { ref: locationRef, isVisible: locationVisible } = useScrollAnimation();

  return (
    <section id="villa" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
          {t.villa.heading}
        </h2>

        {/* Bento Grid */}
        <div
          ref={galleryRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-20 transition-all duration-700 ${galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {images.map((img) => {
            const alt = t.villa.imageAlts[img.altKey];
            return (
              <div key={img.altKey} className={`${img.className} overflow-hidden rounded-lg`}>
                <img src={img.src} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            );
          })}
        </div>

        {/* Amenities */}
        <div
          ref={amenitiesRef}
          className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-700 ${amenitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {t.villa.amenities.map((group) => (
            <div key={group.title} className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Location */}
        <div
          ref={locationRef}
          className={`bg-card rounded-xl p-8 md:p-12 shadow-sm transition-all duration-700 ${locationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-primary" size={24} />
            <h3 className="font-display text-2xl font-semibold text-primary">{t.villa.locationHeading}</h3>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {t.villa.distances.map((label, i) => (
              <div key={label} className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">{distanceValues[i]}</p>
                <p className="text-muted-foreground text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              {t.common.openMaps} <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillaSection;
