import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, MapPin, Clock, Utensils, Coffee, Car, Leaf, Music2, Menu, X,
  ChevronDown, Instagram, Facebook, Twitter, Mail, BookOpen, GlassWater,
} from "lucide-react";

import heroImg from "@/assets/hero_restaurant.jpg";
import interiorAsset from "@/assets/tasteera_interior.asset.json";
import pastaAsset from "@/assets/tasteera_pasta.asset.json";
import brunchAsset from "@/assets/tasteera_brunch.asset.json";
import ambLamps from "@/assets/ambiance_lamps.jpg";
import ambTable from "@/assets/ambiance_table.jpg";
import ambMusic from "@/assets/ambiance_music.jpg";
import logoAsset from "@/assets/tasteera_logo.asset.json";
import foodMenuAsset from "@/assets/tasteera_food_menu.asset.json";
import drinksMenuAsset from "@/assets/tasteera_drinks_menu.asset.json";
import foodMenuCover from "@/assets/tasteera_food_menu_cover.asset.json";
import drinksMenuCover from "@/assets/tasteera_drinks_menu_cover.asset.json";
import foodMenuPage1 from "@/assets/tasteera_food_menu_page_1.asset.json";
import foodMenuPage2 from "@/assets/tasteera_food_menu_page_2.asset.json";
import drinksMenuPage1 from "@/assets/tasteera_drinks_menu_page_1.asset.json";
import drinksMenuPage2 from "@/assets/tasteera_drinks_menu_page_2.asset.json";
import drinksMenuPage3 from "@/assets/tasteera_drinks_menu_page_3.asset.json";
import drinksMenuPage4 from "@/assets/tasteera_drinks_menu_page_4.asset.json";
import drinksMenuPage5 from "@/assets/tasteera_drinks_menu_page_5.asset.json";
import drinksMenuPage6 from "@/assets/tasteera_drinks_menu_page_6.asset.json";
import drinksMenuPage7 from "@/assets/tasteera_drinks_menu_page_7.asset.json";
import drinksMenuPage8 from "@/assets/tasteera_drinks_menu_page_8.asset.json";
import drinksMenuPage9 from "@/assets/tasteera_drinks_menu_page_9.asset.json";
import drinksMenuPage10 from "@/assets/tasteera_drinks_menu_page_10.asset.json";
import drinksMenuPage11 from "@/assets/tasteera_drinks_menu_page_11.asset.json";
import drinksMenuPage12 from "@/assets/tasteera_drinks_menu_page_12.asset.json";
import drinksMenuPage13 from "@/assets/tasteera_drinks_menu_page_13.asset.json";
import drinksMenuPage14 from "@/assets/tasteera_drinks_menu_page_14.asset.json";
import drinksMenuPage15 from "@/assets/tasteera_drinks_menu_page_15.asset.json";
import drinksMenuPage16 from "@/assets/tasteera_drinks_menu_page_16.asset.json";
import drinksMenuPage17 from "@/assets/tasteera_drinks_menu_page_17.asset.json";
import drinksMenuPage18 from "@/assets/tasteera_drinks_menu_page_18.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tasteera Cafe & Restaurant — Gurugram | Where Every Plate Tells a Story" },
      { name: "description", content: "Tasteera in Sector 31, Gurugram serves Indian, Pan-Asian & Continental cuisine in a warm, plant-filled space with live music and a full bar. Reserve your table today." },
      { property: "og:title", content: "Tasteera Cafe & Restaurant — Gurugram" },
      { property: "og:description", content: "Where every plate tells a story. Upscale-casual dining, live music & full bar in Sector 31, Gurugram." },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: TasteeraHome,
});


const galleryItems = [
  { img: interiorAsset.url, label: "The Dining Room", span: "md:col-span-2 md:row-span-2" },
  { img: ambLamps, label: "Light & Greenery" },
  { img: pastaAsset.url, label: "Plated With Care" },
  { img: ambTable, label: "Set for the Evening" },
  { img: brunchAsset.url, label: "Brunch Mornings" },
  { img: ambMusic, label: "Live Music Nights", span: "md:col-span-2" },
];

const foodMenuPages = [foodMenuPage1.url, foodMenuPage2.url];
const drinksMenuPages = [
  drinksMenuPage1.url, drinksMenuPage2.url, drinksMenuPage3.url, drinksMenuPage4.url,
  drinksMenuPage5.url, drinksMenuPage6.url, drinksMenuPage7.url, drinksMenuPage8.url,
  drinksMenuPage9.url, drinksMenuPage10.url, drinksMenuPage11.url, drinksMenuPage12.url,
  drinksMenuPage13.url, drinksMenuPage14.url, drinksMenuPage15.url, drinksMenuPage16.url,
  drinksMenuPage17.url, drinksMenuPage18.url,
];

