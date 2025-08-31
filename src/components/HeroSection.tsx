import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-children-learning.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="African children learning with laptops in a bright classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-accent/30 rounded-full animate-float"></div>
      <div
        className="absolute bottom-32 right-16 w-8 h-8 bg-primary-light/40 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent-light/50 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Every Child Deserves a
            <span className="block gradient-text bg-gradient-to-r from-accent-light to-primary-light bg-clip-text text-transparent">
              Chance to Dream
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Help us bridge the digital divide. Your contribution can light up a
            child's path to a future they never imagined.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0RE_gtyaMpSrcW8RoYDfd5c2O0xNBAqKsYDZpvFSspoeHCw/viewform?usp=header"
              target="_blank"
            >
              <Button
                variant="hero"
                size="xl"
                className="min-w-[200px] animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                Donate a Device
              </Button>
            </a>

            <Button
              variant="donate"
              size="xl"
              className="min-w-[200px] animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              Sponsor a Child
            </Button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSftyDcS_k4uVjUcJW7HhGOydJu2wI-FHxOh_Rl64B2414VdOw/viewform"
              target="_blank"
            >
              <Button
                variant="sponsor"
                size="xl"
                className="min-w-[200px] animate-slide-up"
                style={{ animationDelay: "0.9s" }}
              >
                Partner With Us
              </Button>
            </a>
          </div>

          {/* Impact Preview */}
          <div
            className="pt-12 animate-slide-up"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="text-white/80 text-sm uppercase tracking-wider font-semibold mb-4">
              Together We've Already Made an Impact
            </p>
            <div className="flex justify-center gap-8 md:gap-16 text-white">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-light">
                  500+
                </div>
                <div className="text-sm opacity-90">Children Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-light">
                  50+
                </div>
                <div className="text-sm opacity-90">Schools Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-light">
                  1000+
                </div>
                <div className="text-sm opacity-90">Devices Donated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};
