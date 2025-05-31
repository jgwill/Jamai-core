// ResizablePanelsLayout.js
// Ported and adapted from Aetherial Architect (CREDITS: Aetherial team)
import React, { useRef, useState, useCallback, useEffect } from 'react';
import JAMAIWorkspace from './JAMAIWorkspace.jsx';

export default function ResizablePanelsLayout({
  leftPanelContent,
  rightPanelContent,
  initialLeftPanelWidth = 220,
  minLeftPanelWidth = 120,
  maxLeftPanelWidth = 400,
  showLeftPanel = true,
  className = '',
  leftPanelClassName = '',
  rightPanelClassName = '',
  handleClassName = '',
}) {
  const [currentLeftPanelWidth, setCurrentLeftPanelWidth] = useState(initialLeftPanelWidth);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = currentLeftPanelWidth;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [currentLeftPanelWidth]);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    let newWidth = startWidthRef.current + deltaX;
    const constrainedWidth = Math.max(minLeftPanelWidth, Math.min(newWidth, maxLeftPanelWidth));
    setCurrentLeftPanelWidth(constrainedWidth);
  }, [minLeftPanelWidth, maxLeftPanelWidth]);

  const handleMouseUp = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
    if (isDraggingRef.current) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (showLeftPanel) setCurrentLeftPanelWidth(initialLeftPanelWidth);
  }, [initialLeftPanelWidth, showLeftPanel]);

  return (
    <div className={`jamai-resizable-panels-layout ${className}`} style={{ display: 'flex', height: '100%' }}>
      {showLeftPanel && (
        <div
          className={leftPanelClassName}
          style={{ width: currentLeftPanelWidth, minWidth: minLeftPanelWidth, maxWidth: maxLeftPanelWidth, height: '100%', overflow: 'auto', background: '#fafaff' }}
        >
          {leftPanelContent}
        </div>
      )}
      {showLeftPanel && (
        <div
          onMouseDown={handleMouseDown}
          className={`jamai-resize-handle ${handleClassName}`}
          style={{ width: 6, cursor: 'col-resize', background: '#e0e0e0', zIndex: 10 }}
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize panel"
          tabIndex={0}
        />
      )}
      <div className={rightPanelClassName} style={{ flex: 1, height: '100%', overflow: 'auto' }}>
        {rightPanelContent}
      </div>
    </div>
  );
}
