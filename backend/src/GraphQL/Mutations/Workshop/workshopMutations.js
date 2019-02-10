var addWorkshop = require('./Mutations/addWorkshop').addWorkshop;
var updateWorkshop = require('./Mutations/updateWorkshop').updateWorkshop;
var removeWorkshop = require('./Mutations/removeWorkshop').removeWorkshop;

//Pools all Workshop mutations
module.exports = {
  addWorkshop,
  updateWorkshop,
  removeWorkshop
}