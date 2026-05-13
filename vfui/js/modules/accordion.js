/**
 * VFUI - Accordion Module
 * JavaScript module untuk Accordion component
 */

(function() {
  'use strict';

  const ACCORDION_ATTR = 'data-module="accordion"';
  const ITEM_SELECTOR = '.ui-accordion__item';
  const HEADER_SELECTOR = '.ui-accordion__header';
  const CONTENT_SELECTOR = '.ui-accordion__content';

  /**
   * Accordion class
   */
  class Accordion {
    constructor(element) {
      this.element = element;
      this.items = element.querySelectorAll(ITEM_SELECTOR);
      this.settings = {
        exclusive: true, // Only one item open at a time
        duration: 300
      };
      this._bindEvents();
    }

    _bindEvents() {
      this.items.forEach(item => {
        const header = item.querySelector(HEADER_SELECTOR);
        if (header) {
          header.addEventListener('click', (e) => this._toggle(item));
          header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this._toggle(item);
            }
          });
        }
      });
    }

    _toggle(item) {
      const isActive = item.classList.contains('ui-accordion__item--active');

      if (this.settings.exclusive && !isActive) {
        // Close all items first
        this.items.forEach(i => this._close(i));
      }

      if (isActive) {
        this._close(item);
      } else {
        this._open(item);
      }
    }

    _open(item) {
      item.classList.add('ui-accordion__item--active');
      const content = item.querySelector(CONTENT_SELECTOR);
      if (content) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    }

    _close(item) {
      item.classList.remove('ui-accordion__item--active');
      const content = item.querySelector(CONTENT_SELECTOR);
      if (content) {
        content.style.maxHeight = '0';
      }
    }

    open(index) {
      if (this.items[index]) {
        this._open(this.items[index]);
      }
    }

    close(index) {
      if (this.items[index]) {
        this._close(this.items[index]);
      }
    }

    destroy() {
      this.items.forEach(item => {
        item.classList.remove('ui-accordion__item--active');
        const content = item.querySelector(CONTENT_SELECTOR);
        if (content) {
          content.style.maxHeight = '';
        }
      });
    }
  }

  // Register module
  UI.registerModule('accordion', {
    init: function() {
      const accordions = document.querySelectorAll(ACCORDION_ATTR);
      accordions.forEach(el => {
        if (!UI.getInstance(el)) {
          const instance = new Accordion(el);
          UI.setInstance(el, instance);
        }
      });
    }
  });
})();
