import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import CTAButton from './components/CTAButton';
import StepsSection from './components/StepsSection';
import VouchNotifications from './components/VouchNotifications';
import { Sparkles, MapPin } from 'lucide-react';

function App() {
  // You can customize this URL to your redirect link
  const REDIRECT_URL =
    'https://post.treazlo.com/go/575e29a9-8352-49d6-9418-ddda953373e5';

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(244, 63, 94, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
          `,
        }}
      />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="flex-grow flex flex-col justify-center items-center text-center px-6 py-20">
          {/* Hook Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex justify-center mb-6">
              <img
                src="/logo.webp"
                alt="Logo"
                className="w-16 md:w-16 lg:w-16"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(244, 63, 94, 0.8))',
                }}
              />
            </div>

            <h1
              className="
                text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6
                bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent
              "
              style={{
                textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                animationDuration: '3s',
              }}
            >
              Get Your $750
              <br />
              <span className="text-pink-400">Gift Card</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-300 mb-4 font-light max-w-3xl mx-auto leading-relaxed"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
              }}
            >
              Exclusive access to premium shopping rewards.
              <br />
              Join thousands who have already claimed theirs.
            </p>
          </div>

          {/* CTA Button */}
          <CTAButton href={REDIRECT_URL} />

          {/* Steps Section */}
          <StepsSection />
        </div>

        {/* Geographic Notice */}
        <div className="bg-black/40 backdrop-blur-sm border-t border-pink-400/20 py-8">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-4">
              <MapPin
                className="w-8 h-8 text-pink-400"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.6))',
                }}
              />
            </div>
            <h3
              className="text-2xl font-semibold text-white mb-3"
              style={{
                textShadow: '0 0 15px rgba(255, 255, 255, 0.3)',
              }}
            >
              Geographic Availability
            </h3>
            <p
              className="text-lg text-gray-300 leading-relaxed"
              style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              This exclusive offer is available to residents of the
              <span className="text-pink-400 font-semibold">
                {' '}
                United Kingdom
              </span>
              ,
              <span className="text-pink-400 font-semibold">
                {' '}
                United States
              </span>
              ,<span className="text-pink-400 font-semibold"> Canada</span>, and
              <span className="text-pink-400 font-semibold">
                {' '}
                Australia
              </span>{' '}
              only.
            </p>
          </div>
        </div>
      </div>

      {/* Vouch Notifications */}
      <VouchNotifications />
    </div>
  );
}

export default App;
