var addEvent = require('./Mutations/addEvent').addEvent;
var updateEvent = require('./Mutations/updateEvent').updateEvent;
var removeEvent = require('./Mutations/removeEvent').removeEvent;

//Pools all Event mutations
module.exports = {
  addEvent,
  updateEvent,
  removeEvent
}