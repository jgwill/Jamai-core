// emotionTagger.js
// Utility for tagging music with emotional and intent metadata in JAMAI

/**
 * Tag a musical object with emotional and intent context.
 * @param {object} musicObj - The music data (score, sequence, etc).
 * @param {object} emotionProfile - The emotional profile (e.g., mood, arousal, valence).
 * @param {object} intent - The user or system intent (e.g., compose, correct, perform).
 * @returns {object} - The tagged music object.
 */
function tagWithEmotion(musicObj, emotionProfile, intent) {
  return {
    ...musicObj,
    emotion: emotionProfile,
    intent: intent
  };
}

module.exports = { tagWithEmotion };
