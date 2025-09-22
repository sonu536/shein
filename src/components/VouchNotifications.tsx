import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const VouchNotifications: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    "Emma just claimed her $750 Gift Card",
    "James just claimed his $750 Gift Card", 
    "Sophie just claimed her $750 Gift Card",
    "Ryan just claimed his $750 Gift Card",
    "Chloe just claimed her $750 Gift Card",
    "Oliver just claimed his $750 Gift Card",
    "Ava just claimed her $750 Gift Card",
    "Lucas just claimed his $750 Gift Card"
  ];

  useEffect(() => {
    let currentIndex = 0;
    
    const cycle = () => {
      setCurrentNotification(notifications[currentIndex]);
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      
      // Show next notification after 8 seconds gap (total 13 seconds)
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % notifications.length;
        cycle();
      }, 13000);
    };

    // Start the cycle after initial delay
    setTimeout(cycle, 2000);
    
    return () => {};
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div
        className={`
          bg-black/80 backdrop-blur-sm border border-pink-400/30 rounded-lg p-4 
          shadow-2xl max-w-sm transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
        style={{
          boxShadow: '0 0 30px rgba(244, 63, 94, 0.3), inset 0 0 20px rgba(244, 63, 94, 0.1)',
        }}
      >
        <div className="flex items-center gap-3">
          <CheckCircle 
            className="w-5 h-5 text-pink-400 flex-shrink-0"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.6))',
            }}
          />
          <p className="text-white text-sm font-medium">
            {currentNotification}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VouchNotifications;