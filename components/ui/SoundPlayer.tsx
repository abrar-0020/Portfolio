'use client';

import { useEffect, useRef, useState } from 'react';

export default function SoundPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const playSound = () => {
      if (audioRef.current && !hasInteracted) {
        audioRef.current.volume = 0.3; // Set volume to 30%
        audioRef.current.play().catch((error) => {
          console.log('Autoplay prevented:', error);
          // If autoplay fails, wait for user interaction
        });
        setHasInteracted(true);
      }
    };

    // Try to play immediately
    playSound();

    // Fallback: play on first user interaction if autoplay was blocked
    const handleInteraction = () => {
      playSound();
      // Remove listeners after first interaction
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasInteracted]);

  return (
    <audio
      ref={audioRef}
      preload="auto"
      className="hidden"
    >
      <source src="/sounds/welcome.mp3" type="audio/mpeg" />
      <source src="/sounds/welcome.ogg" type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>
  );
}
