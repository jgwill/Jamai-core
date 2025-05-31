import React, { useState } from 'react';
import MultimodalInput from './MultimodalInput';
import MediaPreview from './MediaPreview';
import VoiceOutput from './VoiceOutput';
import PersonaManager from './PersonaManager';
import SessionManager from './SessionManager';
import MusicPlayer from './MusicPlayer';
import EmotionSelector from './EmotionSelector';
import DebugOverlay from './DebugOverlay';
import ErrorOverlay from './ErrorOverlay';
import ToastManager from './ToastManager';
import ComposerControls from './ComposerControls';
import { generateVariation } from './abcUtils';
import { SAMPLE_MOTIFS } from './SAMPLE_MOTIFS';

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
  const [abc, setAbc] = useState('');
  const [emotion, setEmotion] = useState('joy');
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(null);

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

  // Handle ABC input (from MusicPlayer)
  const handleAbcChange = (val) => {
    setAbc(val);
    setError(null);
  };

  // Handle emotion selection
  const handleEmotionChange = (emo) => {
    setEmotion(emo);
    setToast({ type: 'info', message: `Emotion set to ${emo}` });
  };

  // Handle error overlay
  const handleError = (err) => {
    setError(err);
  };

  // Handle toast close
  const handleToastClose = () => setToast(null);

  // Composer control handlers (real variation logic)
  const handleCopy = () => {
    navigator.clipboard.writeText(abc);
    setToast({ type: 'success', message: 'ABC copied to clipboard.' });
  };
  const handleSimplify = () => {
    setAbc(generateVariation(abc, 'simplify'));
    setToast({ type: 'info', message: 'Simplified version generated.' });
  };
  const handleVary = () => {
    setAbc(generateVariation(abc, 'vary'));
    setToast({ type: 'info', message: 'Variation generated.' });
  };
  const handleContinue = () => {
    setAbc(generateVariation(abc, 'continue'));
    setToast({ type: 'info', message: 'Continued phrase generated.' });
  };
  const handleTab = () => {
    setToast({ type: 'info', message: 'Tablature view coming soon.' });
  };
  const handlePlay = () => {
    setToast({ type: 'info', message: 'Playback triggered.' });
  };
  const handleExport = () => {
    setToast({ type: 'info', message: 'Export feature coming soon.' });
  };
  const handleShare = () => {
    setToast({ type: 'info', message: 'Share feature coming soon.' });
  };

  // Add sample motif loader
  const handleLoadSample = (notation) => {
    setAbc(notation);
    setToast({ type: 'success', message: 'Sample motif loaded.' });
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
      <div style={{ margin: '24px 0' }}>
        <EmotionSelector emotion={emotion} onChange={handleEmotionChange} />
        <MusicPlayer abc={abc} onAbcChange={handleAbcChange} emotion={emotion} onError={handleError} />
        <ComposerControls
          onCopy={handleCopy}
          onSimplify={handleSimplify}
          onVary={handleVary}
          onContinue={handleContinue}
          onTab={handleTab}
          onPlay={handlePlay}
          onExport={handleExport}
          onShare={handleShare}
        />
      </div>
      <div style={{ margin: '8px 0' }}>
        {SAMPLE_MOTIFS.map(motif => (
          <button key={motif.id} onClick={() => handleLoadSample(motif.notation)} style={{ marginRight: 6 }}>
            Load: {motif.title}
          </button>
        ))}
      </div>
      <DebugOverlay abc={abc} emotion={emotion} session={session} persona={activePersona} />
      {error && <ErrorOverlay error={error} onClose={() => setError(null)} />}
      {toast && <ToastManager toast={toast} onClose={handleToastClose} />}
      <div style={{ marginTop: 24, color: '#888', fontSize: 13 }}>
        <em>Persona-aware, multimodal ritual composer. Composer controls are now scaffolded. Next: advanced logic for each action.</em>
      </div>
    </div>
  );
}
