// Basics

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
    console.log(`data recieve  `);
})

customEmitter.emit('response');