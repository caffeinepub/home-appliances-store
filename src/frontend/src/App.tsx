import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  ShoppingCart,
  Star,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Smart Refrigerator",
    description: "Keep your food fresher longer with smart temperature control",
    price: "$1,299",
    image: "/assets/generated/refrigerator.dim_400x400.png",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Front-Load Washer",
    description: "Energy-efficient cleaning for the whole family",
    price: "$849",
    image: "/assets/generated/washing-machine.dim_400x400.png",
    badge: "Energy A+++",
  },
  {
    id: 3,
    name: "Smart Oven",
    description: "Precision cooking with intuitive digital controls",
    price: "$999",
    image: "/assets/generated/oven.dim_400x400.png",
    badge: "New",
  },
  {
    id: 4,
    name: "Robot Vacuum",
    description: "Autonomous cleaning that adapts to your home",
    price: "$449",
    image: "/assets/generated/vacuum.dim_400x400.png",
    badge: "Popular",
  },
];

const testimonials = [
  {
    name: "Catherine Morrison",
    location: "San Francisco, CA",
    rating: 5,
    text: "The smart refrigerator has completely transformed how I manage groceries. The temperature zones are perfect and the energy savings are remarkable.",
    initials: "CM",
  },
  {
    name: "James Harrington",
    location: "Austin, TX",
    rating: 5,
    text: "Delivery was seamless and the installation team was professional. My new washer is whisper-quiet and cuts my utility bills in half.",
    initials: "JH",
  },
  {
    name: "Priya Nair",
    location: "New York, NY",
    rating: 5,
    text: "Exceptional quality. The smart oven has 30+ cooking presets and the auto-clean feature is a game-changer. Worth every penny.",
    initials: "PN",
  },
];

const STAR_POSITIONS = [1, 2, 3, 4, 5];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-copper-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-display text-xl tracking-tight transition-colors font-bold ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              HomeApply
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["products", "features", "reviews", "contact"].map((id) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium capitalize transition-colors hover:text-copper-500 ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
                data-ocid={`nav.${id}.link`}
              >
                {id === "features"
                  ? "Why Us"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Cart + Mobile */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className={`relative p-2 rounded-full transition-colors hover:bg-white/10 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-copper-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className={`md:hidden p-2 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 space-y-3">
            {["products", "features", "reviews", "contact"].map((id) => (
              <button
                type="button"
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left py-2 text-sm font-medium capitalize text-foreground hover:text-copper-500 transition-colors"
              >
                {id === "features"
                  ? "Why Us"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-kitchen.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-copper-500/20 text-copper-200 border-copper-500/30 backdrop-blur-sm">
              ✦ Free Installation on Orders Over $500
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Premium Appliances
              <br />
              <em className="not-italic text-gradient">for Modern Living</em>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Elevate your home with intelligent appliances engineered for
              performance, efficiency, and lasting elegance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-copper-500 hover:bg-copper-600 text-white font-semibold px-8 h-12 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollTo("products")}
                data-ocid="hero.primary_button"
              >
                Shop Now
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-8 h-12 text-base rounded-full backdrop-blur-sm transition-all"
                onClick={() => scrollTo("features")}
                data-ocid="hero.secondary_button"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-copper-50 text-copper-600 border-copper-200">
              Our Collection
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Each appliance is crafted for those who refuse to compromise on
              quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="bg-card rounded-2xl border border-border overflow-hidden card-hover shadow-product group"
                data-ocid={`products.item.${i + 1}`}
              >
                <div className="relative bg-secondary p-6 flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-copper-500 text-white border-0 text-xs">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-base mb-1">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-copper-500 hover:bg-copper-600 text-white rounded-full px-4"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-copper-50 text-copper-600 border-copper-200">
              The HomeApply Promise
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              More than appliances — a commitment to your home and peace of
              mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Delivery",
                desc: "Complimentary white-glove delivery on every order. We handle everything from doorstep to installation.",
                detail: "Ships within 2 business days",
              },
              {
                icon: Shield,
                title: "5-Year Warranty",
                desc: "Every appliance comes with an industry-leading 5-year comprehensive warranty, covering parts and labor.",
                detail: "Hassle-free claims",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                desc: "Our expert support team is available around the clock to assist with setup, troubleshooting, and advice.",
                detail: "Average 2-min response time",
              },
            ].map(({ icon: Icon, title, desc, detail }) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-8 border border-border shadow-product card-hover text-center group"
              >
                <div className="w-14 h-14 bg-copper-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-copper-500 transition-colors">
                  <Icon className="w-7 h-7 text-copper-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {desc}
                </p>
                <span className="text-xs font-semibold text-copper-500 bg-copper-50 border border-copper-100 px-3 py-1 rounded-full">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-20 offer-gradient relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-copper-500/10 rounded-full blur-3xl" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-copper-500/20 text-copper-300 border-copper-500/30">
                Limited Time Offer
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Get 20% Off
                <br />
                <span className="text-copper-300">All Appliances</span>
              </h2>
              <p className="text-white/70 text-lg">
                Plus complimentary professional installation — today only.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-6">
                <p className="text-white/60 text-sm mb-1">
                  Use code at checkout
                </p>
                <p className="font-display text-4xl font-bold text-copper-300 tracking-widest">
                  HOME20
                </p>
              </div>
              <Button
                size="lg"
                className="bg-copper-500 hover:bg-copper-400 text-white font-semibold px-10 text-base rounded-full shadow-lg transition-all"
                onClick={() => scrollTo("products")}
                data-ocid="offer.primary_button"
              >
                Claim Offer
                <Zap className="ml-2 w-4 h-4" />
              </Button>
              <p className="text-white/40 text-xs mt-3">
                Offer expires midnight tonight
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-copper-50 text-copper-600 border-copper-200">
              Customer Stories
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Loved by Homeowners
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Join 50,000+ satisfied customers who&apos;ve transformed their
              homes with HomeApply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-8 border border-border shadow-product card-hover relative"
                data-ocid={`reviews.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-5">
                  {STAR_POSITIONS.slice(0, t.rating).map((pos) => (
                    <Star
                      key={pos}
                      className="w-4 h-4 fill-copper-400 text-copper-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-copper-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {t.location}
                    </p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 text-copper-100 font-display text-6xl leading-none select-none">
                  &ldquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-copper-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-display text-xl font-bold">
                  HomeApply
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Premium home appliances engineered for modern living. Quality
                you can trust, delivered with care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5 text-copper-300">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Products", "Why Us", "Reviews", "Contact"].map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() =>
                        scrollTo(link.toLowerCase().replace(" ", ""))
                      }
                      className="text-white/50 text-sm hover:text-copper-300 transition-colors"
                      data-ocid={`footer.${link.toLowerCase().replace(" ", "-")}.link`}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-copper-300">
                Products
              </h4>
              <ul className="space-y-3">
                {[
                  "Smart Refrigerators",
                  "Washing Machines",
                  "Smart Ovens",
                  "Robot Vacuums",
                  "Dishwashers",
                ].map((item) => (
                  <li key={item}>
                    <span className="text-white/50 text-sm hover:text-copper-300 transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-copper-300">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-copper-400 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">
                    +1 (800) 555-HOME
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-copper-400 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">
                    hello@homeapply.co
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-copper-400 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">
                    San Francisco, CA 94105
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              &copy; {new Date().getFullYear()} HomeApply. All rights reserved.
            </p>
            <p className="text-white/30 text-sm">
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="text-copper-400 hover:text-copper-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
