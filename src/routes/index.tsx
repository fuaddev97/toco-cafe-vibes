import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Clock3, Instagram, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logoLight from "@/assets/toco-logo-light.png";
import logoDark from "@/assets/toco-logo-dark.png";
import heroImage from "@/assets/toco-hero.jpg";
import tableImage from "@/assets/toco-table.jpg";
import coffeeImage from "@/assets/toco-coffee.jpg";
import pastriesImage from "@/assets/toco-pastries.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toco Speciality | Coffee, Food & Slow Mornings" },
      { name: "description", content: "A modern speciality cafe in Riyadh serving considered coffee, fresh pastries and all-day plates." },
      { property: "og:title", content: "Toco Speciality | Riyadh" },
      { property: "og:description", content: "Considered coffee, fresh pastries and all-day plates in Riyadh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Menu", href: "#menu" },
  { label: "About TOCO", href: "#story" },
  { label: "Journal", href: "#journal" },
  { label: "Visit", href: "#visit" },
];

function HeroLine({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <span className="block whitespace-nowrap" aria-hidden="true">
      {text.split("").map((char, i) => (
        <span key={i} className="hero-char" style={{ animationDelay: `${(offset + i) * 42}ms` }}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </span>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92svh] bg-primary text-primary-foreground">
        <img src={heroImage} alt="Barista preparing coffee at Toco Speciality" width={1920} height={1200} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <header className="relative z-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-primary-foreground/30 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="flex min-w-0 items-center gap-3"><img src={logoLight} alt="Toco Speciality logo" width={749} height={749} className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" /><span className="font-display text-xl uppercase leading-none sm:text-2xl">Toco Speciality</span></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.label} href={item.href} className="text-sm font-semibold transition-opacity hover:opacity-60">{item.label}</a>)}
            <Button asChild variant="editorial" className="border-cream bg-cream text-foreground hover:bg-light"><a href="#visit">Find us</a></Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild><Button size="icon" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground lg:hidden" aria-label="Open menu"><Menu /></Button></SheetTrigger>
            <SheetContent className="w-full border-0 bg-background p-8 sm:max-w-md">
              <SheetTitle className="flex items-center gap-4 font-display text-3xl uppercase"><img src={logoDark} alt="Toco Speciality logo" width={749} height={749} className="h-12 w-12" />Toco Speciality</SheetTitle>
              <nav className="mt-16 flex flex-col" aria-label="Mobile navigation">
                {navItems.map((item, index) => <SheetClose asChild key={item.label}><a href={item.href} className="display-type border-t border-border py-5 text-4xl">0{index + 1} / {item.label}</a></SheetClose>)}
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <div id="top" className="relative z-10 flex min-h-[calc(92svh-73px)] flex-col justify-end px-5 pb-8 pt-24 sm:px-8 lg:px-12 lg:pb-10">
          <p className="reveal-up mb-5 text-xs font-bold uppercase tracking-widest">SPECIALITY COFFEE · ADDIS ABABA</p>
          <h1 aria-label="Coffee, considered." className="display-type max-w-[1400px] text-[clamp(3.25rem,13vw,12rem)]"><HeroLine text="Coffee," /><HeroLine text="considered." offset={7} /></h1>
          <div className="mt-7 grid gap-6 border-t border-primary-foreground/35 pt-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <p className="max-w-xl text-base leading-relaxed sm:text-xl">Coffee with clarity. Food with character. A place made for mornings that turn into afternoons.</p>
            <a href="#story" className="group flex items-center gap-3 text-sm font-bold uppercase"><span>Discover Toco</span><ArrowDown className="transition-transform group-hover:translate-y-1" /></a>
          </div>
        </div>
      </section>

      <section id="story" className="grid min-h-[72svh] items-center gap-12 bg-cream px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-32">
        <div>
          <p className="mb-8 text-xs font-bold uppercase tracking-widest">Made with intention</p>
          <h2 className="display-type max-w-4xl text-[clamp(3.4rem,8vw,8rem)]">A quiet ritual.<br />A bold cup.</h2>
        </div>
        <div className="lg:max-w-xl lg:justify-self-end">
           <p className="text-xl leading-relaxed sm:text-2xl">Toco is an everyday meeting place shaped by origin-led coffee, seasonal plates, and warm Ethiopian hospitality.</p>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">We source with care, roast for sweetness, and keep the menu honest. Nothing overworked. Everything worth returning for.</p>
          <Button asChild variant="editorialOutline" size="lg" className="mt-9"><a href="#menu">Explore the menu <ArrowUpRight /></a></Button>
        </div>
      </section>

      <section id="menu" className="bg-light px-5 py-20 text-foreground sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-foreground/25 pb-6">
          <h2 className="display-type text-[clamp(3.8rem,9vw,9rem)]">The Toco table</h2>
          <span className="hidden text-sm uppercase sm:block">All day · Every day</span>
        </div>
        <div className="image-zoom relative aspect-[4/3] lg:aspect-[16/8]">
          <img src={tableImage} alt="Coffee, pastries and breakfast plates served at Toco" width={1408} height={1200} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute bottom-0 left-0 bg-background px-5 py-4 text-foreground sm:px-8 sm:py-6">
            <p className="font-display text-2xl uppercase sm:text-4xl">Breakfast that stays for lunch</p>
          </div>
        </div>
      </section>

      <section className="grid bg-secondary lg:grid-cols-2">
        <div className="flex min-h-[600px] flex-col justify-between p-5 py-20 sm:p-10 lg:p-12 lg:py-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">House ritual / 01</span>
            <h2 className="display-type mt-8 text-[clamp(4rem,8vw,8.5rem)]">Pour.<br />Pause.<br />Repeat.</h2>
          </div>
          <div className="mt-16 max-w-xl">
            <p className="text-xl leading-relaxed">From bright filter coffee to deep, velvety espresso—each cup starts with a conversation between farmer, roaster, and barista.</p>
            <Button asChild variant="editorial" size="lg" className="mt-8"><a href="#visit">Meet us at the bar <ArrowUpRight /></a></Button>
          </div>
        </div>
        <div className="image-zoom min-h-[600px]"><img src={coffeeImage} alt="Latte art being poured by a Toco barista" width={1200} height={1504} loading="lazy" className="h-full w-full object-cover" /></div>
      </section>

      <section className="grid bg-background lg:grid-cols-[1.05fr_.95fr]">
        <div className="image-zoom min-h-[540px] lg:order-1"><img src={pastriesImage} alt="Freshly baked pastries at the Toco counter" width={1408} height={1104} loading="lazy" className="h-full w-full object-cover" /></div>
        <div className="flex min-h-[540px] flex-col justify-between p-5 py-20 sm:p-10 lg:order-2 lg:p-12 lg:py-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Baked here / 02</span>
            <h2 className="display-type mt-8 text-[clamp(4rem,8vw,8.5rem)]">Good things,<br />still warm.</h2>
          </div>
          <p className="mt-16 max-w-xl text-xl leading-relaxed">Our counter changes with the morning: laminated pastries, soft buns, and a few unexpected flavours from the region.</p>
        </div>
      </section>

      <section id="journal" className="bg-primary px-5 py-24 text-primary-foreground sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-widest">Now at Toco</p>
            <h2 className="display-type text-[clamp(4rem,9vw,9rem)]">Long<br />weekends.</h2>
          </div>
          <div className="border-t border-primary-foreground/30 pt-8">
            <p className="max-w-2xl text-2xl leading-relaxed sm:text-4xl">Late breakfast, a second cup, and nowhere else you need to be.</p>
            <p className="mt-8 max-w-lg text-primary-foreground/70">Join us Friday and Saturday for extended brunch plates and a rotating guest coffee served until late afternoon.</p>
          </div>
        </div>
      </section>

      <section id="visit" className="bg-cream px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <h2 className="display-type text-center text-[clamp(4.5rem,12vw,12rem)]">Come by.</h2>
        <div className="mx-auto mt-16 grid max-w-6xl gap-px bg-border md:grid-cols-3">
          <div className="bg-light p-8"><MapPin className="mb-8 text-accent" /><p className="text-xs font-bold uppercase tracking-widest">Find us</p><p className="mt-3 text-lg">Addis Ababa, Ethiopia</p></div>
          <div className="bg-light p-8"><Clock3 className="mb-8 text-accent" /><p className="text-xs font-bold uppercase tracking-widest">Open daily</p><p className="mt-3 text-lg">7:00 AM — 11:00 PM</p></div>
          <div className="bg-light p-8"><Instagram className="mb-8 text-accent" /><p className="text-xs font-bold uppercase tracking-widest">Follow along</p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:text-accent">@tocospeciality <ArrowUpRight className="size-4" /></a></div>
        </div>
      </section>

      <footer className="bg-primary px-5 py-12 text-primary-foreground sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-primary-foreground/25 pb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex items-center gap-5"><img src={logoLight} alt="Toco Speciality logo" width={749} height={749} loading="lazy" className="h-24 w-24 sm:h-28 sm:w-28" /><p className="display-type text-4xl sm:text-6xl">Toco Speciality</p></div>
          <a href="#top" className="flex items-center gap-2 text-sm font-bold uppercase">Back to top <ArrowDown className="rotate-180" /></a>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs uppercase text-primary-foreground/60 sm:flex-row sm:justify-between"><span>© 2026 Toco Speciality</span><span>COFFEE · FOOD · ADDIS ABABA</span></div>
      </footer>
    </main>
  );
}
