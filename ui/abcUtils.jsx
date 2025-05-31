// abcUtils.js
// Utilities for ABC analysis, mood detection, glyphs, and variation (migrated from EchoComposer)

// Analyze ABC notation to extract key, meter, and tempo
export function analyzeAbcNotation(abc) {
  const keyMatch = abc.match(/K:([A-Za-z#]+)/);
  const meterMatch = abc.match(/M:(\d+\/\d+)/);
  const tempoMatch = abc.match(/Q:1\/4=(\d+)/);
  return {
    key: keyMatch ? keyMatch[1] : 'Unknown',
    meter: meterMatch ? meterMatch[1] : 'Unknown',
    tempo: tempoMatch ? Number.parseInt(tempoMatch[1]) : 120,
  };
}

// Determine mood based on key and tempo
export function determineMood(key, tempo) {
  const majorKeys = ["C", "G", "D", "A", "E", "B", "F#", "C#", "F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"];
  const minorKeys = ["Am", "Em", "Bm", "F#m", "C#m", "G#m", "D#m", "A#m", "Dm", "Gm", "Cm", "Fm", "Bbm", "Ebm", "Abm"];
  const isMajor = majorKeys.some((k) => key.startsWith(k));
  const isMinor = minorKeys.some((k) => key === k);
  const isSlow = tempo < 85;
  const isMedium = tempo >= 85 && tempo < 120;
  const isFast = tempo >= 120;
  if (isMajor) {
    if (isSlow) return "Peaceful";
    if (isMedium) return "Joyful";
    if (isFast) return "Energetic";
  } else if (isMinor) {
    if (isSlow) return "Melancholic";
    if (isMedium) return "Mysterious";
    if (isFast) return "Intense";
  }
  return "Neutral";
}

// Get emotional glyph based on mood
export function getEmotionalGlyph(mood) {
  const glyphMap = {
    Peaceful: "✨",
    Joyful: "🌟",
    Energetic: "⚡",
    Melancholic: "🌊",
    Mysterious: "🌙",
    Intense: "🔥",
    Neutral: "🎵",
  };
  return glyphMap[mood] || "🎵";
}

// Generate a variation of the ABC notation
export function generateVariation(abc, variationType) {
  const { key, meter, tempo } = analyzeAbcNotation(abc);
  const headerLines = [];
  const bodyLines = [];
  let inHeader = true;
  abc.split("\n").forEach((line) => {
    if (inHeader && line.match(/^[A-Z]:/)) headerLines.push(line);
    else {
      inHeader = false;
      bodyLines.push(line);
    }
  });
  const header = headerLines.join("\n");
  const body = bodyLines.join("\n");
  let newBody = body;
  switch (variationType) {
    case "simplify":
      newBody = body.replace(/([A-Ga-g][,']?\d*)/g, "$1").replace(/\|/g, "|");
      break;
    case "vary":
      newBody = body.split('').reverse().join(''); // placeholder: reverse for demo
      break;
    case "continue":
      newBody = body + "\n" + body;
      break;
    default:
      break;
  }
  return header + "\n" + newBody;
}
