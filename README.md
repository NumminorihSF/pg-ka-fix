#pg-ka-fix

This package fixes keep-alive problem of node-postgres package.

## Install

    npm install pg-ka-fix
    
**Warning!** Package has now dependencies. To use pg - you should add it to your project dependencies.
    
## Usage

To fix pg, you just should execute function that is exported by this module:

    require('pg-ka-fix')();
    
After that, if connection will be terminated - `pg.Client#query()`'s callback will emit error on 1st argument.
    
## Problem

There is some BUG with connection pool in node-postgres lib.

To reproduce it - you need connect to postgresql, start request and kill db process by kill -9. 
Client will not be free on any time. So, all client from client-pull was connected, 
you will newer be able to do something with db without restarting of you application.

Unfourtiantly, you there are more ways to kill db process, without your wish. For example, some cases with `plv8` 
extension dropped our db process.


## License

The MIT License (MIT)

Copyright (c) 2016 Konstantine Petryaev

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