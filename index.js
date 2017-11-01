require('./index.css')

require.ensure('./async.js', require => {
  console.log('=> Async style: LOADED')
  const asyncModule = require('./async.js')
  asyncModule()
}, 'async')
