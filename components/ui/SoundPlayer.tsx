'use client';

import { useEffect, useRef, useState } from 'react';

export default function SoundPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const interactionAttempted = useRef(false);

  useEffect(() => {
    const playSound = async () => {
      if (audioRef.current && !hasPlayed) {
        try {
          audioRef.current.volume = 0.15; // Set volume to 15%
          audioRef.current.currentTime = 0; // Reset to start
          await audioRef.current.play();
          setHasPlayed(true);
          setShowPrompt(false);
        } catch (error) {
          console.log('Autoplay prevented, waiting for user interaction');
          // Show prompt after a delay if autoplay failed
          setTimeout(() => {
            if (!hasPlayed) {
              setShowPrompt(true);
            }
          }, 1000);
        }
      }
    };

    // Try autoplay with a small delay
    const timer = setTimeout(() => {
      playSound();
    }, 100);

    // Fallback: play on first user interaction if autoplay was blocked
    const handleInteraction = async () => {
      if (!hasPlayed && audioRef.current && !interactionAttempted.current) {
        interactionAttempted.current = true;
        try {
          audioRef.current.volume = 0.15;
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
          setHasPlayed(true);
          setShowPrompt(false);
        } catch (error) {
          console.log('Failed to play audio on interaction');
        }
      }
    };

    // Add multiple event listeners for better mobile support
    const events = ['click', 'touchstart', 'touchend', 'keydown', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { passive: true });
    });

    return () => {
      clearTimeout(timer);
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, [hasPlayed]);

  return (
    <>
      {showPrompt && (
        <div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full text-sm backdrop-blur-sm z-50 animate-pulse"
          onClick={() => setShowPrompt(false)}
        >
          🔊 Tap anywhere to enable sound
        </div>
      )}
      <audio
        ref={audioRef}
        preload="auto"
        className="hidden"
      >
        <source src="/sounds/welcome.mp3" type="audio/mpeg" />
        <source src="/sounds/welcome.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
