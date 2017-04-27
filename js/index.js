window.onload = function() {

var si = require('systeminformation');
 
// callback style
si.cpu(function(data) {
  document.getElementById('cpubrand').innerHTML = data.brand;
  document.getElementById('cpucores').innerHTML = data.cores;
  document.getElementById('cpuclock').innerHTML = data.speed;
});

si.cpuCurrentspeed(function(data) {
  console.log(data);
});

//Can we get replace this with the system information module?
  var cpuu = require('cputilization');
  var sampler = cpuu();
  sampler.on('sample', function(sample) {
    document.getElementById('mycpuu').innerHTML = Math.round((sample.percentageBusy() * 100)) + "%";
  });
}