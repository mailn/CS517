var Gpio = require('onoff').Gpio;
var LED = new Gpio(16, 'out');
var pushButton = new Gpio(26, 'in', 'both');

pushButton.watch(function(err, value){
	if(err){
		console.error('There was an error', err);
		console.log('There was an error', err);
		return;
	}
	LED.writeSync(value);
	console.log('Value', value);
});

function unexportOnClose(){
	LED.writeSync(0);
	LED.unexport();
	pushButton.unexport();
};

process.on('SIGINT', unexportOnClose);