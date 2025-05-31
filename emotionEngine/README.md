# JAMAI Emotion Engine

The emotionEngine/ module is the heart of JAMAI’s “structured feeling.”

- Maps emotional cues (from text, voice, or symbolic input) to musical properties (key, tempo, mode, color, etc).
- Provides emotion profiles and tone presets for dynamic adaptation.
- Exposes utilities for tagging, mapping, and transforming music with emotional context.
- Works with emotionMappings.js and emotionTagger.js for emotion-aware playback and rendering.

_Example:_
- Parse `%%jamai_emotion` directive and apply mapped changes to playback or score.
- Use `.jamai/emotions.json` for custom emotion maps.
