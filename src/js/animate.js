class Util {
  extend(custom, defaults) {
    for (let key in defaults) {
      if (custom[key] == null) {
        custom[key] = defaults[key];
      }
    }
    return custom;
  }

  createEvent(event, bubble = false, cancel = false, detail = null) {
    return new CustomEvent(event, { bubbles: bubble, cancelable: cancel, detail: detail });
  }

  emitEvent(elem, event) {
    if (elem.dispatchEvent) {
      elem.dispatchEvent(event);
    }
  }

  addEvent(elem, event, fn) {
    elem.addEventListener(event, fn, false);
  }

  removeEvent(elem, event, fn) {
    elem.removeEventListener(event, fn, false);
  }

  innerHeight() {
    return window.innerHeight || document.documentElement.clientHeight;
  }
}

class WOW {
  constructor(options = {}) {
    this.config = new Util().extend(options, {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    });
    this.boxes = [];
    this.scrolled = true;
  }

  init() {
    this.boxes = Array.from(document.querySelectorAll(`.${this.config.boxClass}`));
    window.addEventListener('scroll', () => this.scrollHandler());
    window.addEventListener('resize', () => this.scrollHandler());
    this.scrollHandler();
  }

  scrollHandler() {
    this.boxes.forEach((box) => {
      if (this.isVisible(box)) {
        this.show(box);
      }
    });
  }

  isVisible(box) {
    const offset = this.config.offset;
    const viewTop = window.scrollY;
    const viewBottom = viewTop + window.innerHeight - offset;
    const top = box.getBoundingClientRect().top + window.scrollY;
    const bottom = top + box.clientHeight;
    return top <= viewBottom && bottom >= viewTop;
  }

  show(box) {
    box.classList.add(this.config.animateClass);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WOW().init();
});
