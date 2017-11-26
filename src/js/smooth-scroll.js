import * as $ from 'jquery'

// @todo: this is a terrible no-good awful way to do smooth scrolling
$('.btn, .arrow, .bounce, .footer-logo, .navbar-nav li a[href^=\'#\']').on('click', function(e) {
  /* eslint-disable no-invalid-this */

  // prevent default anchor click behavior
  e.preventDefault()

  // store hash
  const hash = this.hash

  // animate
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 300, () => {

    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = hash
  })

})