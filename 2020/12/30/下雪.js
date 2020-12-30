const random = function () {
  return Math.random();
}
class Snow {
  constructor(opt = {}) {
    this.maxSpeed = opt.maxSpeed || 4;
    this.minSpeed = opt.minSpeed || 1;
    this.el = null;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.minWidth = opt.minWidth || 2;
    this.maxWidth = opt.maxWidth || 80;
    // z轴数值
    this.z = 0
    // 快速划过的最大速度
    this.quickMaxSpeed = opt.quickMaxSpeed || 10
    // 快速划过的最小速度
    this.quickMinSpeed = opt.quickMinSpeed || 8
    // 快速划过的宽度
    this.quickWidth = opt.quickWidth || 100
    // 快速划过的透明度
    this.quickOpacity = opt.quickOpacity || 0.2
    this.init();
  }

  move() {
    this.x = this.x + this.speedx;
    this.y = this.y + this.speedy;
    if (this.x < -this.width || this.x > this.windowWidth || this.y > this.windowHeight) {
      this.init(true);
      this.setStyle();
    }
    // this.el.style.left = this.x + 'px';
    // this.el.style.top = this.y + 'px';
    this.el.style.transform = `translate3D(${this.x}px, ${this.y}px, ${this.z}px)`;
  }

  setStyle() {
    this.el.style.cssText = `
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: ${this.width}px;
      height: ${this.width}px;
      opacity: ${this.opacity};
      background-image: radial-gradient(#fff 0%, rgba(255, 255, 255, 0) 60%);
      border-radius: 50%
      z-index: 88888888888;
      transform: translate(${this.x}px, ${this.y}px);
      pointer-events: none;
    `;
  }

  init(reset) {
    let isQuick = Math.random() > 0.8;
    this.speedx = random() * this.maxSpeed + this.minSpeed;
    this.speedy = isQuick ? random() * this.quickMaxSpeed + this.quickMinSpeed : this.speedx * random();
    this.opacity = isQuick ? this.quickOpacity : random();
    this.width = isQuick ? this.quickWidth : Math.floor(random() * this.maxWidth + this.minWidth);
    this.x = Math.floor(random()*(this.windowWidth - this.width));
    this.y = Math.floor(random() * (this.windowHeight - this.width));
    if (reset && Math.random() > 0.7) {
      this.x = -this.width;
    } else if (reset){
      this.y = -this.width;
    }
  }

  render() {
    this.el = document.createElement('div');
    document.body.appendChild(this.el);
    this.setStyle();
  }
}
