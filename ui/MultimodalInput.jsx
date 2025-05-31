import React, { useRef, useState } from 'react';

/**
 * MultimodalInput: Handles text, voice (speech-to-text), audio, image, and file input for JAMAI.
 * Calls onInput(type, value) when input is received.
 */
export default function MultimodalInput({ onInput }) {
  const [inputType, setInputType] = useState('text');
  const [inputValue, setInputValue] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  // Handle text input
  const handleTextChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onInput && onInput('text', inputValue);
      setInputValue('');
    }
  };

  // Handle file/media input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(file);
      onInput && onInput(file.type.startsWith('audio') ? 'audio' : file.type.startsWith('image') ? 'image' : 'file', file);
    }
  };

  // Handle voice input (speech-to-text)
  const startVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      onInput && onInput('voice', transcript);
      setIsRecording(false);
    };
    recognition.onerror = () => setIsRecording(false);
    recognition.onend = () => setIsRecording(false);
    recognitionRef.current = recognition;
    setIsRecording(true);
    recognition.start();
  };
  const stopVoiceInput = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="jamai-multimodal-input">
      <form onSubmit={handleTextSubmit} style={{ display: inputType === 'text' ? 'block' : 'none' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleTextChange}
          placeholder="Type your message or ABC notation..."
        />
        <button type="submit">Send</button>
      </form>
      <div style={{ margin: '8px 0' }}>
        <button onClick={() => setInputType('text')}>Text</button>
        <button onClick={() => setInputType('voice')}>Voice</button>
        <button onClick={() => setInputType('audio')}>Audio</button>
        <button onClick={() => setInputType('image')}>Image</button>
        <button onClick={() => setInputType('file')}>File</button>
      </div>
      {inputType === 'voice' && (
        <div>
          <button onClick={isRecording ? stopVoiceInput : startVoiceInput}>
            {isRecording ? 'Stop Recording' : 'Start Voice Input'}
          </button>
        </div>
      )}
      {(inputType === 'audio' || inputType === 'image' || inputType === 'file') && (
        <input type="file" accept={inputType === 'audio' ? 'audio/*' : inputType === 'image' ? 'image/*' : '*'} onChange={handleFileChange} />
      )}
    </div>
  );
}
