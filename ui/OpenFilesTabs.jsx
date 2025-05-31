// OpenFilesTabs.js
// Tabs for open files in the workspace (multi-panel navigation)
import React, { useContext } from 'react';
import { WorkspaceContext } from './WorkspaceContext.jsx';

export default function OpenFilesTabs() {
  const { openFiles, activeFile, openFile, closeFile } = useContext(WorkspaceContext);
  if (!openFiles.length) return null;
  return (
    <div className="jamai-open-files-tabs" style={{ display: 'flex', borderBottom: '1px solid #ddd', background: '#f5f5fa' }}>
      {openFiles.map(f => (
        <div
          key={f.path}
          style={{
            padding: '4px 12px',
            borderBottom: f.path === activeFile ? '2px solid #6c6cff' : '2px solid transparent',
            background: f.path === activeFile ? '#fff' : 'transparent',
            cursor: 'pointer',
            marginRight: 2,
            position: 'relative',
          }}
          onClick={() => openFile(f.path)}
        >
          {f.path.split('/').pop()}
          <span
            onClick={e => { e.stopPropagation(); closeFile(f.path); }}
            style={{ marginLeft: 8, color: '#888', cursor: 'pointer', fontWeight: 'bold' }}
            aria-label="Close tab"
            tabIndex={0}
          >×</span>
        </div>
      ))}
    </div>
  );
}
