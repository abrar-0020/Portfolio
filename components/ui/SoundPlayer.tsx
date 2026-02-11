'use client';

import { useEffect, useRef, useState } from 'react';

export default function SoundPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const playSound = async () => {
      if (audioRef.current && !hasPlayed) {
        try {
          audioRef.current.volume = 0.01; // Set volume to 1%
          audioRef.current.currentTime = 0; // Reset to start
          await audioRef.current.play();
          setHasPlayed(true);
        } catch (error) {
          console.log('Autoplay prevented, waiting for user interaction');
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      playSound();
    }, 100);

    // Fallback: play on first user interaction if autoplay was blocked
    const handleInteraction = () => {
      if (!hasPlayed && audioRef.current) {
        audioRef.current.volume = 0.01;
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => {
          setHasPlayed(true);
        }).catch(() => {});
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasPlayed]);

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
