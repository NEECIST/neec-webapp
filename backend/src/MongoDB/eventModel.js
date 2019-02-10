var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  imgs:{
    type:Array,
    required:true
  },
  links:{
    type:Array,
    required:true
  },
  speakers:{
    type:Array,
    required:true
  }
});
var EventModel = mongoose.model('event', EventSchema);
module.exports = EventModel;