import React from 'react';

/**
 * ComposerControls: UI for Copy, Simplify, Vary, Continue, Tablature, Play, Export, Share actions.
 * Accepts handlers for each action.
 */
export default function ComposerControls({ onCopy, onSimplify, onVary, onContinue, onTab, onPlay, onExport, onShare }) {
  return (
    <div className="jamai-composer-controls" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '12px 0' }}>
      <button onClick={onCopy}>Copy</button>
      <button onClick={onSimplify}>Simplify</button>
      <button onClick={onVary}>Vary</button>
      <button onClick={onContinue}>Continue</button>
      <button onClick={onTab}>Tablature</button>
      <button onClick={onPlay}>Play</button>
      <button onClick={onExport}>Export</button>
      <button onClick={onShare}>Share</button>
    </div>
  );
}