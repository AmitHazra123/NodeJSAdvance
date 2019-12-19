// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shoudContinue() {
  // check one: Any pending setTimeout, setInterval, setImmediate?
  // check two: Any pending OS Tasks? (Like server listening to port)
  // check three: Any pending long running operations? (like fs module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entire body executes in one 'tick'
while (shoudContinue()) {
  // event loop
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called
  // setTimeout, setInterval, setImmediate

  // 2) Node looks at pendingOSTasks and pendiingOperations and calls relevent callbacks
  
  // 3) Pause execution. Continue when...
  // - a new pendingOSTask is done
  // - a new pendingOperation is done
  // - a timer is about to complete
  
  // 4) Look at pendingTimers. Call any setImmediate

  // 5) Handle any close events
}

// exit back to terminal
