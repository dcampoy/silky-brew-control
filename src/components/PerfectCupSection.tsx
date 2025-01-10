import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PerfectCupSection = () => {
  return (
    <div className="bg-coffee-medium py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3"
                alt="Perfect espresso cup"
                className="rounded-lg shadow-xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 to-transparent rounded-lg" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-cream mb-6">
              Your Perfect Cup Awaits
            </h2>
            <p className="text-coffee-cream/80 text-lg mb-8">
              Whether you prefer a rich ristretto or a perfectly balanced espresso, 
              our machine gives you the control to achieve your ideal extraction. 
              Experiment with different parameters to discover your signature brew.
            </p>
            <Button 
              size="lg"
              className="bg-coffee-cream text-coffee-dark hover:bg-coffee-cream/90"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};