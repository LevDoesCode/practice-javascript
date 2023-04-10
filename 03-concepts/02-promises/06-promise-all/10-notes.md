1. **Promise.all**(iterable): takes an iterable (usually an array) of promises and returns a new promise that resolves to an array of the results of all the input promises, in the same order as the input. The returned promise will reject if any of the input promises reject.

2. **Promise.any**(iterable): takes an iterable (usually an array) of promises and returns a new promise that resolves to the value of the first input promise that fulfills (i.e., resolves), ignoring any promises that reject. The returned promise will reject if all input promises reject.

3. **Promise.allSettled**(iterable): takes an iterable (usually an array) of promises and returns a new promise that resolves to an array of objects, one for each input promise, with the following properties:
* status: either "fulfilled" or "rejected"
* value (if status is "fulfilled"): the result of the promise
* reason (if status is "rejected"): the rejection reason of the promise

4. **Promise.race**(iterable): takes an iterable (usually an array) of promises and returns a new promise that resolves or rejects as soon as one of the input promises resolves or rejects, with the value or reason of the first one to settle.

In summary, **Promise.all()** waits for all promises to resolve before returning a result, **Promise.any()** waits for any promise to resolve before returning a result, **Promise.allSettled()** returns an array of results (including both resolved and rejected promises), and **Promise.race()** returns the result (whether resolved or rejected) of the first promise to settle.
