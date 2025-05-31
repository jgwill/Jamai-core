import React from 'react';
import MusicPlayer from './MusicPlayer.jsx';

/**
 * MediaPreview: Shows preview for audio, image, or file input in JAMAI.
 * Accepts file (File object) and type ('audio', 'image', 'file').
 */
export default function MediaPreview({ file, type }) {
  if (!file) return null;
  const url = URL.createObjectURL(file);
  if (type === 'audio') {
    return <audio controls src={url} style={{ maxWidth: 300 }} />;
  }
  if (type === 'image') {
    return <img src={url} alt="preview" style={{ maxWidth: 300, maxHeight: 200 }} />;
  }
  // For generic files, just show name and download link
  return (
    <div>
      <span>{file.name}</span>
      <a href={url} download={file.name} style={{ marginLeft: 8 }}>Download</a>
    </div>
  );
}
