import React, { useState, useEffect } from 'react';
import { sessionMetadata as defaultSessionMetadata } from '../data/sessionMetadata';
import PersonaManager from './PersonaManager';

/**
 * SessionManager: Handles local/cloud session save/load and persona state for JAMAI.
 * Provides session metadata, active persona, and save/load controls.
 */
export default function SessionManager({ onSessionChange }) {
  const [session, setSession] = useState(() => {
    // Try to load from localStorage, else use default
    try {
      const saved = localStorage.getItem('jamai_session');
      return saved ? JSON.parse(saved) : { ...defaultSessionMetadata };
    } catch {
      return { ...defaultSessionMetadata };
    }
  });

  // Save session to localStorage on change
  useEffect(() => {
    localStorage.setItem('jamai_session', JSON.stringify(session));
    onSessionChange && onSessionChange(session);
  }, [session, onSessionChange]);

  // Persona switching
  const handlePersonaChange = (persona) => {
    setSession((s) => ({ ...s, activePersona: persona, timestamp: Date.now() }));
  };

  // Session save/load controls (cloud stub)
  const handleSave = () => {
    // Could add cloud save here
    alert('Session saved locally.');
  };
  const handleLoad = () => {
    try {
      const saved = localStorage.getItem('jamai_session');
      if (saved) setSession(JSON.parse(saved));
    } catch {}
  };

  return (
    <div className="jamai-session-manager">
      <PersonaManager activePersona={session.activePersona} onPersonaChange={handlePersonaChange} />
      <div style={{ margin: '8px 0' }}>
        <button onClick={handleSave}>Save Session</button>
        <button onClick={handleLoad}>Load Session</button>
        <span style={{ marginLeft: 12, fontSize: 12, color: '#888' }}>
          Model: {session.model} | Persona: {session.activePersona}
        </span>
      </div>
    </div>
  );
}
