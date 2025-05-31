// emotionMappings.js
// Maps emotion profiles to musical parameters for JAMAI

const emotionMap = require('../../.jamai/emotions.json');

function getMusicParamsForEmotion(emotion) {
  return emotionMap[emotion] || null;
}

module.exports = { getMusicParamsForEmotion };
