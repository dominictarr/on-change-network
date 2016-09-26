var os = require('os')

function each (network) {
  return Object.keys(network).map(function (interface) {
    return network[interface].filter(function (e) {
      return !e.internal
    }).map(function (e) {
      return interface+'/'+e.address
    })
  }).reduce(function (a, b) {
    return a.concat(b)
  }, [])
}

module.exports = function (onNetwork, ref) {
  var init = each(os.networkInterfaces()).join(',')
  var int = setInterval(function (e) {
    var cur = each(os.networkInterfaces()).join(',')
    if(init !== cur)
      onNetwork(init = cur)
  }, 1000)

  //unreference the counter (only on node)
  if(!ref && int.unref) int.unref()
}

if(!module.parent)
  module.exports(function (addrs) {
    console.log(addrs)
  }, true)


