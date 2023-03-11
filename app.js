window.addEventListener("devicemotion", function(event) {
  var acceleration = event.accelerationIncludingGravity;
  var x = acceleration.x.toFixed(2);
  var y = acceleration.y.toFixed(2);
  var z = acceleration.z.toFixed(2);
  document.getElementById("x").innerHTML = x;
  document.getElementById("y").innerHTML = y;
  document.getElementById("z").innerHTML = z;
});
