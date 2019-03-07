var onoff = require('onoff');
var Gpio = onoff.Gpio;
var led1 = new Gpio(16, 'out');
var led2 = new Gpio(20, 'out');
var led3 = new Gpio(21, 'out');
var leds = [led1, led2, led3];
var index = 0;
var interval;

interval = setInterval(flowingLeds, 500);

function flowingLeds(){	
	leds.forEach(function(value){
		value.writeSync(0);
	});
	index++;
	if(index==3) index=0;	
	leds[index].writeSync(1);	
};

process.on('SIGINT', function() {
	clearInterval(interval);
	leds.forEach(function(value){
		value.writeSync(0);
		value.unexport();	
	});
	console.log("Bye, bye!");
	process.exit();
});