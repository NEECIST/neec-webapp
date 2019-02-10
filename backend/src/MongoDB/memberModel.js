var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tittle: {
    type: String,
    required: true
  },
  imgs: {
    type: Array,
    required: true
  },
  email: {
    type: String,
    required:true
  },
  links: {
    type: Array,
    required: true
  },
  joinDate:{
    type:Array,
    required:true
  },

});
var MemberModel = mongoose.model('member', MemberSchema);
module.exports = MemberModel;