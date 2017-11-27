import * as $ from 'jquery'

$(async () => {
  /**
   * Lazy loading (strive for minimal file size necessary for page render)
   */
  await Promise.all([
    /**
     * These are resolved relative to node_modules,
     * i.e. <projectRoot>/node_modules/bootstrap/js/tooltip.js
     */
    import('bootstrap/js/tooltip'),
    import('bootstrap/js/popover')
  ])
  $('[data-toggle=tooltip]').tooltip()
  $('[data-toggle=popover]').popover()
})