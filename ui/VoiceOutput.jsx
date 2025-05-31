import React, { useEffect } from 'react';

/**
 * VoiceOutput: Text-to-speech output for JAMAI.
 * Accepts text (string) and autoSpeak (bool) to trigger TTS.
 */
export default function VoiceOutput({ text, autoSpeak = false }) {
  useEffect(() => {
    if (autoSpeak && text) {
      if ('speechSynthesis' in window) {
        const utter = new window.SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utter);
      }
    }
  }, [text, autoSpeak]);
  return null;
}
