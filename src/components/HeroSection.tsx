import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/90 to-coffee-dark/70 z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3')] bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The best espresso you can have in your home
          </h1>
          <p className="text-xl md:text-2xl text-coffee-cream mb-8">
            Precision meets simplicity in our manual espresso machine. Take
            control of every variable while enjoying an intuitive brewing
            experience.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-coffee-cream text-coffee-dark hover:bg-coffee-cream/90"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
