let x = document.getElementById("x");
let y = document.getElementById("y");
let z = document.getElementById("z");

if (typeof(DeviceMotionEvent) !== "undefined" && typeof(DeviceMotionEvent.requestPermission) === "function") {
  // iOS 13+
  DeviceMotionEvent.requestPermission().then(response => {
    if (response === 'granted') {
      window.addEventListener('devicemotion', e => {
        x.innerHTML = e.accelerationIncludingGravity.x.toFixed(2);
        y.innerHTML = e.accelerationIncludingGravity.y.toFixed(2);
        z.innerHTML = e.accelerationIncludingGravity.z.toFixed(2);
      });
    }
  }).catch(console.error);
} else {
  // non-iOS 13+ and non-iOS devices
  window.addEventListener('devicemotion', e => {
    x.innerHTML = e.accelerationIncludingGravity.x.toFixed(2);
    y.innerHTML = e.accelerationIncludingGravity.y.toFixed(2);
    z.innerHTML = e.accelerationIncludingGravity.z.toFixed(2);
  });
}
