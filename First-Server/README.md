# Node Core Modules
*some*
* http - launch a server, send requests
* https - launch a SSL server - encrypted 
* fs
* path
* os
  

# Single thread, Event Loop & Blocking code

1. Timers - execute setTimeout, setInterval Callbacks
2. Pending Callbacks - execute I/O related Callbacks that were deferred 
3. Poll - retrieve new I/O events, their callbacks
4. Check - execute setImmediate callbacks
5. Close Callbacks - execute all 'close' event callbacks 
6. process.exit - if refs == 0


