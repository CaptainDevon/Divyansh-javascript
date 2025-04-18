import EventEmitter from "node:events";
const emitter = new EventEmitter();

emitter.on('hello',message => {
    console.log(`event handeled: ${message}`);
});

setTimeout(()=>{
    emitter.emit('hello','this message is from the event');
},5000);