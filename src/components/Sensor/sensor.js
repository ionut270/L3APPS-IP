console.log("Test");
const details = document.getElementById("details");
if (window.AmbientLightSensor) {
    try {
        const sensor = new AmbientLightSensor();
        sensor.onreading = () => {
            details.innerHTML = sensor.illuminance;
            if (sensor.illuminance < 50) {
                document.body.className = 'darkLight';
            } else {
                document.body.className = 'brightLight';
            }
        }
        sensor.onerror = event => document.getElementById("details").innerHTML = event.error.message;
        sensor.start();
    } catch (err) {
        details.innerHTML = err.message;
    }
} else {
    details.innerHTML = 'It looks like your browser doesnt support this feature';
}