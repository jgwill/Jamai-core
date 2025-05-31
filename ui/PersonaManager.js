import React from 'react';
import personas from '../data/personas';
import PersonaSelector from './PersonaSelector';

/**
 * PersonaManager: Handles persona logic and state for JAMAI.
 * Accepts activePersona and onPersonaChange props.
 */
export default function PersonaManager({ activePersona, onPersonaChange }) {
  const persona = personas[activePersona] || {};
  return (
    <div className="jamai-persona-manager" style={{ marginBottom: 8 }}>
      <PersonaSelector activePersona={activePersona} onSelect={onPersonaChange} />
      <div style={{ marginTop: 6, fontSize: 14, color: '#555' }}>
        <strong>{persona.name || activePersona}</strong>
        {persona.description ? <span style={{ marginLeft: 8 }}>{persona.description}</span> : null}
      </div>
    </div>
  );
}
