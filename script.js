/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
var now = new Date ();
document.getElementById("demo").innerHTML = now.getDate();
var countDownDate = new Date("April 1, 2019 11:59:59").getTime();
 var distance = now -countDownDate;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

 document.getElementById("demo").innerHTML = days + "d " + hours + "h "
 + minutes + "m " + seconds + "s ";
