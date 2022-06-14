/* Created by: Titus Diceman
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit-5-08-html/sw.js", {
    scope: "/ICS2O-unit-5-08-html/",
  })
}

/**
 * Input.
 */

 function buttonClicked() {

  var integer1 = parseInt(document.getElementById('integer1').value)
  var integer2 = parseInt(document.getElementById('integer2').value)
  var currentAnswer = parseInt(document.getElementById('integer1').value)
  var answer = 0 
  var remainder = 0


  while (currentAnswer > 0 ) {
    currentAnswer = currentAnswer - integer2
    if (currentAnswer >= 0) {
      answer++
    }
  } 
   while (currentAnswer < 0 ) {
    currentAnswer++
    remainder++
  }
  document.getElementById("output").innerHTML = " The answer is: " + answer + " The remainder is: " + remainder
}