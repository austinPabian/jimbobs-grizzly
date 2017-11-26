import * as $ from 'jquery'
import '../../vendor/js/tt-cart'

const toggleCart = () =>
  $('body').toggleClass('cart-widget-open')

const openPaypalPopup = () =>
  window.open(
    'https://www.paypal.com/cgi-bin/webscr'
      + '?cmd=_cart'
      + '&display=1'
      + '&business=jimbobsgrizzlybeardcare@gmail.com'
  )

$('#items-counter').click(openPaypalPopup)
$('#cart-widget-close, cart-widget-close-overlay').click(toggleCart)