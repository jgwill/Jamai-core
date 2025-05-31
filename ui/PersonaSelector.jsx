import React from 'react';
import personas from '../data/personas';

/**
 * PersonaSelector: UI for selecting a persona from available options.
 * Calls onSelect(personaId) when a persona is chosen.
 */
export default function PersonaSelector({ activePersona, onSelect }) {
  return (
    <div className="jamai-persona-selector">
      {Object.entries(personas).map(([id, persona]) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          style={{
            margin: 4,
            background: id === activePersona ? '#e0e0ff' : '#fff',
            border: id === activePersona ? '2px solid #6c6cff' : '1px solid #ccc',
            borderRadius: 8,
            padding: '4px 12px',
            fontWeight: id === activePersona ? 'bold' : 'normal',
          }}
        >
          {persona.avatar ? <span style={{ marginRight: 6 }}>{persona.avatar}</span> : null}
          {persona.name || id}
        </button>
      ))}
    </div>
  );
}
