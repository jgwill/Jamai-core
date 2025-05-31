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
- [ ] Ritual Composer Portal: web/voice UI for input, preview, play, export
- [x] EmotionSelector component for user-driven emotion mapping (stubbed)
- [x] DebugOverlay for real-time feedback (stubbed)
- [x] MusicPlayer for ABC input, rendering, and playback (stubbed)

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
