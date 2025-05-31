// FileTreePanel.js
// Ported and adapted from Aetherial Architect (CREDITS: Aetherial team)
import React, { useState, useContext } from 'react';
import ResizablePanelsLayout from './ResizablePanelsLayout.jsx';

// Mock file tree data for demo (replace with real JAMAI project structure as needed)
const mockFileTreeData = [
	{
		id: '1',
		name: 'src',
		type: 'folder',
		children: [
			{
				id: '1-1',
				name: 'ui',
				type: 'folder',
				children: [
					{ id: '1-1-1', name: 'RitualComposerPortal.js', type: 'file' },
					{ id: '1-1-2', name: 'MusicPlayer.js', type: 'file' },
					{ id: '1-1-3', name: 'ComposerControls.js', type: 'file' },
				],
			},
			{
				id: '1-2',
				name: 'libs',
				type: 'folder',
				children: [
					{ id: '1-2-1', name: 'abcjsAdapter.js', type: 'file' },
					{ id: '1-2-2', name: 'JamaiAdapter.js', type: 'file' },
				],
			},
			{ id: '1-3', name: 'index.js', type: 'file' },
		],
	},
	{ id: '2', name: 'README.md', type: 'file' },
	{ id: '3', name: 'ROADMAP.md', type: 'file' },
];

function FileTreeItem({ node, level = 0, onSelect, basePath = '' }) {
	const [isOpen, setIsOpen] = useState(node.type === 'folder' && level < 1);
	const currentPath = basePath ? `${basePath}/${node.name}` : node.name;
	const indentStyle = {
		paddingLeft: `${level * 0.75 + (node.type === 'file' ? 1.25 : 0)}rem`,
	};
	const handleToggle = () => {
		if (node.type === 'folder') setIsOpen((v) => !v);
		else if (onSelect) onSelect(currentPath);
	};
	return (
		<div>
			<div
				style={{
					...indentStyle,
					cursor: node.type === 'folder' ? 'pointer' : 'default',
					fontWeight:
						node.type === 'folder' ? 'bold' : 'normal',
				}}
				onClick={handleToggle}
				tabIndex={0}
				aria-label={node.name}
				role={node.type === 'folder' ? 'treeitem' : 'none'}
			>
				{node.type === 'folder' ? (isOpen ? '▼ ' : '▶ ') : '📄 '}
				{node.name}
			</div>
			{isOpen &&
				node.children &&
				node.children.map((child) => (
					<FileTreeItem
						key={child.id}
						node={child}
						level={level + 1}
						onSelect={onSelect}
						basePath={currentPath}
					/>
				))}
		</div>
	);
}

export default function FileTreePanel({ onSelect }) {
	return (
		<div
			className="jamai-file-tree-panel"
			style={{
				width: 220,
				borderRight: '1px solid #ddd',
				height: '100%',
				overflowY: 'auto',
				background: '#fafaff',
			}}
		>
			{mockFileTreeData.map((node) => (
				<FileTreeItem key={node.id} node={node} onSelect={onSelect} />
			))}
		</div>
	);
}
