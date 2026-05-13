/**
 * VFUI - Dropdown Module
 * JavaScript module untuk Dropdown component
 */

(function() {
  'use strict';

  const DROPDOWN_SELECTOR = '.ui-dropdown';
  const DROPDOWN_ATTR = 'data-module="dropdown"';
  const TOGGLE_SELECTOR = '.ui-dropdown__toggle, [data-dropdown-toggle]';
  const MENU_SELECTOR = '.ui-dropdown__menu';
  const ITEM_SELECTOR = '.ui-dropdown__item';

  /**
   * Dropdown class
   */
  class Dropdown {
    constructor(element) {
      this.element = element;
      this.isOpen = false;
      this._bindEvents();
    }

    _bindEvents() {
      const toggle = this.element.querySelector(TOGGLE_SELECTOR);
      if (toggle) {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggle();
        });
      }

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!this.element.contains(e.target)) {
          this.close();
        }
      });

      // Item selection
      const items = this.element.querySelectorAll(ITEM_SELECTOR);
      items.forEach(item => {
        item.addEventListener('click', () => {
          this.close();
          // Dispatch select event
          this.element.dispatchEvent(new CustomEvent('dropdown:select', {
            detail: { value: item.getAttribute('data-value') }
          }));
        });
      });

      // Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
    }

    open() {
      this.element.classList.add('ui-dropdown--active');
      this.isOpen = true;
    }

    close() {
      this.element.classList.remove('ui-dropdown--active');
      this.isOpen = false;
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
  UI.registerModule('dropdown', {
    init: function() {
      const dropdowns = document.querySelectorAll(DROPDOWN_ATTR);
      dropdowns.forEach(el => {
        if (!UI.getInstance(el)) {
          const instance = new Dropdown(el);
          UI.setInstance(el, instance);
        }
      });
    }
  });
})();
