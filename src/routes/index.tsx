import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, MapPin, Clock, Utensils, Wine, Car, Leaf, Music2, Menu, X,
  ChevronDown, Instagram, Facebook, Twitter, FileText, ExternalLink,
} from "lucide-react";

import logoAsset from "@/assets/tasteera_logo.asset.json";
import barAsset from "@/assets/tasteera_bar.asset.json";
import interiorAsset from "@/assets/tasteera_interior.asset.json";
import pastaPlateAsset from "@/assets/tasteera_pasta_plate.asset.json";
import breakfastAsset from "@/assets/tasteera_breakfast.asset.json";
import ambLamps from "@/assets/ambiance_lamps.jpg";
import ambTable from "@/assets/ambiance_table.jpg";
import ambMusic from "@/assets/ambiance_music.jpg";
import foodMenu from "@/assets/tasteera_food_menu.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tasteera Cafe & Restaurant — Gurugram | Where Flavors Meet Timeless Elegance" },
      { name: "description", content: "Tasteera in Sector 31, Gurugram serves Indian, Pan-Asian & Continental cuisine in a warm, plant-filled space with live music and a full bar. Reserve your table today." },
      { property: "og:title", content: "Tasteera Cafe & Restaurant — Gurugram" },
      { property: "og:description", content: "Where flavors meet timeless elegance. Upscale-casual dining, live music & full bar in Sector 31, Gurugram." },
      { property: "og:image", content: barAsset.url },
      { property: "twitter:image", content: barAsset.url },
    ],
  }),
  component: TasteeraHome,
});

const galleryItems = [
  { img: barAsset.url, label: "The Bar & Dining Room", span: "md:col-span-2 md:row-span-2" },
  { img: ambLamps, label: "Light & Greenery" },
  { img: pastaPlateAsset.url, label: "Plated With Care" },
  { img: ambTable, label: "Set for the Evening" },
  { img: breakfastAsset.url, label: "Brunch Mornings" },
  { img: ambMusic, label: "Live Music Nights", span: "md:col-span-2" },
];

const menuGroups = [
  {
    title: "Indian signatures",
    items: ["Dal Makhani", "Paneer Lababdar", "Butter Chicken", "Biryani", "Tandoori Platters"],
  },
  {
    title: "Pan-Asian favourites",
    items: ["Dim Sum", "Thai Curry", "Hakka Noodles", "Sushi Rolls", "Crispy Lotus Stem"],
  },
  {
    title: "Continental plates",
    items: ["Wood-Fired Pizza", "Creamy Pasta", "Grilled Fish", "Burgers", "Artisanal Salads"],
  },
  {
    title: "Café & desserts",
    items: ["Mocktails", "Fresh Brews", "Cold Coffee", "Smoothies", "Dessert Jars"],
  },
];

