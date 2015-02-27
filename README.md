## Namecoin Resolving Library
The Namecoin Resolving Library provides a [node.js/io.js dns module](http://nodejs.org/api/dns.html)
compatible interface to perform name resolution using the [Namecoin Data Processing Library](https://www.npmjs.com/search?q=nmcpp).

### Supported Record Types:
[A](https://dnschain.info/_s/nmcns/mocha/?grep=%5B0003%5D%20A),
[AAAA](https://dnschain.info/_s/nmcns/mocha/?grep=%5B0004%5D%20AAAA),
[CNAME](https://dnschain.info/_s/nmcns/mocha/?grep=%5B0005%5D%20CNAME),
[SOA](https://dnschain.info/_s/nmcns/mocha/?grep=%5B0006%5D%20SOA),
[TXT](https://dnschain.info/_s/nmcns/mocha/?grep=%5B0007%5D%20TXT),
[NS](https://dnschain.info/_s/nmcns/mocha/?grep=%5B0008%5D%20NS),
[MX](https://dnschain.info/_s/nmcns/mocha/?grep=%5B0009%5D%20MX),
[SRV](https://dnschain.info/_s/nmcns/mocha/?grep=%5B0010%5D%20SRV)

### Quick Examples

#### ES5
Resolving `webrtc.bit/SOA/IN`
```js
var nmcns = require('nmcns');

nmcns.resolveSoa('webrtc.bit', function(err, soa) {
    console.log(soa);
});
```
#### ES7
Resolving `_https._tcp.webrtc.bit/SRV/IN`
```js
import nmcpp from 'nmcpp';
import nmcns from 'nmcns';

ns = new nmcpp.Resolver({
    resolver: new nmcpp.Resolver();
});

(async function() {
    var services = await ns.resolveSrvAsync('_https._tcp.webrtc.bit');
    console.log(services);
}())
```

### Tests
* [Online Unit Tests](https://dnschain.info/_s/nmcns/mocha/)
* [Online Example](https://dnschain.info/_s/nmcns/mocha/?grep=%5B1000%5D%20Examples)

### The MIT License (MIT)
Copyright (c) 2015 PlexRay, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
