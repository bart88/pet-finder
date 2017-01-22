var schedule = require('node-schedule');
var jobs = {};

module.exports = {
    start: function start(name, time, method) {
        jobs[name] = schedule.scheduleJob('*/' + minute + '* * * * *', method);
    },
    cancel: function cancel(name) {
        jobs[name].cancel();
    },
    getAll: function getAll() {
        return jobs;
    }
};
