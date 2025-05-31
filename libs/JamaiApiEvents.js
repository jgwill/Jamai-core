// JAMAI API/Automation: browser event layer for core actions
// ...existing code...
export function triggerJamaiEvent(type, detail) {
  window.dispatchEvent(new CustomEvent(`jamai:${type}`, { detail }));
}
