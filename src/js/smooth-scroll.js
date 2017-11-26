import * as $ from 'jquery'

$('.btn, .arrow, .bounce, .footer-logo, .navbar-nav li a[href^=\'#\']').on('click', function(e) {
  /* eslint-disable no-invalid-this */

  // prevent default anchor click behavior
  e.preventDefault()

  const hash = this.hash
  const duration = 300
  const distFromTop = $(this.hash).offset().top

  // @todo: this is a terrible no-good awful way to do smooth scrolling
  $('html, body').animate({ scrollTop: distFromTop }, duration, () => {

    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = hash
  })

})