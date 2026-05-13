/**
 * VFUI - Core JavaScript
 * UI namespace dengan init API dan event delegation pattern
 */

const UI = (function() {
  'use strict';

  // Private state
  const _modules = {};
  const _instances = new WeakMap();

  // Version
  const version = '1.0.0';

  /**
   * Initialize all modules or specific module
   * @param {string} [moduleName] - Optional module name to initialize
   */
  function init(moduleName) {
    if (moduleName) {
      // Initialize specific module
      if (_modules[moduleName] && _modules[moduleName].init) {
        _modules[moduleName].init();
      }
    } else {
      // Initialize all modules
      Object.keys(_modules).forEach(name => {
        if (_modules[name].init) {
          _modules[name].init();
        }
      });
    }
  }

  /**
   * Register a module
   * @param {string} name - Module name
   * @param {object} module - Module object with init, destroy, etc.
   */
  function registerModule(name, module) {
    _modules[name] = module;
  }

  /**
   * Get module instance from element
   * @param {HTMLElement} element - DOM element
   * @returns {object|null} - Module instance or null
   */
  function getInstance(element) {
    return _instances.get(element) || null;
  }

  /**
   * Store instance reference
   * @param {HTMLElement} element - DOM element
   * @param {object} instance - Module instance
   */
  function setInstance(element, instance) {
    _instances.set(element, instance);
  }

  /**
   * Get all registered module names
   * @returns {string[]} - Array of module names
   */
  function getRegisteredModules() {
    return Object.keys(_modules);
  }

  /**
   * Check if module is registered
   * @param {string} name - Module name
   * @returns {boolean}
   */
  function isRegistered(name) {
    return !!_modules[name];
  }

  // Public API
  return {
    version,
    init,
    registerModule,
    getInstance,
    setInstance,
    getRegisteredModules,
    isRegistered
  };
})();

// Auto-init on DOMContentLoaded
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => UI.init());
  } else {
    UI.init();
  }
})();
