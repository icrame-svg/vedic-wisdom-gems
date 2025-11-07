import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const [showMantra, setShowMantra] = useState(false);

  useEffect(() => {
    // Show mantra after 1 second
    const mantraTimer = setTimeout(() => {
      setShowMantra(true);
    }, 1000);

    // Complete loading after 3 seconds
    const completeTimer = setTimeout(() => {
      onLoadComplete();
    }, 3500);

    return () => {
      clearTimeout(mantraTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-secondary via-secondary/95 to-planetary animate-fade-in">
      {/* Mandala Pattern Background */}
      <div className="absolute inset-0 pattern-mandala opacity-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Rotating Om Symbol */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-accent animate-rotate-slow inline-block">
            ॐ
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border-2 border-accent/30 animate-pulse" />
          </div>
        </div>

        {/* Gayatri Mantra */}
        {showMantra && (
          <div className="animate-fade-in text-primary-foreground/90 font-serif">
            <p className="text-2xl md:text-3xl mb-2">
              ॐ भूर्भुवः स्वः
            </p>
            <p className="text-lg md:text-xl">
              तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि
            </p>
            <p className="text-lg md:text-xl">
              धियो यो नः प्रचोदयात् ॥
            </p>
          </div>
        )}

        {/* Loading dots */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};
