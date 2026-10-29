import React, { useState, useEffect } from 'react';

interface StartupAnimationProps {
  onComplete?: () => void;
}

export const StartupAnimation: React.FC<StartupAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'visible' | 'exit' | 'done'>('enter');

  useEffect(() => {
    // Stage 1: Entrance
    const t1 = setTimeout(() => {
      setPhase('visible');
    }, 100);

    // Stage 2: Start smooth fade out
    const t2 = setTimeout(() => {
      setPhase('exit');
    }, 2000);

    // Stage 3: Complete & unmount
    const t3 = setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-800 ease-in-out select-none ${
        phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center text-center px-6">
        {/* DTS Logo */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            phase === 'enter'
              ? 'opacity-0 scale-90 translate-y-3'
              : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <img
            src="images/branding/dts-globe-logo.png"
            alt="Dynamic Tooling Systems Logo"
            className="h-24 sm:h-28 w-auto object-contain mb-6 drop-shadow-sm"
          />
        </div>

        {/* Text: Dynamic Tooling Systems Welcomes You */}
        <div
          className={`transition-all duration-700 delay-200 ease-out transform ${
            phase === 'enter'
              ? 'opacity-0 translate-y-3'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101D2D] tracking-tight">
            Dynamic Tooling Systems
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#2563EB] mt-2 tracking-wide">
            Welcomes You
          </p>
        </div>
      </div>
    </div>
  );
};
