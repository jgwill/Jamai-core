import React from 'react';
import ResizablePanelsLayout from './ResizablePanelsLayout.jsx';
import FileTreePanel from './FileTreePanel.jsx';
import OpenFilesTabs from './OpenFilesTabs.jsx';
import { WorkspaceProvider } from './WorkspaceContext';

// JAMAIWorkspace: Main workspace navigation and layout shell
export default function JAMAIWorkspace({ children }) {
  return (
    <WorkspaceProvider>
      <ResizablePanelsLayout
        leftPanelContent={<FileTreePanel />}
        rightPanelContent={
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <OpenFilesTabs />
            <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
          </div>
        }
      />
    </WorkspaceProvider>
  );
}
