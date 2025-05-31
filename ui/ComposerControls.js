import React from 'react';

/**
 * ComposerControls: UI for Copy, Simplify, Vary, Continue, Tablature, Play, Export, Share actions.
 * Accepts handlers for each action.
 */
export default function ComposerControls({ onCopy, onSimplify, onVary, onContinue, onTab, onPlay, onExport, onShare, disabled }) {
  return (
    <div className="jamai-composer-controls" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '12px 0' }}>
      <button onClick={onCopy} disabled={disabled}>Copy</button>
      <button onClick={onSimplify} disabled={disabled}>Simplify</button>
      <button onClick={onVary} disabled={disabled}>Vary</button>
      <button onClick={onContinue} disabled={disabled}>Continue</button>
      <button onClick={onTab} disabled={disabled}>Tablature</button>
      <button onClick={onPlay} disabled={disabled}>Play</button>
      <button onClick={onExport} disabled={disabled}>Export</button>
      <button onClick={onShare} disabled={disabled}>Share</button>
    </div>
  );
}