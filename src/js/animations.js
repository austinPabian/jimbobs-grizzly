import WOW from 'wow.js'

const wow = new WOW({
  animateClass: 'animated',
  offset: 150,
  mobile: false,
  // callback(box) {
  //   // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  // }
})

wow.init()