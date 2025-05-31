// WorkspaceContext.js
// Provides context for file selection, open files, and panel state in JAMAI workspace navigation
import React, { createContext, useState, useCallback } from 'react';

export const WorkspaceContext = createContext();

export function WorkspaceProvider({ children }) {
  const [openFiles, setOpenFiles] = useState([]); // [{path, content}]
  const [activeFile, setActiveFile] = useState(null);

  const openFile = useCallback((path) => {
    if (!openFiles.find(f => f.path === path)) {
      setOpenFiles(files => [...files, { path, content: '' }]); // TODO: load real content
    }
    setActiveFile(path);
  }, [openFiles]);

  const closeFile = useCallback((path) => {
    setOpenFiles(files => files.filter(f => f.path !== path));
    if (activeFile === path) setActiveFile(openFiles.length ? openFiles[0].path : null);
  }, [openFiles, activeFile]);

  const setFileContent = useCallback((path, content) => {
    setOpenFiles(files => files.map(f => f.path === path ? { ...f, content } : f));
  }, []);

  return (
    <WorkspaceContext.Provider value={{ openFiles, activeFile, openFile, closeFile, setFileContent }}>
      {children}
    </WorkspaceContext.Provider>
  );
}