function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal-ready");
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
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
      <section id="top" className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--forest)]">
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src={interiorAsset.url}
            alt="Warm interior of Tasteera with rattan pendant lamps, teal chairs and lush greenery"
            className="h-full w-full object-cover animate-ken-burns"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,28,22,.34)_0%,rgba(18,28,22,.28)_42%,rgba(18,28,22,.82)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <span className="gold-divider animate-float-up" style={{ animationDelay: "0.1s" }}>
            Gurugram · Est. Sector 31
          </span>
          <h1 className="mt-6 font-display text-[15vw] leading-[0.95] text-[var(--cream)] sm:text-7xl md:text-8xl lg:text-[8.5rem] animate-float-up text-balance" style={{ animationDelay: "0.25s" }}>
            Tasteéra
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[color-mix(in_oklch,var(--cream)_92%,transparent)] md:text-2xl font-display italic animate-float-up text-balance" style={{ animationDelay: "0.45s" }}>
            Where every plate tells a story.
          </p>
          <p className="mt-3 max-w-xl text-sm text-[color-mix(in_oklch,var(--cream)_80%,transparent)] md:text-base animate-float-up" style={{ animationDelay: "0.55s" }}>
            Indian · Pan-Asian · Continental · Live Music
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-float-up" style={{ animationDelay: "0.7s" }}>
            <a href="#reservations" className="group inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--forest)] transition hover:scale-[1.03] shadow-elegant">
              Reserve a Table
            </a>
            <a href="#visit" className="inline-flex items-center justify-center rounded-full border border-[color-mix(in_oklch,var(--cream)_42%,transparent)] bg-[color-mix(in_oklch,var(--cream)_10%,transparent)] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--cream)] backdrop-blur transition hover:bg-[color-mix(in_oklch,var(--cream)_18%,transparent)]">
              Visit Us
            </a>
          </div>
        </div>

        <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[color-mix(in_oklch,var(--cream)_82%,transparent)] hover:text-[var(--cream)]">
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </a>
      </section>


      {/* ABOUT */}
      <section id="about" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center reveal">
          <span className="gold-divider">Our Story</span>
          <h2 className="mt-6 font-display text-4xl text-[var(--forest)] md:text-6xl text-balance">
            More than a meal.<br/>An <em className="text-terracotta not-italic font-display">experience</em>.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tasteera was born from a simple idea — that food should be plated like art, served
            with genuine warmth, and remembered long after the table is cleared. Tucked into
            Huda Market in Sector 31, our space pairs warm wood and deep greens with the soft
            glow of rattan lamps and quiet hum of live music.
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
              <div className="font-display text-3xl text-[var(--forest)] md:text-4xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative border-y border-[color-mix(in_oklch,var(--gold)_26%,transparent)] bg-[linear-gradient(135deg,#efe1c8_0%,#f8f0df_48%,#d9e0cf_100%)] py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6 reveal">
          <div className="mx-auto max-w-3xl text-center">
          <span className="gold-divider">The Menu</span>
          <h2 className="mt-6 font-display text-4xl text-[var(--forest)] md:text-6xl text-balance">
            A library of <em className="text-terracotta not-italic font-display">flavors</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[color-mix(in_oklch,var(--forest)_78%,transparent)]">
            A curated spread of Indian, Pan-Asian and Continental favourites, served with a full bar and café pours.
          </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {menuGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-[color-mix(in_oklch,var(--forest)_16%,transparent)] bg-[rgba(255,250,239,.72)] p-6 shadow-soft backdrop-blur">
                <h3 className="font-display text-2xl text-[var(--forest)]">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[color-mix(in_oklch,var(--forest)_82%,transparent)]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            <a
              href={foodMenu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-full border border-[color-mix(in_oklch,var(--forest)_18%,transparent)] bg-[rgba(31,48,38,.06)] px-5 py-4 text-left transition hover:border-[var(--gold)] hover:bg-[rgba(31,48,38,.1)]"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[rgba(31,48,38,.08)] text-[var(--gold)]">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg text-[var(--forest)]">Food Menu</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[color-mix(in_oklch,var(--forest)_62%,transparent)]">PDF</div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-[var(--gold)] opacity-70 transition group-hover:opacity-100" />
            </a>
            <a
              href={drinksMenu.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-full border border-[color-mix(in_oklch,var(--forest)_18%,transparent)] bg-[rgba(31,48,38,.06)] px-5 py-4 text-left transition hover:border-[var(--gold)] hover:bg-[rgba(31,48,38,.1)]"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[rgba(31,48,38,.08)] text-[var(--gold)]">
                  <Wine className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg text-[var(--forest)]">Drinks Menu</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[color-mix(in_oklch,var(--forest)_62%,transparent)]">PDF</div>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-[var(--gold)] opacity-70 transition group-hover:opacity-100" />
            </a>
          </div>
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
              <figure key={g.label} className={`reveal group relative overflow-hidden rounded-2xl ${g.span ?? ""}`}>
                <img src={g.img} alt={g.label} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
            { icon: Wine, label: "Full Bar Available" },
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

      {/* RESERVATIONS — light, classy, complements landing */}
      <section id="reservations" className="relative overflow-hidden bg-[var(--forest)] py-28 text-[var(--cream)] md:py-36">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: `url(${barAsset.url})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(25,41,31,.95),rgba(25,41,31,.84)_48%,rgba(108,73,43,.78))]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center reveal">
          <span className="gold-divider">Bookings</span>
          <h2 className="mt-6 font-display text-5xl text-[var(--cream)] md:text-7xl text-balance">
            Reserve Your Table
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[color-mix(in_oklch,var(--cream)_78%,transparent)]">
            Choose your preferred partner — your seat at Tasteera is one click away.
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {[
              { name: "Zomato", url: "https://www.zomato.com/ncr/tasteera-cafe-1-sector-31-gurgaon/book" },
              { name: "EazyDiner", url: "https://www.eazydiner.com/delhi-ncr/tasteera-cafe-restaurant-sector-31-gurgaon-712420" },
              { name: "District", url: "https://www.district.in/dining/ncr/tasteera-cafe-1-sector-31-gurgaon/book" },
              { name: "Swiggy Dineout", url: "https://www.swiggy.com/restaurants/tasteera-cafe-huda-city-gurgaon-1344498/dineout" },
            ].map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-[rgba(245,232,202,.2)] bg-[rgba(245,232,202,.08)] px-6 py-5 text-left text-[var(--cream)] backdrop-blur transition hover:border-[var(--gold)] hover:bg-[rgba(245,232,202,.14)]">
                <span className="font-display text-2xl">{p.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] opacity-80 transition group-hover:translate-x-1 group-hover:opacity-100">
                  Book →
                </span>
              </a>
            ))}
          </div>

          <p className="mt-10 text-sm text-[color-mix(in_oklch,var(--cream)_72%,transparent)]">
            Walk-ins welcome. For large parties, call{" "}
            <a href="tel:+917303336776" className="text-[var(--gold)] underline-offset-4 hover:underline">+91 73033 36776</a>
            {" "}or{" "}
            <a href="tel:+919217534918" className="text-[var(--gold)] underline-offset-4 hover:underline">+91 92175 34918</a>.
          </p>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section id="visit" className="py-28 md:py-36 bg-[linear-gradient(180deg,#f7eddb_0%,#e7d5b8_100%)] border-t border-[color-mix(in_oklch,var(--gold)_26%,transparent)]">
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
                  <a href="tel:+917303336776" className="hover:text-gold">+91 73033 36776</a><br/>
                  <a href="tel:+919217534918" className="hover:text-gold">+91 92175 34918</a>
                </InfoRow>
                <InfoRow icon={Utensils} title="Email">
                  <a href="mailto:tasteera24@gmail.com" className="hover:text-gold">tasteera24@gmail.com</a>
                </InfoRow>
              </div>

              <a href="https://maps.google.com/?q=Tasteera+Cafe+Sector+31+Gurugram"
                target="_blank" rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm uppercase tracking-[0.18em] text-cream hover:opacity-90">
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

function Nav({ open, setOpen, scrolled }: { open: boolean; setOpen: (v: boolean) => void; scrolled: boolean }) {
  const links = [
    { href: "#about", label: "Story" },
    { href: "#menu", label: "Menu" },
    { href: "#ambiance", label: "Ambiance" },
    { href: "#reservations", label: "Reserve" },
    { href: "#visit", label: "Visit" },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="block h-11 w-11 overflow-hidden rounded-full ring-1 ring-cream/40 shadow-soft">
            <img src={logoAsset.url} alt="Tasteera logo" className="h-full w-full object-cover" />
          </span>
          <span className={`font-display text-2xl font-semibold tracking-wide transition-colors ${scrolled ? "text-forest" : "text-cream"}`}>
            Tasteéra
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm uppercase tracking-[0.18em] transition-colors ${scrolled ? "text-foreground/80 hover:text-forest" : "text-cream/85 hover:text-cream"}`}>
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
    <footer className="relative bg-[linear-gradient(135deg,#fbeee0_0%,#f7e0d4_45%,#f3cdd3_100%)] text-[#5a3b3f]">
      <div className="absolute inset-x-0 top-0 h-px bg-[color-mix(in_oklch,var(--gold)_38%,transparent)]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="block h-12 w-12 overflow-hidden rounded-full ring-1 ring-[#c89aa1]/60 shadow-soft">
              <img src={logoAsset.url} alt="Tasteera logo" className="h-full w-full object-cover" />
            </span>
            <div className="font-display text-3xl text-[#3d2a2e]">Tasteéra</div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-[#5a3b3f]/80">
            Where flavors meet timeless elegance. A warm, plant-filled corner of Sector 31
            serving Indian, Pan-Asian and Continental dishes alongside cocktails and live music.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full border border-[#c89aa1]/60 text-[#5a3b3f] hover:border-[var(--gold)] hover:text-[var(--gold)]">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-[#b6735a]">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[#3d2a2e]">Our Story</a></li>
            <li><a href="#menu" className="hover:text-[#3d2a2e]">Menu</a></li>
            <li><a href="#ambiance" className="hover:text-[#3d2a2e]">Ambiance</a></li>
            <li><a href="#reservations" className="hover:text-[#3d2a2e]">Reservations</a></li>
            <li><a href="#visit" className="hover:text-[#3d2a2e]">Visit Us</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-[#b6735a]">Get in Touch</div>
          <address className="mt-4 not-italic text-sm leading-relaxed text-[#5a3b3f]/85">
            First Floor, Huda Market,<br/>
            SCO No. 40, Sector 31,<br/>
            Gurugram, Haryana 122001
          </address>
          <div className="mt-4 space-y-1 text-sm">
            <a href="tel:+917303336776" className="block hover:text-[var(--gold)]">+91 73033 36776</a>
            <a href="tel:+919217534918" className="block hover:text-[var(--gold)]">+91 92175 34918</a>
            <a href="mailto:tasteera24@gmail.com" className="block hover:text-[var(--gold)]">tasteera24@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#c89aa1]/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[#5a3b3f]/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Tasteera Cafe & Restaurant. All rights reserved.</p>
          <p>Crafted with warmth in Gurugram.</p>
        </div>
      </div>
    </footer>
  );
}

