import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

import { publishComposite } from 'meteor/reywood:publish-composite';
import { Debates } from './schemas/debates';
import { Organizations } from './schemas/organizations';
import { UserAtDebate } from './schemas/user-at-debate';

import { debateGetIdByNum }  from './helpers/debates';

export { Debates, Organizations, UserAtDebate };

if (Meteor.isServer) {

  Meteor.publish('debates', function debatesPublication() {
    return Debates.find();
  })

  Meteor.publish('organizations', function organizationPublication() {
    return Organizations.find();
  })

  Meteor.publish('userAtDebate', function userAtDebatePublication() {
    return UserAtDebate.find();
  })

  Meteor.publish('users', function userPublication() {
    return Meteor.users.find();
  })

}
