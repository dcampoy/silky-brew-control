import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const specifications = [
  {
    category: "Temperature",
    range: "86°C - 96°C",
    precision: "±0.1°C",
    description: "PID-controlled temperature stability"
  },
  {
    category: "Pressure",
    range: "0-12 bar",
    precision: "±0.1 bar",
    description: "Variable pressure profiling"
  },
  {
    category: "Pre-Infusion",
    range: "0-60 seconds",
    precision: "±0.1s",
    description: "Customizable pre-infusion timing"
  },
  {
    category: "Shot Timer",
    range: "0-120 seconds",
    precision: "±0.1s",
    description: "Precise extraction timing"
  }
];

export const SpecificationsSection = () => {
  return (
    <div className="bg-gradient-to-b from-coffee-dark to-coffee-medium py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-cream text-center mb-6">
          Technical Specifications
        </h2>
        <p className="text-coffee-cream/80 text-center max-w-2xl mx-auto mb-16">
          Take full control of your extraction with our precise adjustment capabilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specifications.map((spec) => (
            <Card key={spec.category} className="bg-coffee-dark/50 border-coffee-cream/20">
              <CardHeader>
                <CardTitle className="text-coffee-cream">{spec.category}</CardTitle>
                <CardDescription className="text-coffee-cream/60">
                  {spec.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-coffee-cream">
                    <span className="font-semibold">Range:</span> {spec.range}
                  </div>
                  <div className="text-coffee-cream">
                    <span className="font-semibold">Precision:</span> {spec.precision}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};