# on-change-network

Call a listener whenever the network interface changes.
I.e. detect when the local user has changed to another wifi network.

## example

``` js
require('on-change-network')(function () {
  console.log('wifi changed')
})
```

## License

MIT
