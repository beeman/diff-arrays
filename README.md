# Diff Arrays

[![browser support](https://ci.testling.com/beeman/diff-arrays.png)](https://ci.testling.com/beeman/diff-arrays)

Utility method to compute the difference between two arrays. AMD and CommonJS
compatible; works in [Node.js](http://nodejs.org) and the browser.

It's fork of [array-difference](https://github.com/jugglinmike/array-difference) that shows in the output if the 
difference is on the left-hand side (`lhs`) or right-hand side (`rhs`). 

Thanks [Mike Pennisi](https://github.com/jugglinmike) for the original.


## Installation

    $ npm install diff-arrays

## Example

    var da = require('diff-arrays');
    
    var left = [
      'anyone@example.com',
      'anytwo@example.com',
      'anythre@example.com',
      'anyfour@example.com'
    ];
    
    var right = [
      'anyfour@example.com',
      'anyfive@example.com',
      'anysix@example.com',
      'anyseven@example.com'
    ];
    
    var diff = da(left, right);
    
    console.log(diff);
    
## Outputs 

    { lhs:
      [ 'anyone@example.com',
        'anytwo@example.com',
        'anythre@example.com' ],
        rhs:
      [ 'anyfive@example.com',
        'anysix@example.com',
        'anyseven@example.com' ] }



## License

Copyright (c) 2015 [Bram Borggreve](https://github.com/beeman)  
Licensed under the MIT license.

Copyright (c) 2013 [Mike Pennisi](https://github.com/jugglinmike)  
Licensed under the MIT Expat license.
