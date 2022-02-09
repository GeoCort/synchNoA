# An Async Walkthrough
Showcasing some examples of asynchronous programming. 
## What is Asynchronous programming? 
The idea that some functions take time, and would halt computer interaction, if the program waited on that function. This results in the programming sending an asynchronous call that eventually returns a promise. 
## Call back functions
A function that is called after a function that takes a slow action is perfromed

## Call back errors
A widely used convention is that the firtst arg in a call back is used to indicate that the action failed.
the second argument contains the value produced by the action if it was successful.
 ## Promises
 Promises make this error non-existent by creating a resolved branch & a failure branch. The .then() method can only be called, when the previous promise is resolved. If the promise fails, the error will stop calling. Throwing an excepetion will also cease any further calls down the promise chain. 
 ## Types of Promises
 