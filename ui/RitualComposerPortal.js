import React, { useState } from 'react';
import MultimodalInput from './MultimodalInput';
import MediaPreview from './MediaPreview';
import VoiceOutput from './VoiceOutput';
import PersonaManager from './PersonaManager';
import SessionManager from './SessionManager';

/**
 * RitualComposerPortal: Main portal for ABC editing, preview, persona/session, and multimodal input.
 * Integrates persona/session management, multimodal input/output, and media preview.
 */
export default function RitualComposerPortal() {
  const [activePersona, setActivePersona] = useState('mia');
  const [session, setSession] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [ttsText, setTtsText] = useState('');
  const [ttsSpeak, setTtsSpeak] = useState(false);

  // Handle session change (from SessionManager)
  const handleSessionChange = (s) => {
    setSession(s);
    if (s && s.activePersona) setActivePersona(s.activePersona);
  };

  // Handle multimodal input
  const handleInput = (type, value) => {
    setInputType(type);
    if (type === 'text' || type === 'voice') {
      setInputValue(value);
      setTtsText(value); // Optionally echo as TTS
      setTtsSpeak(true);
      setMediaFile(null);
    } else if (type === 'audio' || type === 'image' || type === 'file') {
      setMediaFile(value);
      setInputValue('');
      setTtsText('');
      setTtsSpeak(false);
    }
  };

  return (
    <div className="jamai-ritual-composer-portal" style={{ padding: 16, maxWidth: 600, margin: '0 auto' }}>
      <SessionManager onSessionChange={handleSessionChange} />
      <PersonaManager activePersona={activePersona} onPersonaChange={setActivePersona} />
      <div style={{ margin: '16px 0' }}>
        <MultimodalInput onInput={handleInput} />
      </div>
      {mediaFile && (
        <MediaPreview file={mediaFile} type={inputType} />
      )}
      <VoiceOutput text={ttsText} autoSpeak={ttsSpeak} />
      {/* TODO: Integrate ABC editor, preview, mood detection, error overlays */}
      <div style={{ marginTop: 24, color: '#888', fontSize: 13 }}>
        <em>Persona-aware, multimodal ritual composer. Next: ABC editor, mood detection, and real-time feedback.</em>
      </div>
    </div>
  );
}
