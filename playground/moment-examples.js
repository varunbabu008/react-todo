var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp',now.unix());

var timestamp = 1481297672;
var CurrentMoment = moment.unix(timestamp);

console.log('current moment',CurrentMoment.format('MMM D, YY @ h:mm a'));

console.log('current moment',CurrentMoment.format('MMMM Do, YYYY @ h:mm A'));
