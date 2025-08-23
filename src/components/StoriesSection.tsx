import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stories = [
  {
    name: "Amara",
    age: 12,
    location: "Kigali, Rwanda",
    story: "Before SkillSeed, I only dreamed of using a computer. Now I'm learning to code and building my first website about protecting our environment. My teacher says I could become a software engineer!",
    impact: "First in her family to use a computer",
    quote: "Technology opened a door I didn't know existed.",
    avatar: "👧🏾"
  },
  {
    name: "Emmanuel",
    age: 14,
    location: "Butare, Rwanda", 
    story: "My school received 10 refurbished laptops last year. I learned graphic design and created posters for our community health campaign. Now I want to study digital marketing at university.",
    impact: "Discovered his passion for digital arts",
    quote: "I'm designing my future, one pixel at a time.",
    avatar: "👦🏾"
  },
  {
    name: "Grace",
    age: 13,
    location: "Musanze, Rwanda",
    story: "Through SkillSeed, I learned about data science and started tracking rainfall patterns in our village. My project helped farmers plan better crops. I want to become an environmental scientist.",
    impact: "Using tech to solve local problems",
    quote: "Data can tell stories that help our community.",
    avatar: "👧🏿"
  }
];

export const StoriesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Stories of 
            <span className="gradient-text"> Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the children whose lives have been changed through your generosity and support
          </p>
        </div>
        
        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <Card 
              key={index}
              className="impact-card p-6 space-y-6 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-elevated"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{story.avatar}</div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">Age {story.age} • {story.location}</p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-primary font-semibold italic border-l-4 border-primary pl-4">
                "{story.quote}"
              </blockquote>
              
              {/* Story */}
              <p className="text-muted-foreground leading-relaxed">
                {story.story}
              </p>
              
              {/* Impact Badge */}
              <div className="bg-gradient-warm p-3 rounded-lg">
                <p className="text-white text-sm font-medium">
                  ✨ {story.impact}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Impact Statistics */}
        <Card className="p-8 bg-gradient-hero text-white shadow-warm">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Building Trust Through Transparency
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-light mb-2">95%</div>
                <p className="text-white/90 text-sm">of donated devices reach classrooms within 30 days</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-light mb-2">100%</div>
                <p className="text-white/90 text-sm">transparency with regular impact reports</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-light mb-2">500+</div>
                <p className="text-white/90 text-sm">success stories and counting</p>
              </div>
            </div>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 mt-6">
              Read More Success Stories
            </Button>
          </div>
        </Card>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Your Story Starts Here
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of donors who are already creating these transformation stories. 
            Your contribution could be the catalyst for the next breakthrough.
          </p>
          <Button variant="hero" size="xl">
            Create Your Impact Story
          </Button>
        </div>
      </div>
    </section>
  );
};