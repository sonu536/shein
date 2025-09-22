import React from 'react';
import { MousePointer, Gift, Smartphone } from 'lucide-react';

const StepsSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: MousePointer,
      title: "Click the Button",
      description: "Tap the glowing button above to begin your journey"
    },
    {
      number: 2,
      icon: Smartphone,
      title: "Complete Quick Survey",
      description: "Answer a few simple questions about your preferences"
    },
    {
      number: 3,
      icon: Gift,
      title: "Claim Your Reward",
      description: "Receive your $750 gift card instantly via email"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.number}
              className="text-center group"
            >
              {/* Step Number */}
              <div
                className="
                  w-16 h-16 mx-auto mb-6 rounded-full bg-black/50 border-2 border-pink-400/50
                  flex items-center justify-center relative overflow-hidden
                  transition-all duration-500 group-hover:scale-110
                "
                style={{
                  boxShadow: '0 0 30px rgba(244, 63, 94, 0.4), inset 0 0 20px rgba(244, 63, 94, 0.2)',
                }}
              >
                <span 
                  className="text-2xl font-bold text-white"
                  style={{
                    textShadow: '0 0 10px rgba(244, 63, 94, 0.8)',
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <IconComponent 
                  className="w-8 h-8 mx-auto text-pink-400 transition-all duration-500 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(244, 63, 94, 0.6))',
                  }}
                />
              </div>

              {/* Title */}
              <h3 
                className="text-xl font-semibold text-white mb-3"
                style={{
                  textShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepsSection;