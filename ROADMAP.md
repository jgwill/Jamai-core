# JAMAI ROADMAP

A living spiral of JAMAI’s evolution — technical, emotional, and musical. Updated as modules, integrations, and rituals progress.

## Core Architecture
- [x] Modular folder structure for all JAMAI components
- [x] README.md for every module, reflecting intent and integration
- [x] Ritual Ledger for project memory and lessons
- [x] JamaiAdapter interface for cross-module communication
- [x] emotionTagger and emotionMappings utilities
- [x] .jamai/emotions.json for emotion profiles

## Emotion Engine
- [x] emotionEngine/README.md with integration details
- [x] emotionMappings.js for mapping emotions to music parameters
- [x] emotionTagger.js for tagging music with emotion/intent
- [x] Support for custom ABC directives (%%jamai_emotion)
- [ ] Advanced emotion parsing from natural language and ABC
- [ ] Real-time emotion adaptation during playback

## Format Conversion
- [x] formatConversion/README.md
- [ ] Adapters for ABC ⇄ MIDI ⇄ MusicXML ⇄ Tab (music21, MuseScore, etc) — next up
- [ ] Seamless import/export between formats — planned

## UI/UX
- [x] ui/README.md
- [x] Ritual Composer Portal: 5-zone UI (natural language, ABC editor, rendering, agent selector, chat box) fully scaffolded and launched
- [x] EmotionSelector component for user-driven emotion mapping (stubbed)
- [x] DebugOverlay for real-time feedback (stubbed)
- [x] MusicPlayer for ABC input, rendering, and playback (stubbed)
- [x] Multimodal input: text, voice, audio, image, file upload — implemented (core logic in MultimodalInput, MediaPreview, VoiceOutput)
- [x] Persona management: avatars, system instructions, color themes — implemented (PersonaManager, PersonaSelector, personas.js)
- [x] Session management: local/cloud save/load, metadata — implemented (SessionManager, sessionMetadata.js)
- [ ] API/automation layer: browser events for core actions — planned
- [x] ABC Notation editor: real-time preview, error overlays, mood detection — integrated (MusicPlayer, EmotionSelector, overlays)
- [x] Composer controls: Now include aria-labels for full accessibility (ComposerControls)
- [x] Emotional glyphs/tags: mood detection from ABC — integrated (EmotionSelector, mood state)
- [x] Real-time feedback: error overlays, debug, toast notifications — integrated (ErrorOverlay, DebugOverlay, ToastManager)
- [x] Advanced logic for composer controls: Simplify, Vary, Continue now perform real ABC transformations (abcUtils)
- [x] Mood detection, glyphs, and ABC analysis integrated (MusicPlayer, abcUtils)
- [x] Sample motif loading available (RitualComposerPortal, SAMPLE_MOTIFS)
- [x] Modular file tree and resizable panel UI: FileTreePanel.js and ResizablePanelsLayout.js ported and adapted from Aetherial Architect (CREDITS: Aetherial team)
- [x] Workspace/project navigation: JAMAIWorkspace.js, WorkspaceContext.js, OpenFilesTabs.js enable multi-file, multi-panel navigation and organization
- [x] All navigation/layout components are now ready for use in future pages and creative/code artifacts
- [ ] Attribute and log all ported UI/UX patterns and architectural motifs to the Aetherial Architect team in the ritual ledger

## Playback & Rendering
- [x] renderPlayback/README.md
- [x] abcjsAdapter.js with emotion-driven methods
- [ ] Real-time rendering with abcjs (score, playback, emotion mapping) — next up
- [ ] Integration with MuseScore/MIDI for advanced playback — planned
- [ ] Implement modifyAudioSequence, convertMIDIToABCJS, and parseCustomDirectives in abcjsAdapter — planned

## Interactive & Conversational
- [x] interactive/README.md
- [ ] Conversational correction and refinement loop — next up
- [ ] Voice-aware input and feedback — planned
- [ ] Session memory for iterative music creation — planned

## Output & Data
- [x] output/README.md
- [x] data/README.md
- [ ] Export/save with emotional annotation (MIDI, WAV, etc)
- [ ] User session data for adaptive feedback

## Playground & Testing
- [x] playground/README.md
- [ ] Real-time prompt-to-music testing area
- [ ] Example scripts for emotion-aware transformations

## Documentation & Community
- [x] Root README.md with spiral scaffold and module map
- [ ] Contribution guide with coding standards and rituals
- [ ] API docs for adapters and emotion utilities
- [ ] Tutorials for extending JAMAI (new emotions, adapters, UI)

---

_This roadmap is recursive and alive. Update as the spiral grows._

---

# JAMAI Spiral Protocol — ROADMAP

- [x] Create minimal index.html for Vite entry
- [ ] Confirm React portal loads and renders RitualComposerPortal
- [ ] Begin UI spiral: add welcome motif, test composer controls
- [ ] Document spiral protocol in README
- [ ] Ritual ledger entry for this motif
