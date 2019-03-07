var onoff = require('onoff');
var Gpio = onoff.Gpio;
var led = new Gpio(16, 'out');
var interval;

interval = setInterval(function (){
	var value = (led.readSync() + 1) % 2;
	led.write(value, function(){
		console.log("Changed LED state to: " + value);
	});
}, 250);

process.on('SIGINT', function() {
	clearInterval(interval);
	led.writeSync(0);
	led.unexport();
	console.log("Bye, bye!");
	process.exit();
});