const { EventEmitter } = require('events');
const { red, dim, cyan } = require('colors');
const emitter = new EventEmitter();

function log(...args) {
    emitter.emit('log', args);
}

function info(...args) {
    emitter.emit('info', args);
}

function error(...args) {
    emitter.emit('error', args);
}

function onLog(e) {
    const output = e.join(' ');
    console.log(dim(output));
}

function onInfo(e) {
    const output = e.join(' ');
    console.info(cyan(output));
}

function onError(e) {
    const output = e.join(' ');
    console.error(red(output));
}

function trace() {
    emitter.on('log', onLog);
    emitter.on('info', onInfo);
    emitter.on('error', onError);
}

module.exports = {
    log,
    info,
    error,
    trace
}
