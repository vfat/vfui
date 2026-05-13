/**
 * VFUI - Modal Module
 * JavaScript module untuk Modal component
 */

(function() {
  'use strict';

  const MODAL_SELECTOR = '.ui-modal';
  const MODAL_ATTR = 'data-module="modal"';
  const OPEN_TRIGGER_SELECTOR = '[data-modal-trigger]';
  const CLOSE_SELECTOR = '.ui-modal__close, [data-modal-close]';
  const BACKDROP_SELECTOR = '.ui-modal__backdrop';

  /**
   * Modal class
   */
  class Modal {
    constructor(element) {
      this.element = element;
      this.isOpen = false;
      this.previousActiveElement = null;
      this._bindEvents();
    }

    _bindEvents() {
      // Close button
      const closeBtn = this.element.querySelector(CLOSE_SELECTOR);
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.close());
      }

      // Backdrop click
      const backdrop = this.element.querySelector(BACKDROP_SELECTOR);
      if (backdrop) {
        backdrop.addEventListener('click', () => this.close());
      }

      // Escape key
      this.element.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
    }

    open() {
      this.previousActiveElement = document.activeElement;
      this.element.classList.add('ui-modal--active');
      this.isOpen = true;
      document.body.style.overflow = 'hidden';

      // Focus first focusable element
      setTimeout(() => this._trapFocus(), 100);
    }

    close() {
      this.element.classList.remove('ui-modal--active');
      this.isOpen = false;
      document.body.style.overflow = '';

      // Restore focus
      if (this.previousActiveElement) {
        this.previousActiveElement.focus();
      }
    }

    _trapFocus() {
      const focusableElements = this.element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    destroy() {
      this.close();
    }
  }

  // Register module
  UI.registerModule('modal', {
    init: function() {
      const modals = document.querySelectorAll(MODAL_ATTR);
      modals.forEach(el => {
        if (!UI.getInstance(el)) {
          const instance = new Modal(el);
          UI.setInstance(el, instance);
        }
      });

      // Bind open triggers
      document.addEventListener('click', (e) => {
        const trigger = e.target.closest(OPEN_TRIGGER_SELECTOR);
        if (trigger) {
          const modalId = trigger.getAttribute('data-modal-trigger');
          const modal = document.querySelector(`#${modalId}`);
          if (modal) {
            const instance = UI.getInstance(modal);
            if (instance) {
              instance.open();
            }
          }
        }
      });
    }
  });
})();
