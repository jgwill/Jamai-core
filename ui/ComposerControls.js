import React from 'react';

/**
 * ComposerControls: UI for Copy, Simplify, Vary, Continue, Tablature, Play, Export, Share actions.
 * Accepts handlers for each action.
 */
export default function ComposerControls({ onCopy, onSimplify, onVary, onContinue, onTab, onPlay, onExport, onShare, disabled }) {
  // Add tooltips for accessibility and clarity
  return (
    <div className="jamai-composer-controls" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '12px 0' }}>
      <button onClick={onCopy} disabled={disabled} title="Copy ABC notation to clipboard">Copy</button>
      <button onClick={onSimplify} disabled={disabled} title="Simplify the current motif">Simplify</button>
      <button onClick={onVary} disabled={disabled} title="Generate a variation">Vary</button>
      <button onClick={onContinue} disabled={disabled} title="Continue the phrase">Continue</button>
      <button onClick={onTab} disabled={disabled} title="Show tablature (guitar/bass)">Tablature</button>
      <button onClick={onPlay} disabled={disabled} title="Play the current motif">Play</button>
      <button onClick={onExport} disabled={disabled} title="Export as MIDI, MusicXML, or WAV">Export</button>
      <button onClick={onShare} disabled={disabled} title="Share your motif">Share</button>
    </div>
  );
}