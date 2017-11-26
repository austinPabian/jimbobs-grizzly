import * as $ from 'jquery'

/**
 * These are resolved relative to node_modules,
 * i.e. <projectRoot>/node_modules/bootstrap/js/tooltip.js
 */
import 'bootstrap/js/tooltip'
import 'bootstrap/js/popover'

$('[data-toggle=tooltip]').tooltip()
$('[data-toggle=popover]').popover()