module.exports = () => {
  console.log('=> Async styles: EXECUTED')

  require.ensure('./async.css', require => {
    console.log('=> Async styles: LOADED')
  })
}
