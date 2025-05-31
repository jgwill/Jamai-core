import React, { useState } from 'react';
import MultimodalInput from './MultimodalInput.jsx';
import MediaPreview from './MediaPreview.jsx';
import VoiceOutput from './VoiceOutput.jsx';
import PersonaManager from './PersonaManager.jsx';
import SessionManager from './SessionManager.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import EmotionSelector from './EmotionSelector.jsx';
import DebugOverlay from './DebugOverlay.jsx';
import ErrorOverlay from './ErrorOverlay.jsx';
import ToastManager from './ToastManager.jsx';
import ComposerControls from './ComposerControls.jsx';
import { generateVariation } from './abcUtils.jsx';
import { SAMPLE_MOTIFS } from './SAMPLE_MOTIFS.jsx';

// JAMAI Ritual Composer Portal — 5-zone layout
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
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Session change
  const handleSessionChange = (s) => {
    setSession(s);
    if (s && s.activePersona) setActivePersona(s.activePersona);
  };

  // Multimodal input
  const handleInput = (type, value) => {
    setInputType(type);
    if (type === 'text' || type === 'voice') {
      setInputValue(value);
      setTtsText(value);
      setTtsSpeak(true);
      setMediaFile(null);
    } else if (type === 'audio' || type === 'image' || type === 'file') {
      setMediaFile(value);
      setInputValue('');
      setTtsText('');
      setTtsSpeak(false);
    }
  };

  // ABC input
  const handleAbcChange = (val) => {
    setAbc(val);
    setError(null);
  };

  // Emotion
  const handleEmotionChange = (emo) => {
    setEmotion(emo);
    setToast({ type: 'info', message: `Emotion set to ${emo}` });
  };

  // Error
  const handleError = (err) => setError(err);
  const handleToastClose = () => setToast(null);

  // Composer controls
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
  const handleTab = () => setToast({ type: 'info', message: 'Tablature view coming soon.' });
  const handlePlay = () => setToast({ type: 'info', message: 'Playback triggered.' });
  const handleExport = () => setToast({ type: 'info', message: 'Export feature coming soon.' });
  const handleShare = () => setToast({ type: 'info', message: 'Share feature coming soon.' });
  const handleLoadSample = (notation) => {
    setAbc(notation);
    setToast({ type: 'success', message: 'Sample motif loaded.' });
  };

  // Chat logic
  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    setChatHistory([...chatHistory, { sender: activePersona, text: chatInput }]);
    // TODO: Route chat to agent logic, update ABC or NL as needed
    setChatInput('');
  };

  // Agent selector sidebar (vertical)
  const agentList = [
    { id: 'ava', label: 'Ava', color: '#FFA500' },
    { id: 'nyro', label: 'Nyro', color: '#000' },
    { id: 'mia', label: 'Mia', color: '#FF69B4' },
    { id: 'aureon', label: 'Aureon', color: '#32CD32' },
    { id: 'jamai', label: 'Jamai', color: '#FFD700' },
  ];

  return (
    <div className="jamai-ritual-composer-portal" style={{ display: 'flex', height: '100vh', background: '#f7f7fa' }}>
      {/* Left: Natural Language Input */}
      <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', borderRight: '1px solid #eee', padding: 16, minWidth: 220 }}>
        <h3 style={{ marginTop: 0 }}>Natural Language</h3>
        <MultimodalInput onInput={handleInput} value={inputValue} />
        <div style={{ flex: 1 }} />
        <div style={{ fontSize: 12, color: '#888', marginTop: 12 }}>
          <em>Describe your composition, lyrics, or mood. Synced with ABC.</em>
        </div>
      </div>
      {/* Center: ABC Editor + Rendering */}
      <div style={{ flex: 2.2, display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: 16, minWidth: 340 }}>
        <h3 style={{ marginTop: 0 }}>ABC Notation</h3>
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
        <div style={{ margin: '12px 0' }}>
          <EmotionSelector emotion={emotion} onChange={handleEmotionChange} />
        </div>
        <div style={{ margin: '8px 0' }}>
          {SAMPLE_MOTIFS.map(motif => (
            <button key={motif.id} onClick={() => handleLoadSample(motif.notation)} style={{ marginRight: 6 }}>
              Load: {motif.title}
            </button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <DebugOverlay abc={abc} emotion={emotion} session={session} persona={activePersona} />
        {error && <ErrorOverlay error={error} onClose={() => setError(null)} />}
        {toast && <ToastManager toast={toast} onClose={handleToastClose} />}
      </div>
      {/* Right: Agent Selector Sidebar */}
      <div style={{ width: 90, background: '#fff', borderLeft: '1px solid #eee', display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: '12px 0' }}>
        <div style={{ fontWeight: 600, fontSize: 13, textAlign: 'center', marginBottom: 8 }}>Agents</div>
        {agentList.map(agent => (
          <div
            key={agent.id}
            onClick={() => setActivePersona(agent.id)}
            style={{
              background: activePersona === agent.id ? agent.color : 'transparent',
              color: activePersona === agent.id ? '#fff' : agent.color,
              borderRadius: 6,
              margin: '4px 8px',
              padding: '10px 0',
              textAlign: 'center',
              fontWeight: 600,
              cursor: 'pointer',
              border: activePersona === agent.id ? '2px solid #222' : '1px solid #eee',
              boxShadow: activePersona === agent.id ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              transition: 'all 0.2s',
            }}
            aria-label={`Select agent ${agent.label}`}
            tabIndex={0}
          >
            {agent.label}
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <PersonaManager activePersona={activePersona} onPersonaChange={setActivePersona} />
      </div>
      {/* Bottom: Chat Box */}
      <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff', borderTop: '1px solid #eee', padding: '12px 24px', display: 'flex', alignItems: 'center', zIndex: 10 }}>
        <span style={{ fontWeight: 600, color: '#6c6cff', marginRight: 12 }}>{activePersona.toUpperCase()}</span>
        <input
          type="text"
          value={chatInput}
          onChange={e => setChatInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleChatSend(); }}
          placeholder="JAMAI 🎸 is here — tell me what you want to change in your composition and I'll modify it!"
          style={{ flex: 1, fontSize: 16, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', marginRight: 12 }}
          aria-label="Chat with agent"
        />
        <button onClick={handleChatSend} style={{ fontSize: 16, padding: '8px 18px', borderRadius: 6, background: '#6c6cff', color: '#fff', border: 'none', fontWeight: 600 }}>Send</button>
      </div>
    </div>
  );
}
