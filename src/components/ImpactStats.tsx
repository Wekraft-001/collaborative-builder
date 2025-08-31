import { Card } from "@/components/ui/card";

const stats = [
  {
    number: "1",
    description: "donated laptop = 1 classroom connected",
    icon: "💻",
    gradient: "from-primary to-primary-light"
  },
  {
    number: "$100",
    description: "= 1 refurbished computer ready for learning",
    icon: "🔧",
    gradient: "from-secondary to-secondary-light"
  },
  {
    number: "50+",
    description: "schools across Rwanda already participating",
    icon: "🏫",
    gradient: "from-accent to-accent-light"
  },
  {
    number: "500+",
    description: "children discovering their digital potential",
    icon: "✨",
    gradient: "from-primary to-accent"
  }
];

export const ImpactStats = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your Impact in 
            <span className="text-secondary"> Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how your contribution creates ripples of change across communities
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="impact-card p-8 text-center bg-card/80 backdrop-blur-sm border-0 shadow-soft hover:shadow-elevated"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                backgroundImage: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--muted)) 100%)`
              }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="text-4xl mb-4">{stat.icon}</div>
                
                {/* Number */}
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to be part of this transformation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-1 bg-gradient-hero shadow-warm">
              <div className="bg-card rounded-lg p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Join the Movement</h3>
                <p className="text-sm text-muted-foreground">
                  Every contribution matters, no matter the size
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};