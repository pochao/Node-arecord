# Node-arecord

```
var Sound = require('./node_arecord')
var sound = new Sound('my.wave');

sound.record();

setTimeout(function () {
	sound.stop();
}, 3000)

sound.on('complete',function(){
    console.log('錄製完成')
})
```
