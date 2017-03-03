'use strict';
const icon = require('../icon.png')
const keyword = 'reload'

const plugin = ({term, display, actions}) => {
  const match = term.match(/^reload\s*/)

  if (match) {
    display({
      icon,
      title: 'Reload',
      subtitle: 'Reload Cerebro App',
      onSelect() {
        location.reload()
      }
    })
  }
};

module.exports = {
  keyword,
  fn: plugin
}
