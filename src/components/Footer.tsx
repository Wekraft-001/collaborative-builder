import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Footer = () => {
  return (
    <footer className="bg-[#3C91BA]/10 text-secondary-foreground">
      {/* CTA Banner */}
      <div className="bg-gradient-hero text-white py-16 px-4">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Join us in shaping Africa's future.
            <br />
            One child, one laptop at a time.
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Every device donated, every dollar contributed, every partnership
            formed creates ripples of change that reach far beyond what we can
            imagine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Donate a Device
            </Button>
            <Button
              variant="impact"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Make a Financial Gift
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">SkillSeed for All</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Bridging the digital divide across Africa, one child at a time.
                Every contribution creates lasting change in communities.
              </p>
              <div className="pt-4">
                <div className="text-sm text-secondary-foreground/60 space-y-1">
                  <p>🌍 Operating across Rwanda</p>
                  <p>📈 500+ children impacted</p>
                  <p>🏫 50+ schools connected</p>
                </div>
              </div>
            </div>

            {/* Ways to Help */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ways to Help</h3>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Donate Old Devices
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Financial Contributions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Corporate Partnerships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Volunteer Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Spread Awareness
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Impact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Our Impact</h3>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Annual Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    School Partnerships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Program Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary-foreground transition-colors"
                  >
                    Transparency Reports
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Connect */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Connect With Us</h3>
              <div className="space-y-3">
                <p className="text-secondary-foreground/80">
                  📧 skillseed@wekraft.co
                </p>
                {/* <p className="text-secondary-foreground/80">
                  📱 +250793177089 / +250787161453
                </p> */}
                <p className="text-secondary-foreground/80">
                  📍 Kigali, Rwanda
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-4 space-y-2">
                <p className="text-sm font-semibold">Follow Our Journey</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/wekraft-ltd"
                    target="_blank"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-secondary-light/20 border-secondary-foreground/20"
                    >
                      LinkedIn
                    </Button>
                  </a>

                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-secondary-light/20 border-secondary-foreground/20"
                  >
                    Twitter
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-secondary-light/20 border-secondary-foreground/20"
                  >
                    Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © 2025 SkillSeed for All. Building futures through technology
              access.
            </p>
            <div className="flex gap-6 text-sm text-secondary-foreground/60">
              <a
                href="#"
                className="hover:text-secondary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-secondary-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-secondary-foreground transition-colors"
              >
                Impact Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