type MenuDocument = {
  icon: React.ElementType;
  label: string;
  caption: string;
  cover: string;
  pdfUrl: string;
  pages: string[];
};

const menuDocuments: MenuDocument[] = [
  {
    icon: BookOpen,
    label: "Food Menu",
    caption: "Indian · Pan-Asian · Continental",
    cover: drinksMenuCover.url,
    pdfUrl: foodMenuAsset.url,
    pages: foodMenuPages,
  },
  {
    icon: GlassWater,
    label: "Drinks Menu",
    caption: "Coffee · Mocktails · Juices",
    cover: foodMenuCover.url,
    pdfUrl: drinksMenuAsset.url,
    pages: drinksMenuPages,
  },
];

function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal-ready");
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add("in");
      else io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function TasteeraHome() {
  useReveal();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<MenuDocument | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (heroRef.current) {
        const y = Math.min(window.scrollY, window.innerHeight);
        heroRef.current.style.transform = `translate3d(0, ${y * -0.15}px, 0)`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav open={navOpen} setOpen={setNavOpen} scrolled={scrolled} />

      {/* HERO */}
      <section id="top" className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-forest">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src={heroImg}
            alt="Warm interior of Tasteera restaurant with rattan lamps and teal chairs"
            className="h-full w-full object-cover animate-ken-burns"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/85" />


        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <span className="gold-divider animate-float-up" style={{ animationDelay: "0.1s" }}>
            Gurugram · Est. Sector 31
          </span>
          <h1 className="mt-6 font-display text-[15vw] leading-[0.95] text-cream sm:text-7xl md:text-8xl lg:text-[8.5rem] animate-float-up text-balance" style={{ animationDelay: "0.25s" }}>
            Tasteéra
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/85 md:text-2xl font-display italic animate-float-up text-balance" style={{ animationDelay: "0.45s" }}>
            Where every plate tells a story.
          </p>
          <p className="mt-3 max-w-xl text-sm text-cream/65 md:text-base animate-float-up" style={{ animationDelay: "0.55s" }}>
            Indian · Pan-Asian · Continental · Coffee & Mocktails · Live Music
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-float-up" style={{ animationDelay: "0.7s" }}>
            <a href="#reservations" className="group inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-forest transition hover:scale-[1.03] shadow-elegant">
              Reserve a Table
            </a>
            <a href="#visit" className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-cream backdrop-blur transition hover:bg-cream/15">
              Visit Us
            </a>
          </div>
        </div>

        <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70 hover:text-cream">
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center reveal">
          <span className="gold-divider">Our Story</span>
          <h2 className="mt-6 font-display text-4xl text-forest md:text-6xl text-balance">
            More than a meal.<br/>An <em className="text-terracotta not-italic font-display">experience</em>.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tasteera was born from a simple idea — that food should be plated like art, served
            with genuine warmth, and remembered long after the table is cleared. Tucked into
            Huda Market in Sector 31, our space pairs warm wood and deep greens with the soft
            glow of rattan lamps and quiet hum of live music. Every dish, from our slow-cooked
            Dal-E-Tasteera to our hand-folded dim sum, is built around the consistency our
            regulars trust and the presentation new guests can't stop photographing.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 px-6 md:grid-cols-4 reveal">
          {[
            { k: "8+", v: "Years Plating Stories" },
            { k: "120+", v: "Dishes On the Menu" },
            { k: "4.4★", v: "Loved on Zomato" },
            { k: "Nightly", v: "Live Music Sets" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border/70 bg-card/50 p-6 text-center backdrop-blur">
              <div className="font-display text-3xl text-forest md:text-4xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>




      {/* AMBIANCE / GALLERY */}
      <section id="ambiance" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_auto] reveal">
            <div>
              <span className="gold-divider">The Room</span>
              <h2 className="mt-6 font-display text-4xl text-forest md:text-6xl text-balance">
                Lamplight, greenery,<br/>and a guitar in the corner.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Catch a candlelit dinner mid-week, or settle in for our live acoustic sets every
              Friday and Saturday evening. Bookings recommended after 8 PM.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
            {galleryItems.map((g) => (
              <figure
                key={g.label}
                className={`reveal group relative overflow-hidden rounded-2xl ${g.span ?? ""}`}
              >
                <img
                  src={g.img}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-4 translate-y-3 text-sm font-medium text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-cream border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { icon: Utensils, label: "Indian · Pan-Asian · Continental" },
            { icon: Leaf, label: "Veg & Non-Veg" },
            { icon: Coffee, label: "Coffee, Mocktails & Fresh Juices" },
            { icon: Car, label: "Parking Available" },
            { icon: Music2, label: "Live Music Nights" },
            { icon: () => <span className="font-display text-xl text-gold">₹</span>, label: "₹800–1600 for two" },
          ].map((it) => {
            const Icon = it.icon as React.ElementType;
            return (
              <div key={it.label} className="flex items-center gap-3 text-sm text-forest">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest/8 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 leading-tight">{it.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center reveal">
          <span className="gold-divider">The Menu</span>
          <h2 className="mt-6 font-display text-4xl text-forest md:text-5xl text-balance">
            Browse at your leisure.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            A seasonal blend of Indian, Pan-Asian and Continental plates, paired with
            barista coffee, mocktails and fresh-pressed juices.
          </p>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
            {menuDocuments.map((menu) => (
              <MenuCard key={menu.label} menu={menu} onOpen={() => setSelectedMenu(menu)} />
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Opens here as clear images, so it works even if your browser blocks PDF previews.
          </p>
        </div>
      </section>

      {selectedMenu && (
        <MenuPreview menu={selectedMenu} onClose={() => setSelectedMenu(null)} />
      )}

      {/* RESERVATIONS */}
      <section id="reservations" className="relative isolate overflow-hidden bg-forest py-28 md:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${ambTable})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/95 to-forest" />

        <div className="relative mx-auto max-w-3xl px-6 text-center text-cream reveal">
          <span className="gold-divider">Bookings</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl text-balance">
            Reserve Your Table
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-cream/80">
            Choose your preferred partner — your seat at Tasteera is one click away.
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {[
              { name: "Zomato", url: "https://www.zomato.com/ncr/tasteera-cafe-1-sector-31-gurgaon/book" },
              { name: "EazyDiner", url: "https://www.eazydiner.com/delhi-ncr/tasteera-cafe-restaurant-sector-31-gurgaon-712420" },
              { name: "District", url: "https://www.district.in/dining/ncr/tasteera-cafe-1-sector-31-gurgaon/book" },
              { name: "Swiggy Dineout", url: "https://www.swiggy.com/restaurants/tasteera-cafe-huda-city-gurgaon-1344498/dineout" },
            ].map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-cream/20 bg-cream/5 px-6 py-5 text-left text-cream backdrop-blur transition hover:border-gold/60 hover:bg-cream/10"
              >
                <span className="font-display text-2xl">{p.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-gold opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100">
                  Book →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-10 text-sm text-cream/60">
            Walk-ins welcome. For large parties, call us at{" "}
            <a href="tel:+917303336776" className="text-gold underline-offset-4 hover:underline">
              +91 73033 36776
            </a>.
          </p>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section id="visit" className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <span className="gold-divider">Visit Us</span>
              <h2 className="mt-6 font-display text-4xl text-forest md:text-5xl text-balance">
                Tucked into Huda Market,<br/>open late into the night.
              </h2>

              <div className="mt-10 space-y-6 text-base">
                <InfoRow icon={MapPin} title="Address">
                  First Floor, Huda Market, SCO No. 40,<br/>
                  Sector 31, Gurugram, Haryana 122001
                </InfoRow>
                <InfoRow icon={Clock} title="Hours">
                  Mon – Thu &nbsp;·&nbsp; 11:30 AM – 11:59 PM<br/>
                  Fri – Sun &nbsp;·&nbsp; 11:30 AM – 1:00 AM
                </InfoRow>
                <InfoRow icon={Phone} title="Call">
                  <a href="tel:+917303336776" className="hover:text-gold">073033 36776</a>
                  <span className="text-muted-foreground"> · </span>
                  <a href="tel:+919217534918" className="hover:text-gold">092175 34918</a>
                </InfoRow>
                <InfoRow icon={Mail} title="Email">
                  <a href="mailto:tasteera24@gmail.com" className="hover:text-gold">tasteera24@gmail.com</a>
                </InfoRow>
              </div>


              <a
                href="https://maps.google.com/?q=Tasteera+Cafe+Sector+31+Gurugram"
                target="_blank" rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm uppercase tracking-[0.18em] text-cream hover:opacity-90"
              >
                Get Directions
              </a>
            </div>

            <div className="reveal overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Tasteera location map"
                src="https://www.google.com/maps?q=Huda+Market+Sector+31+Gurugram&output=embed"
                className="h-[500px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest/8 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{title}</div>
        <div className="mt-1 leading-relaxed text-forest">{children}</div>
      </div>
    </div>
  );
}

function MenuCard({
  icon: Icon, label, caption, cover, pdfUrl,
}: {
  icon: React.ElementType;
  label: string;
  caption: string;
  cover: string;
  pdfUrl: string;
}) {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-elegant"
      aria-label={`Open ${label} PDF in a new tab`}
    >
      <div className="relative h-32 w-24 shrink-0 overflow-hidden bg-muted sm:h-36 sm:w-28">
        <img
          src={cover}
          alt={`${label} cover preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-black/15 to-transparent" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-5">
        <span className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-gold">
          <Icon className="h-3.5 w-3.5" />
          PDF Menu
        </span>
        <span className="font-display text-2xl text-forest">{label}</span>
        <span className="text-xs text-muted-foreground">{caption}</span>
        <span className="mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-terracotta transition group-hover:translate-x-1">
          Open →
        </span>
      </div>
    </a>
  );
}



function Nav({ open, setOpen, scrolled }: { open: boolean; setOpen: (v: boolean) => void; scrolled: boolean }) {
  const links = [
    { href: "#about", label: "Story" },
    { href: "#ambiance", label: "Ambiance" },
    { href: "#menu", label: "Menu" },
    { href: "#reservations", label: "Reserve" },
    { href: "#visit", label: "Visit" },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Tasteera home">
          <span className={`grid place-items-center overflow-hidden rounded-full ring-1 transition-all ${scrolled ? "h-11 w-11 bg-cream ring-forest/15" : "h-12 w-12 bg-cream/95 ring-cream/30 shadow-soft"}`}>
            <img src={logoAsset.url} alt="Tasteera logo" className="h-full w-full object-cover scale-[1.35]" />
          </span>
          <span className={`font-display text-xl font-semibold tracking-wide transition-colors ${scrolled ? "text-forest" : "text-cream"}`}>
            Tasteéra
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm uppercase tracking-[0.18em] transition-colors ${scrolled ? "text-foreground/80 hover:text-forest" : "text-cream/80 hover:text-cream"}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#reservations" className="hidden rounded-full bg-gold px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-forest hover:opacity-90 md:inline-flex">
          Book Now
        </a>
        <button onClick={() => setOpen(!open)} aria-label="Menu" className={`md:hidden ${scrolled ? "text-forest" : "text-cream"}`}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm uppercase tracking-[0.18em] text-forest">
                {l.label}
              </a>
            ))}
            <a href="#reservations" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-gold px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-forest">
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-cream ring-1 ring-cream/30">
              <img src={logoAsset.url} alt="Tasteera logo" className="h-full w-full object-cover scale-[1.35]" />
            </span>
            <div className="font-display text-3xl text-cream">Tasteéra</div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-cream/65">
            Cafe & Restaurant — where every plate tells a story. A warm, plant-filled corner of
            Sector 31 serving Indian, Pan-Asian and Continental dishes alongside barista coffee,
            mocktails and live music.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 hover:border-gold hover:text-gold">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-cream">Our Story</a></li>
            <li><a href="#ambiance" className="hover:text-cream">Ambiance</a></li>
            <li><a href="#menu" className="hover:text-cream">Menu</a></li>
            <li><a href="#reservations" className="hover:text-cream">Reservations</a></li>
            <li><a href="#visit" className="hover:text-cream">Visit Us</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Find Us</div>
          <address className="mt-4 not-italic text-sm leading-relaxed text-cream/75">
            First Floor, Huda Market,<br/>
            SCO No. 40, Sector 31,<br/>
            Gurugram, Haryana 122001
          </address>
          <div className="mt-3 space-y-1 text-sm">
            <a href="tel:+917303336776" className="block hover:text-gold">073033 36776</a>
            <a href="tel:+919217534918" className="block hover:text-gold">092175 34918</a>
            <a href="mailto:tasteera24@gmail.com" className="block hover:text-gold">tasteera24@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Tasteera Cafe & Restaurant. All rights reserved.</p>
          <p>Crafted with warmth in Gurugram.</p>
        </div>
      </div>
    </footer>
  );
}
