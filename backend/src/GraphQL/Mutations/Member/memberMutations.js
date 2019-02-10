var addMember = require('./Mutations/addMember').addMember;
var updateMember = require('./Mutations/updateMember').updateMember;
var removeMember = require('./Mutations/removeMember').removeMember;

//Pools all Member mutations
module.exports = {
  addMember,
  updateMember,
  removeMember
}