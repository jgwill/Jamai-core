# JAMAI Emotion Engine

The emotionEngine/ module is the heart of JAMAI’s “structured feeling.”

- Maps emotional cues (from text, voice, or symbolic input) to musical properties (key, tempo, mode, color, etc).
- Provides emotion profiles and tone presets for dynamic adaptation.
- Exposes utilities for tagging, mapping, and transforming music with emotional context.
- Works with emotionMappings.js and emotionTagger.js for emotion-aware playback and rendering.
- Supports direct integration with adapters (e.g., abcjsAdapter) for emotion-driven transformations in music rendering and playback.
- Enables use of custom ABC directives (e.g., `%%jamai_emotion`) to specify emotional intent within ABC notation, which are parsed and mapped to playback/rendering changes.
- Facilitates emotion presets, audio sequence modification, and MIDI-to-ABCJS conversion for seamless, expressive output.

_Example:_
- Parse `%%jamai_emotion` directive and apply mapped changes to playback or score.
- Use `.jamai/emotions.json` for custom emotion maps.
- Collaborate with JamaiAdapter and abcjsAdapter to render/play music with emotion-driven transformation.
