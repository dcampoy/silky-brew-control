import { Coffee, Gauge, ThermometerSun, Timer } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Intuitive Interface",
    description: "Simple controls that don't compromise on functionality. Perfect for both beginners and experts."
  },
  {
    icon: Gauge,
    title: "Pressure Control",
    description: "Fine-tune your extraction pressure from 0-12 bars for the perfect crema."
  },
  {
    icon: ThermometerSun,
    title: "Temperature Stability",
    description: "PID temperature control ensures consistent brewing temperature, shot after shot."
  },
  {
    icon: Timer,
    title: "Pre-Infusion Timer",
    description: "Customize your pre-infusion time for optimal flavor extraction."
  }
];

export const FeaturesSection = () => {
  return (
    <div className="bg-coffee-dark py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-cream text-center mb-16">
          Precision Made Simple
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-coffee-medium/20 p-6 rounded-lg hover:bg-coffee-medium/30 transition-colors"
            >
              <feature.icon className="h-12 w-12 text-coffee-cream mb-4" />
              <h3 className="text-xl font-semibold text-coffee-cream mb-2">
                {feature.title}
              </h3>
              <p className="text-coffee-cream/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};