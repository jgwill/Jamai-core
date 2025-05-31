// JamaiAdapter.js
// Core interface for cross-module communication in JAMAI

/**
 * JamaiAdapter: Defines the contract for adapters connecting JAMAI modules.
 * Each module should implement this interface for extensibility and cross-linking.
 */
class JamaiAdapter {
  /**
   * Send a message or data to another module.
   * @param {string} targetModule - The module to communicate with.
   * @param {object} payload - The data or command to send.
   * @returns {Promise<any>} - Response from the target module.
   */
  send(targetModule, payload) {
    throw new Error('send() must be implemented by subclass');
  }

  /**
   * Receive a message or data from another module.
   * @param {object} payload - The incoming data or command.
   * @returns {Promise<any>} - Response to the sender.
   */
  receive(payload) {
    throw new Error('receive() must be implemented by subclass');
  }
}

module.exports = JamaiAdapter;
