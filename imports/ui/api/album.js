import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

export const Albums = new Mongo.Collection('albums');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('albums', function albumsPublication() {
    return Albums.find();
  });
}

Meteor.methods({
  'Albums.update'(_id, data){
    Albums.update(_id, {
      $set: {
        photo: data
      }
    })
  },
  'Albums.remove'(id, cb){
    Albums.remove(id, cb)
  },
  'Albums.setTitle'(id, data){
    Albums.update(id, {
      $set: {
        titleImg: data
      }
    })
  }
})