import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import laptopRefurbishment from "@/assets/laptop-refurbishment.jpg";
import familyLearning from "@/assets/family-learning.jpg";
import corporateDonation from "@/assets/corporate-donation.jpg";

const helpOptions = [
  {
    title: "Donate Old Computers & Laptops",
    description: "Your unused devices can find new life in the hands of eager learners. We work with partners to refurbish donated laptops and place them in schools that otherwise couldn't access SkillSeed.",
    image: laptopRefurbishment,
    buttonText: "Donate a Device",
    buttonVariant: "hero" as const,
    steps: [
      "Contact our team to arrange pickup",
      "We assess and refurbish your device",
      "Device gets placed in a partnered school",
      "Receive updates on its impact"
    ]
  },
  {
    title: "Support with Funds",
    description: "Refurbishing a laptop or subsidizing access for a child takes resources. Your financial gift helps cover refurbishment costs and provides scholarships to children whose families cannot afford the program.",
    image: familyLearning,
    buttonText: "Make a Donation",
    buttonVariant: "donate" as const,
    steps: [
      "Choose your contribution amount",
      "Select specific programs to support", 
      "Get matched with a child or school",
      "Receive progress reports and updates"
    ]
  },
  {
    title: "Parents, You're Already Helping",
    description: "When you subscribe to SkillSeed for your child, a small percentage of your payment directly supports access for children in need. Every subscription is not just an investment in your own child—it's a ripple of hope that reaches another.",
    image: corporateDonation,
    buttonText: "Corporate Partnership",
    buttonVariant: "sponsor" as const,
    steps: [
      "Partner with us as a corporate sponsor",
      "Organize employee device drives",
      "Sponsor entire classrooms or schools",
      "Build your CSR impact story"
    ]
  }
];

export const HowToHelp = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How You Can 
            <span className="gradient-text"> Make a Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Together, we can ensure that no child is excluded from discovering their passions, building skills, and preparing for the jobs of tomorrow.
          </p>
        </div>
        
        {/* Help Options */}
        <div className="space-y-16">
          {helpOptions.map((option, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Image */}
              <div className="flex-1">
                <Card className="overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Card>
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {option.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
                
                {/* Steps */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">How it works:</h4>
                  <ul className="space-y-2">
                    {option.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                          {stepIndex + 1}
                        </div>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant={option.buttonVariant}
                  size="lg"
                  className="mt-6"
                >
                  {option.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <Card className="p-8 bg-gradient-hero text-white shadow-elevated max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Light Up a Child's Future?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Every action you take creates a ripple of hope across Africa. Start your impact journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More About Our Impact
              </Button>
              <Button variant="impact" size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Making a Difference
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};