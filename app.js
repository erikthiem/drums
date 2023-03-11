if (typeof DeviceMotionEvent.requestPermission === 'function') {
  // iOS 13+
  DeviceMotionEvent.requestPermission().then(permissionState => {
    if (permissionState === 'granted') {
      let sensor = new Accelerometer({frequency: 60});
      sensor.addEventListener('reading', function() {
        var x = sensor.x.toFixed(2);
        var y = sensor.y.toFixed(2);
        var z = sensor.z.toFixed(2);
        document.getElementById('data').innerHTML = 'X: ' + x + '<br>Y: ' + y + '<br>Z: ' + z;
      });
      sensor.start();
    } else {
      document.getElementById('data').innerHTML = 'Accelerometer permission not granted.';
    }
  }).catch(console.error);
} else {
  // Non-iOS 13+ devices
  if ('DeviceMotionEvent' in window) {
    let sensor = new Accelerometer({frequency: 60});
    sensor.addEventListener('reading', function() {
      var x = sensor.x.toFixed(2);
      var y = sensor.y.toFixed(2);
      var z = sensor.z.toFixed(2);
      document.getElementById('data').innerHTML = 'X: ' + x + '<br>Y: ' + y + '<br>Z: ' + z;
    });
    sensor.start();
  } else {
    document.getElementById('data').innerHTML = 'Accelerometer not supported.';
  }
}
