import { Util } from "./Libs.js";

class Dom {
  constructor(selector) {
    this.item = null;
    if (selector[0] == "." || selector[0] == "#") {
      this.item = Util.get(selector);
    } else if (selector instanceof HTMLElement) {
      this.item = selector;
    }
    // old when we use src.js
    // else {
    //   this.item = Src.get(selector);
    // }
    this.selector = selector;
    // push
  }

  attr(property, value="") {
    if(value!=""){
      this.item.attributes[property].value = value;
      return this
    }else
      return this.item.attributes[property].value
      
  }
  onClick(callback=null){
    if(callback==null){
      this.item.onclick = ()=>{}
    }else{
      this.item.onclick = callback
    }
    return this
  }
  onEvent(event='click',callback){
    this.item.addEventListener(event,callback)
  }
  setValue(val) {
    this.item.attributes["value"].value = val;
  }
  hidden(isHidden) {
    if (isHidden == false) this.item.style.visibility = "visible";
    else this.item.style.visibility = "hidden";
  }
  setContent(text) {
    this.item.innerHTML = text;
    return this;
  }
  addClass(className) {
    this.item.classList.add(className);
    return this;
  }
  removeClass(className) {
    this.item.classList.remove(className);
    return this;
  }
  zIndex(idx) {
    this.item.style.zIndex = idx;
    return this;
  }
  opacity(val = 1) {
    this.item.style.opacity = val;
    return this;
  }
  rotate(deg) {
    this.item.style.transform = `rotate(${deg}deg)`;
    return this;
  }
  addClass(className) {
    this.item.classList.add(className);
    return this;
  }
  removeClass(className) {
    this.item.classList.remove(className);
    return this;
  }
  borderRadius(amount) {
    amount += "px";
    this.styles({
      borderRadius: amount,
    });
  }
  scale(val = 1) {
    this.item.style.scale = val;
    return this;
  }
  get() {
    return this.item;
  }
  left(leftPixel) {
    this.item.left = leftPixel + "px";
    return this;
  }
  set(
    left = null,
    top = null,
    height = null,
    width = null,
    bottom = null,
    right = null,
    disp = "block"
  ) {
    // coordinates
    this.left = left;
    this.top = top;
    this.bottom = bottom;
    this.right = right;
    this.height = height;
    this.width = width;
    this.item.style.opacity = 1;
    this.item.style.transform = "translateX(0) translateY(0)";

    if (this.left !== null) this.item.style.left = String(this.left) + "px";
    if (this.top !== null) this.item.style.top = String(this.top) + "px";
    if (this.bottom !== null)
      this.item.style.bottom = String(this.bottom) + "px";
    if (this.right !== null) this.item.style.right = String(this.right) + "px";
    if (this.height !== null)
      this.item.style.height = String(this.height) + "px";
    if (this.width !== null) this.item.style.width = String(this.width) + "px";
    this.show(disp);
    return this;
  }
  show(disp = "block") {
    //! push for every element
    this.push();

    this.item.style.display = disp;
    // this.opacity();
    return this;
  }
  hide() {
    this.item.style.display = "none";
    return this;
  }
  fadeHide(duration = 700, onCompleteCallback = null){
    anime({
      targets: this.item,
      opacity: 0,
      duration: duration,
      easing: "easeInOutQuad",
      complete: ()=>{
        this.hide()
        if(onCompleteCallback!=null){
          onCompleteCallback()
        }
      }
    });
    return this;
  }
  fadeShow(duration = 700, onCompleteCallback = null){
    this.show().opacity(0)
    anime({
      targets: this.item,
      opacity: 1,
      duration: duration,
      easing: "easeInOutQuad",
      complete: onCompleteCallback
    });
    return this;
  }
  play(speed = 1) {
    this.item.play();
    this.item.playbackRate = speed;
    return this;
  }
  // for setting styles
  styles(props) {
    for (let property in props) {
      this.item.style[property] = props[property];
    }
    return this;
  }
  // * static elements/objects of anime
  static arrayOfAnimes = [];
  static arrayOfItems = [];
  static animePush(animeObj) {
    Dom.arrayOfAnimes.push(animeObj);
  }
  static resetAnimeItems() {
    Dom.arrayOfAnimes = [];
  }
  static hideAll() {
    //to empty the setCC
    Util.setCC("");
    // to delete all content of content adder menu
    // Scenes.items.contentAdderBox.setContent("");
    for (let i of Dom.arrayOfItems) {
      i.hide();
      i.opacity();
    }
    // * reset animes
    for (let i of Dom.arrayOfAnimes) {
      // to reset each anime after back btn pressed
      i.reset();
    }
    Dom.resetItems();
  }
  static resetItems() {
    Dom.arrayOfItems = [];
  }
  static setBlinkArrowRed(
    left = null,
    top = null,
    rotate = 0,
    height = 40,
    width = null
  ) {
    let blinkArrow = new Dom(".blinkArrowRed")
      .set(left, top, height, width)
      .rotate(rotate)
      .zIndex(10000);
    let y = 20;

    var blink = anime({
      targets: blinkArrow.item,
      easing: "easeInOutQuad",
      opacity: 1,
      translateY: y,
      direction: "alternate",
      loop: true,
      autoplay: false,
      duration: 300,
    });
    return {
      reset() {
        blinkArrow.hide();
        blink.reset();
      },
      play() {
        blink.play();
      },
    };
  }
  static setBlinkArrowOnElement(
    connectingElement,
    direction,
    arrowLeft = null,
    arrowTop = null
  ) {
    let blinkArrow = new Dom(".blinkArrowRed");
    let arrowHeight = 40;
    let arrowWidth = 34;
    let arrowRotate = 0;
    let gap = 6

    // get left top height and width of the connectingElement
    const connectingElementProps = {
      left: connectingElement.item.offsetLeft,
      top: connectingElement.item.offsetTop,
      right: Number(
        connectingElement.item.offsetLeft + connectingElement.item.offsetWidth
      ),
      bottom: Number(
        connectingElement.item.offsetTop + connectingElement.item.offsetHeight
      ),
      centerX: Number(
        connectingElement.item.offsetLeft +
          connectingElement.item.offsetWidth / 2
      ).toFixed(2),
      centerY: Number(
        connectingElement.item.offsetTop +
          connectingElement.item.offsetHeight / 2
      ).toFixed(2),
    };

    for(let key in  connectingElementProps) {
      console.log(connectingElement.item)
      console.log(`${key}: ${connectingElementProps[key]}`)
    }

    switch (direction) {
      case "left":
        arrowRotate = 90;
        arrowLeft = connectingElementProps.left -  arrowWidth - gap;
        arrowTop = connectingElementProps.centerY - arrowHeight / 2;
        break;

      case "right":
        arrowRotate = -90;
        arrowLeft = connectingElementProps.right + gap;
        arrowTop = connectingElementProps.centerY - arrowHeight / 2;
        break;

      case "top":
        arrowRotate = -180;
        arrowLeft = connectingElementProps.centerX - arrowWidth / 2;
        arrowTop = connectingElementProps.top - arrowHeight - gap
        break;

      case "bottom":
        arrowRotate = 0;
        arrowLeft = connectingElementProps.centerX - arrowWidth / 2;
        arrowTop = connectingElementProps.bottom + gap;
        break;
    }

    blinkArrow.set(arrowLeft, arrowTop, arrowHeight, arrowWidth).rotate(arrowRotate).zIndex(10000);
    let y = 20;

    var blink = anime({
      targets: blinkArrow.item,
      easing: "easeInOutQuad",
      opacity: 1,
      translateY: y,
      direction: "alternate",
      loop: true,
      autoplay: false,
      duration: 300,
    });
    return {
      reset() {
        blinkArrow.hide();
        blink.reset();
      },
      play() {
        blink.play();
      },
    };
  }
  static setBlinkArrow(
    isX = true,
    left = null,
    top = null,
    height = 60,
    width = 60,
    rotate = 0
  ) {
    // because we added the blinkArrow image out of the anime-main
    // top += 130;
    let blinkArrow = new Dom(".blinkArrow")
      .set(left, top, height, width)
      .rotate(rotate)
      .zIndex(10000);
    if (isX === -1) {
      blinkArrow.hide();
      return;
    }
    let x = 0,
      y = 0;
    if (isX) {
      x = 20;
    } else {
      y = 20;
    }
    var blink = anime({
      targets: blinkArrow.item,
      easing: "easeInOutQuad",
      opacity: 1,
      translateX: x,
      translateY: y,
      direction: "alternate",
      loop: true,
      autoplay: false,
      duration: 300,
    });

    return blink;
  }
  push() {
    if (this.selector != ".anime-header") Dom.arrayOfItems.push(this);
    return this;
  }
  forMathematicalExpressionBtn = 0;
}

class DomList {
  constructor(selector) {
    this.items = Util.getAll(selector).map((ele) => new Dom(ele));
  }
}

export { Dom, DomList };
