var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkshopSchema = new Schema({
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
var WorkshopModel = mongoose.model('workshop', WorkshopSchema);
module.exports = WorkshopModel;